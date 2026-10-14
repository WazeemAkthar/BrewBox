// ---------- Pricing buttons ----------
function selectPlan(plan) {
  console.log("plan clicked", plan);
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

    if (answer) {
      answer.classList.toggle("show");

      button.setAttribute(
        "aria-expanded",
        answer.classList.contains("show")
      );
    }
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

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const formStatus = document.getElementById("formStatus");

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
