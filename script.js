/* ==================================================
   SCROLL REVEAL ANIMATION
================================================== */

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


/* ==================================================
   CONTACT FORM SUCCESS ANIMATION
================================================== */

const form = document.getElementById("contactForm");
const successMsg = document.querySelector(".success-message");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    successMsg.classList.add("show");

    form.reset();

    // Hide message after 3 seconds
    setTimeout(() => {
      successMsg.classList.remove("show");
    }, 3000);
  });
}


/* ==================================================
   INTRO OVERLAY FADE OUT
================================================== */

window.addEventListener("load", function () {
  const overlay = document.querySelector(".intro-overlay");

  if (overlay) {
    setTimeout(() => {
      overlay.classList.add("hide");

      setTimeout(() => {
        overlay.remove();
      }, 800);
    }, 1800);
  }
});
