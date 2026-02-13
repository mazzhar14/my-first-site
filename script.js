const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const form = document.querySelector("form");
const successMsg = document.querySelector(".success-message");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  successMsg.style.display = "block";

  setTimeout(() => {
    successMsg.classList.add("show");
  }, 100);

  form.reset();
});

window.addEventListener("load", function() {
  const overlay = document.querySelector(".intro-overlay");

  setTimeout(() => {
    overlay.classList.add("hide");
    setTimeout(() => {
      overlay.remove(); // completely remove from DOM
    }, 800);
  }, 2000);
});


