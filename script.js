const sections = document.querySelectorAll("section");

const revealSection = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("section-show");
    }
  });
};

window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);
