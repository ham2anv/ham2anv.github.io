const plural = new Intl.PluralRules("en-us");

const Pluralize = (value, one = "point", many = "points") =>
  plural.select(value) === "one" ? one : many;

document.addEventListener("alpine:init", () => {
  Alpine.data("app", () => ({ Pluralize }));
});
document.addEventListener("alpine:init", () => {
  Alpine.data("contents", () => ({
    headers: [...document.querySelectorAll("h2[id]")],
  }));
});
