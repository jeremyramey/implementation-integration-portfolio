(function () {
  const tabs = Array.from(document.querySelectorAll(".tab"));
  const panels = Array.from(document.querySelectorAll(".panel"));

  function activate(id) {
    tabs.forEach(t => t.classList.toggle("active", t.dataset.tab === id));
    panels.forEach(p => p.classList.toggle("active", p.id === id));
    history.replaceState(null, "", `#${id}`);
  }

  tabs.forEach(t => {
    t.addEventListener("click", () => activate(t.dataset.tab));
  });

  // Default tab from hash
  const hash = (location.hash || "").replace("#", "");
  const initial = tabs.some(t => t.dataset.tab === hash) ? hash : "overview";
  activate(initial);

  // Footer year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
