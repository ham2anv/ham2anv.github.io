const plural = new Intl.PluralRules("en-us");

const Pluralize = (value, one = "point", many = "points") =>
  plural.select(value) === "one" ? one : many;

function gurpsRoll(level) {
  let result = 0;
  let degree;
  for (let i = 0; i < 3; i++) {
    result += Math.floor(Math.random() * 6) + 1;
  }
  switch (result) {
    case 3:
    case 4:
      degree = "critical success!";
      break;
    case 5:
    case 6:
      degree = level >= result + 10 ? "critical success!" : "success.";
      break
    case 17:
      degree = level <= 16 ? "critical failure!" : "failure.";
      break;
    case 18:
      degree = "critical failure!";
      break;
    default:
      degree = result <= level ? "success." : "failure.";
      break;
  }

  return { result, degree };
}

document.addEventListener("alpine:init", () => {
  Alpine.data("app", () => ({
    Pluralize,
    toaster: {
      queue: [],
      toasts: {
        ["@toast.window"]({ detail }) {
          console.log(detail);
          const newToast = Object.fromEntries(
            Object.entries(detail).map(([key, value]) => [
              key,
              function () {
                return value;
              },
            ])
          );
          newToast["@click"] = function () {
            this.queue.splice(this.queue.indexOf(newToast), 1);
          };
          this.queue.push(newToast);
        },
      },
    },
  }));
  Alpine.data("contents", () => ({
    headers: [...document.querySelectorAll("h2[id]")],
  }));
  Alpine.data(
    "counter",
    ({
      isMod = false,
      count = isMod ? 10 : 0,
      inc = "+1",
      dec = "-1",
      min = isMod ? 0 : -Infinity,
      max = Infinity,
    } = {}) => ({
      init() {
        const decBtn = document.createElement("button");
        decBtn.setAttribute("x-bind", "decrement");
        const outDiv = document.createElement("div");
        outDiv.setAttribute("x-bind", "output");
        const incBtn = document.createElement("button");
        incBtn.setAttribute("x-bind", "increment");

        this.$el.append(decBtn, outDiv, incBtn);
        this.$el.classList.add("counter");
      },
      count,
      output: {
        ["x-text"]() {
          if (isMod) {
            const mod = Math.floor((this.count - 10) / 2);
            return `${this.count} (${(mod >= 0 ? "+" : "") + mod})`;
          }
          return this.count;
        },
      },
      increment: {
        ["@click"]() {
          this.count++;
        },
        ["x-text"]() {
          return inc;
        },
        [":disabled"]() {
          return this.count >= max;
        },
      },
      decrement: {
        ["@click"]() {
          this.count--;
        },
        ["x-text"]() {
          return dec;
        },
        [":disabled"]() {
          return this.count <= min;
        },
      },
    })
  );
  Alpine.data("damage", ({ dice, adds }) => ({
    dice,
    adds,
    init() {
      this.$el.innerHTML = `<button x-bind="button"></button><span x-bind="output"></span>`;
    },
    button: {
      ["x-text"]() {
        return `${dice}d${adds >= 0 ? "+" + adds : adds}`;
      },
      ["@click"]() {
        let roll = adds;
        for (let i = 0; i < dice; i++) {
          roll += Math.floor(Math.random() * 6) + 1;
        }
        this.$dispatch("toast", {
          "x-text": `You rolled ${dice}d${
            adds >= 0 ? "+" + adds : adds
          } for a total of ${roll} damage.`,
          ":class": "damage",
        });
      },
    },
    output: {},
  }));
  Alpine.data("success", (level) => ({
    level,
    shown: false,
    init() {
      this.$el.innerHTML = `<button x-bind="button"></button>`;
    },
    button: {
      ["@click"]() {
        const roll = gurpsRoll(this.level);
        this.$dispatch("toast", {
          "x-text": `Your effective level is ${this.level}. You rolled ${roll.result}, a ${roll.degree}`,
          ":class": roll.degree.includes("failure") ? "failure" : "success",
        });
      },
      ["x-text"]() {
        return this.level;
      },
    },
    output: {
      ["x-show"]() {
        return this.shown;
      },
      ["x-text"]() {
        return "Shown";
      },
    },
  }));
});
