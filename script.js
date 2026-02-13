/* ==================================================
   REVEAL ON SCROLL
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
   CONTACT FORM SUCCESS
================================================== */

/* ==================================================
   CONTACT FORM EMAILJS
================================================== */

const form = document.getElementById("contactForm");
const successMsg = document.querySelector(".success-message");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_fnbx0ld",
      "template_8hdz0wi",
      this
    ).then(function () {

      successMsg.classList.add("show");
      form.reset();

      setTimeout(() => {
        successMsg.classList.remove("show");
      }, 3000);

    }, function (error) {
      alert("Failed to send message. Please try again.");
      console.log(error);
    });
  });
}



/* ==================================================
   INTRO OVERLAY
================================================== */

window.addEventListener("load", function() {
  const overlay = document.querySelector(".intro-overlay");

  if (overlay) {
    setTimeout(() => {
      overlay.classList.add("hide");

      setTimeout(() => {
        overlay.remove();
      }, 800);

    }, 2000);
  }
});
