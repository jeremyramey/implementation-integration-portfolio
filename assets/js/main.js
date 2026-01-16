(function () {
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".panel");

  function setActive(tabId) {
    tabs.forEach(t => t.classList.toggle("active", t.dataset.tab === tabId));
    panels.forEach(p => p.classList.toggle("active", p.id === tabId));
    // keep URL hash in sync for shareable deep links
    history.replaceState(null, "", `#${tabId}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => setActive(tab.dataset.tab));
  });

  // card button scroll to hero section
  document.querySelectorAll("[data-scroll]").forEach(btn => {
    btn.addEventListener("click", () => {
      setActive("projects");
      setTimeout(() => {
        const id = btn.getAttribute("data-scroll");
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    });
  });

  // Year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Load tab from hash if present
  const hash = (location.hash || "").replace("#", "");
  if (hash && document.getElementById(hash)) setActive(hash);
})();
