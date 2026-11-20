function setupChildPage() {
    if (!document.body.classList.contains("section_branch")) return false;

    const sectionId = (window.Co && window.Co.SectionId) ? window.Co.SectionId : "7629102";
    const homeBase = "/" + sectionId;

    document.querySelectorAll("#ch-nav-links a[href^='#']").forEach((a) => {
      const hash = a.getAttribute("href");
      a.setAttribute("href", hash === "#top" ? homeBase : homeBase + hash);
    });

    return true;
  }

  function init() {
    ensureViewport();
    removeChabadOneTopBar();
    const isChild = setupChildPage();
    initNav();
    if (!isChild) {
      renderDirectory();
      initLightbox();
      injectEventSchema();
    }
  }

  if (document.readyState !== "loading") {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
