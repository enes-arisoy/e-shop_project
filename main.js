const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.add("active");
  closeBtn.style.display = "block";
  menuBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
    navLinks.classList.remove("active");
    closeBtn.style.display = "none";
    menuBtn.style.display = "block";
  });
  