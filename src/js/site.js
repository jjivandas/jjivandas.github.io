// Site-wide behavior, loaded on every page by src/_includes/layouts/base.njk.

// Dark mode toggle: the site is light by default; clicking flips light/dark and remembers the choice.
(function () {
  var button = document.querySelector(".theme-toggle");
  if (!button) return;
  var root = document.documentElement;

  button.addEventListener("click", function () {
    var next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  });
})();
