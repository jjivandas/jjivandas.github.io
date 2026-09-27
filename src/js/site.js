// Site-wide behavior, loaded on every page by src/_includes/layouts/base.njk.

// Dark mode toggle: flips between light and dark and remembers the choice.
// With no saved choice, the site follows the visitor's system setting (see main.css).
(function () {
  var button = document.querySelector(".theme-toggle");
  if (!button) return;
  var root = document.documentElement;
  var systemDark = window.matchMedia("(prefers-color-scheme: dark)");

  function currentTheme() {
    return root.dataset.theme || (systemDark.matches ? "dark" : "light");
  }

  button.addEventListener("click", function () {
    var next = currentTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  });
})();
