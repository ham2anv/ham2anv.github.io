import templates from "./js/templates.js";

const plural = new Intl.PluralRules("en-us");

const Pluralize = (value, one = "point", many = "points") =>
  plural.select(value) === "one" ? one : many;

const Difficulties = {
  Easy: ["E", -1],
  Average: ["A", -2],
  Hard: ["H", -3],
  "Very Hard": ["VH", -4],
};

const mod = (value) => (value >= 0 ? "+" + value : value);
const paragraph = (text) => `<p>${text}</p>`;
const inline = (text) => `<strong>${text}</strong>: `;
const red = (text) => `<span style='color: red'>${text}</span>`;
const sum = (prop) => (total, current) =>
  total + (prop ? current[prop] : current);
const alphabetize = (a, b) => a.localeCompare(b);
const alpha = (list) => list.sort(alphabetize).join("; ");
const mapJoin = (list, map, seperator = "") => list.map(map).join(seperator);
const p = (list) => mapJoin(list, paragraph);
const rel = (skill) => skill.level + Difficulties[skill.difficulty][1];
const describe = (t) => (t.description ? " (" + t.description + ")" : "");

const picks = (final, t) => {
  if (t.picked) {
    final.push(...t.fixed);
    if ("steps" in t)
      final.push(
        ...t.steps.flatMap((s) =>
          s.choices.filter((c) => c.picked).flatMap((c) => c.fixed)
        )
      );
  }
  return final;
};

const condense = (final, current) => {
  current.adjusts = { points: 0, level: 0 };
  const exist = final.find(
    (u) => u.name == current.name && u.description == current.description
  );

  if (exist) {
    if ("points" in current) exist.adjusts.points += current.points;
    else if ("level" in current) exist.adjusts.level += current.level;
  } else final.push(current);

  return final;
};

const Character = {
  /** @type Array<Trait> */
  traits: [],
  templates,

  /**
   * Returns the effective level of a given trait, including
   * adjustments.
   * @param {Trait} trait
   * @returns number
   */
  effective(trait) {
    if (!("level" in trait)) return;

    let modified = false;
    const mods = this.traits
      .filter((t) =>
        t.modifiers?.some((m) =>
          Array.isArray(m.target)
            ? m.target[0] == trait.name && m.target[1] === trait.description
            : m.target === trait.name
        )
      )
      .reduce((final, current) => {
        modified = true;
        return (
          final +
          current.modifiers
            .find((m) =>
              Array.isArray(m.target)
                ? m.target[0] == trait.name && m.target[1] === trait.description
                : m.target === trait.name
            )
            ?.value(this.effective(current)?.level)
        );
      }, 0);

    let result = { level: 0, modified };

    const adjusts = Object.values(trait.adjusts)?.reduce(sum(), 0) + mods;
    if ("base" in trait) {
      if (typeof trait.base === "number")
        result.level = trait.level + trait.base + adjusts;
      else
        result.level =
          adjusts +
          trait.level +
          this.effective(this.traits.find((t) => t.name == trait.base)).level;
    } else if ("attribute" in trait) {
      result.level =
        rel(trait) +
        adjusts +
        this.effective(this.traits.find((t) => t.name == trait.attribute))
          .level;
    } else result.level = trait.level + adjusts;

    return result;
  },

  /**
   * Stat block output.
   * @type string
   */
  get output() {
    this.traits = Object.values(this.templates)
      .flat()
      .reduce(picks, [])
      .reduce(condense, []);

    const attributes = this.traits
      .reduce((final, t) => {
        if ("base" in t) final.push(t);
        return final;
      }, [])
      .map(
        (t) => `${t.name}${describe(t)} ${this.effective(t).level} [${t.cost}]`
      );

    const advantages = this.traits.reduce((final, t) => {
      if (!("base" in t) && !("attribute" in t) && t.cost >= 0) {
        final.push(
          `${t.name}${t.level ? " " + this.effective(t).level : ""}${describe(
            t
          )} [${t.cost}]`
        );
      }
      return final;
    }, []);

    const disadvantages = this.traits.reduce((final, t) => {
      if (!("base" in t) && !("attribute" in t) && t.cost < 0) {
        final.push(
          `${t.name}${t.level ? " " + this.effective(t).level : ""}${describe(
            t
          )} [${t.cost}]`
        );
      }
      return final;
    }, []);

    const skills = this.traits.reduce((final, t) => {
      if ("attribute" in t) {
        final.push(
          `${t.name}${describe(t)} (${Difficulties[t.difficulty][0]}) ${
            t.attribute
          }${rel(t) != 0 ? mod(rel(t)) : ""} [${t.cost}]-${
            this.effective(t).level
          }${this.effective(t).modified ? red("*") : ""}`
        );
      }
      return final;
    }, []);

    return p([
      // `${inline("Total")}${this.traits.reduce(sum("cost"), 0)} ${Pluralize(
      //   this.traits.reduce(sum("cost"), 0)
      // )}`,
      `${inline("Attributes")} ${attributes.join("; ")}.`,
      `${inline("Advantages")} ${alpha(advantages)}.`,
      `${inline("Disadvantages")} ${alpha(disadvantages)}.`,
      `${inline("Skills")} ${alpha(skills)}.`,
      `${red("*")} Trait is modified by another trait, such as a talent.`,
    ]);
  },
};

document.addEventListener("alpine:init", () => {
  Alpine.data("app", () => ({
    Character,
    templates,
    Pluralize,
  }));
});

/**
 * @typedef Trait
 * @property {string} name
 * @property {string} [description]
 */
