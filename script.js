// ---------- Pricing buttons ----------
function selectPlan(plan) {
  alert("You selected the " + plan + " plan!");
}

// ---------- Animated stats ----------

document.querySelectorAll(".stat-num").forEach(function (el) {
  var target = parseInt(el.dataset.target);
  var n = 0;
  var increment = Math.ceil(target / 60);

  var timer = setInterval(function () {
    n += increment;

    if (n >= target) {
      n = target;
      clearInterval(timer);
    }

    el.textContent = n;
  }, 30);
});



// ---------- FAQ Accordion ----------
document.querySelectorAll(".faq-q").forEach(function (button) {
  button.addEventListener("click", function () {
    const answer = button.nextElementSibling;

    if (!answer) return;

    const isOpen = answer.classList.contains("show");

    answer.classList.toggle("show", !isOpen);
    button.setAttribute("aria-expanded", String(!isOpen));
  });
});


 // ---------- Theme toggle ----------
var themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "Light";
  } else {
    themeToggle.textContent = "Dark";
  }
});



// ---------- Contact Form Validation ----------
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const formStatus = document.getElementById("formStatus");

    if (
      !name || !email || !message ||
      !nameError || !emailError ||
      !messageError || !formStatus
    ) {
      console.error("Contact form HTML elements are missing.");
      return;
    }

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formStatus.textContent = "";

    let isValid = true;

    if (name.value.trim() === "") {
      nameError.textContent = "Please enter your name.";
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {
      emailError.textContent = "Please enter your email address.";
      isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }

    if (message.value.trim() === "") {
      messageError.textContent = "Please enter your message.";
      isValid = false;
    }

    if (!isValid) {
      formStatus.textContent = "Please correct the errors above.";
      return;
    }

    formStatus.textContent =
      "Thank you! Your form passed validation.";

    form.reset();
  });
}



 // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formStatus.textContent = "";

    let isValid = true;

    // Validate name
    if (name === "") {
      nameError.textContent = "Please enter your name.";
      isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      emailError.textContent = "Please enter your email address.";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }

    // Validate message
    if (message === "") {
      messageError.textContent = "Please enter your message.";
      isValid = false;
    }

    // Stop if validation fails
    if (!isValid) {
      formStatus.textContent = "Please correct the errors above.";
      return;
    }

    // Success message
    formStatus.textContent =
      "Thank you! Your form passed validation.";

    form.reset();
  });
}
// ---------- Mobile menu ----------
var navToggle = document.getElementById("navToggle");
var navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", function () {
 var isOpen = navLinks.classList.toggle("open");
navToggle.setAttribute("aria-expanded", isOpen);
  navToggle.setAttribute(
    "aria-label",
    isOpen ? "Close menu" : "Open menu"
  );

  navToggle.textContent = isOpen ? "✕" : "☰";
});

// ---------- Footer year ----------
document.getElementById("current-year").textContent = new Date().getFullYear();
