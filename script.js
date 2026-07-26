/* Shared navigation behavior. */
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const releaseLink = document.querySelector("[data-release-note]");
  if (releaseLink) {
    releaseLink.addEventListener("click", (event) => {
      event.preventDefault();
      const note = document.getElementById(releaseLink.getAttribute("aria-describedby"));
      if (note) note.hidden = false;
    });
  }

  document.querySelectorAll('a[href^="#"]:not([data-release-note])').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
});
