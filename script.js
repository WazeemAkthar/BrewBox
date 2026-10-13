// ---------- Pricing buttons ----------
function selectPlan(plan) {
  console.log("plan clicked", plan);
  alert("You selected the " + plan + " plan!");
}

// ---------- Animated stats ----------
document.querySelectorAll(".stat-num").forEach(function (el) {
  var target = el.dataset.target;
  var n = 0;
  setInterval(function () {
    n += 5;
    el.textContent = n;
  }, 50);
});

// ---------- FAQ accordion ----------
document.querySelectorAll(".faq-q").forEach(function (q) {
  q.addEventListener("click", function () {
    document.querySelectorAll(".faq-a").forEach(function (a) {
      a.classList.toggle("show");
    });
  });
});

// ---------- Theme toggle ----------
var themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  themeBtn.textContent = "Light";
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
  navLinks.classList.toggle("open");
});

// ---------- Footer year ----------
document.getElementById("current-year").textContent = new Date().getFullYear();
