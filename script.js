// 🔘 تبديل الوضع (دارك / لايت)
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  modeToggle.textContent = document.body.classList.contains("dark") ? "☀" : "🌙";
});

// 🎨 تغيير اللون الأساسي
const colorButtons = document.querySelectorAll(".colors span");
colorButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.documentElement.style.setProperty("--primary", btn.dataset.color);
  });
});

// 📱 قائمة الموبايل
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});