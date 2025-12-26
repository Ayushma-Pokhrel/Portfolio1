const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");

  if (mobileMenu.classList.contains("hidden")) {
    menuIcon.textContent = "☰";
  } else {
    menuIcon.textContent = "✖";
  }
});

const exploreBtn = document.getElementById("exploreBtn");
const aboutSection = document.getElementById("about");
const experience = document.getElementById("experience");
const contactSection = document.getElementById("contact");
const footerSection = document.getElementById("footer");

exploreBtn.addEventListener("click", () => {
  aboutSection.classList.remove("hidden");
  experience.classList.remove("hidden");
  contactSection.classList.remove("hidden");
  footerSection.classList.remove("hidden");
  document.body.classList.remove("overflow-hidden");

  aboutSection.scrollIntoView({ behavior: "smooth" });
  contactSection.scrollIntoView({ behavior: "smooth" });
  experience.classList.remove("hidden");
  footerSection.scrollIntoView({ behavior: "smooth" });
});
