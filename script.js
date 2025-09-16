// ===================== EmailJS Initialization =====================
(function () { 
  emailjs.init("tXI1tvgbUpdp9xqeE"); // Your EmailJS public key
})();


// ===================== Smooth Scroll =====================
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}


// ===================== Email Form Submission =====================
document.getElementById("commentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_zvlh7j4", "template_63jz6jh", this)
    .then(function () {
      alert("✅ Message sent successfully! I’ll get back to you soon.");
      document.getElementById("commentForm").reset();
    })
    .catch(function (error) {
      alert("❌ Failed to send message. Please try again later.");
    });
});


// ===================== Mobile Sidebar Toggle =====================
const nav = document.querySelector("nav");
const navToggle = document.createElement("span");
navToggle.classList.add("menu-toggle");
navToggle.innerHTML = "☰";
nav.prepend(navToggle);

const navLinks = nav.querySelector("ul");
const overlay = document.createElement("div");
overlay.id = "sidebar-overlay";
document.body.appendChild(overlay);

// Toggle sidebar
navToggle.addEventListener("click", () => {
  if (navLinks.classList.contains("open")) {
    navLinks.classList.remove("open");
    overlay.style.display = "none";
  } else {
    navLinks.classList.add("open");
    overlay.style.display = "block";
  }
});

// Close sidebar on overlay click
overlay.addEventListener("click", () => {
  navLinks.classList.remove("open");
  overlay.style.display = "none";
});

// Optional: Close sidebar on link click
navLinks.querySelectorAll("li a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    overlay.style.display = "none";
  });
});


// ===================== Fade-in Sections on Scroll =====================
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("fade-in");
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  section.classList.add("fade-init");
  observer.observe(section);
});


// ===================== Typing Effect Hero Section =====================
const heroText = document.querySelector(".hero p");
const message = " Turning Ideas into Intelligent Systems | Machine Learning Enthusiast";
let idx = 0;

function typeHero() {
  if (idx < message.length) {
    heroText.textContent += message[idx];
    idx++;
    setTimeout(typeHero, 50);
  }
}
typeHero();


// ===================== Custom Cursor =====================
// Ensure your HTML has elements: <div class="cursor"></div> <div class="cursor-follower"></div>
const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

let mouseX = 0, mouseY = 0;
let posX = 0, posY = 0;

// Cursor follows instantly
document.addEventListener("mousemove", e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
});

// Smooth trailing effect for follower
function animateFollower() {
  posX += (mouseX - posX) * 0.1;
  posY += (mouseY - posY) * 0.1;
  follower.style.transform = `translate(${posX}px, ${posY}px)`;
  requestAnimationFrame(animateFollower);
}
animateFollower();
