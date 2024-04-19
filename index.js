// JavaScript code for interactivity

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    });
  });

  // Highlight the current section in the navigation
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        const sectionId = section.getAttribute("id");
        const correspondingNavLink = document.querySelector(
          `.nav-link[href="#${sectionId}"]`
        );

        navLinks.forEach(function (link) {
          link.classList.remove("active");
        });

        correspondingNavLink.classList.add("active");
      }
    });
  });
});
