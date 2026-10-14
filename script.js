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
var themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "Light";
  } else {
    themeBtn.textContent = "Dark";
  }
});

// ---------- Contact form ----------
var form = document.getElementById("contactForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var email = document.getElementById("email").value;
  if (email.length > 0) {
    alert("Thanks! We will reply soon.");
  } else {
    alert("error");
  }
});

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
