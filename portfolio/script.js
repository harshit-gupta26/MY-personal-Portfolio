const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Simple fade-in animation on load
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".hero").style.opacity = "1";
});

// Simple scroll reveal animation
window.addEventListener("scroll", () => {
  const about = document.querySelector(".about");
  const position = about.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.2;

  if (position < screenPosition) {
    about.style.opacity = "1";
  }
});

// Animate progress bars on scroll
window.addEventListener("scroll", () => {
  const bars = document.querySelectorAll(".progress-bar");
  bars.forEach((bar) => {
    const position = bar.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (position < screen) {
      bar.style.width = bar.getAttribute("data-width");
    }
  });
});

// Optional: Reveal animation on scroll
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card) => {
    const position = card.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (position < screen - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// Reveal timeline items on scroll
const items = document.querySelectorAll(".timeline-item");

window.addEventListener("scroll", () => {
  items.forEach((item) => {
    const position = item.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (position < screen - 100) {
      item.classList.add("show");
    }
  });
});

// Reveal cards on scroll
const cards = document.querySelectorAll(".achievement-card");

window.addEventListener("scroll", () => {
  cards.forEach((card) => {
    const position = card.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      card.classList.add("show");
    }
  });
});

// Simple form validation
const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  alert("Thank you! Your message has been sent.");
  form.reset();
});

// Update current year automatically
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll Reveal Animation
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

const skillBars = document.querySelectorAll(".progress-bar");

function animateSkills() {
  skillBars.forEach((bar) => {
    const value = bar.getAttribute("data-width");
    bar.style.width = value;
  });
}

window.addEventListener("scroll", () => {
  const skillsSection = document.getElementById("skills");
  const sectionTop = skillsSection.getBoundingClientRect().top;

  if (sectionTop < window.innerHeight - 150) {
    animateSkills();
  }
});

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollPercent = (scrollTop / scrollHeight) * 100;

  document.getElementById("scroll-progress").style.width = scrollPercent + "%";
});

// Typing Animation
const textArray = [
  "Web Developer",
  "Software Engineer",
  "Frontend Developer",
  "MERN Stack Learner",
];

let index = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 60;
const delayBetween = 1500;

const typingText = document.getElementById("typing-text");

function typeText() {
  if (charIndex < textArray[index].length) {
    typingText.textContent += textArray[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(eraseText, delayBetween);
  }
}

function eraseText() {
  if (charIndex > 0) {
    typingText.textContent = textArray[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, erasingSpeed);
  } else {
    index = (index + 1) % textArray.length;
    setTimeout(typeText, 500);
  }
}

// Start animation
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeText, 500);
});

let count = localStorage.getItem("downloads") || 0;

document.querySelector(".about-buttons a").addEventListener("click", () => {
  count++;
  localStorage.setItem("downloads", count);
  alert(`Resume downloaded ${count} times`);
});

// --- GOOGLE SHEETS CONNECTED CONTACT FORM ---
const scriptURL = 'https://script.google.com/macros/s/AKfycbwExOEJ7Aqtrl0mg70g35wOrMq2UIhM_qCqCJFBCgwVurnu7a8ykoDy_8C98oU23fbE3w/exec';
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', e => {
  e.preventDefault();
  
  const submitBtn = document.getElementById('submitBtn');
  submitBtn.disabled = true;
  submitBtn.innerText = "Sending...";

  fetch(scriptURL, { 
    method: 'POST', 
    body: new FormData(contactForm)
  })
  .then(response => {
    alert("✅ Success! Your message has been recorded.");
    submitBtn.disabled = false;
    submitBtn.innerText = "Send Message";
    contactForm.reset();
  })
  .catch(error => {
    console.error('Error!', error.message);
    alert("❌ Error! Make sure you ran 'initialSetup' in Apps Script.");
    submitBtn.disabled = false;
    submitBtn.innerText = "Send Message";
  });
});// -------------------------------------------------------------------------->

const filterButtons = document.querySelectorAll(".filter-buttons button");
const projects = document.querySelectorAll(".project-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    projects.forEach((project) => {
      if (filter === "all" || project.classList.contains(filter)) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const hour = new Date().getHours();
let greet = "Hello 👋";

if (hour < 12) greet = "Good Morning ☀️";
else if (hour < 18) greet = "Good Afternoon 🌤️";
else greet = "Good Evening 🌙";

document.getElementById("greeting").innerText = greet;

window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// Subscribe Form
document
  .getElementById("subscribeForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("subscriberEmail").value;

    if (email === "") {
      alert("Please enter your email!");
      return;
    }

    alert("✅ Thanks for subscribing!");

    // Clear input
    document.getElementById("subscriberEmail").value = "";
  });

// ✅ a) Dark–Light Theme Toggle 🌙☀️---------------->
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

/* Load saved theme */
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

/* Toggle theme */
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙";
  }
});
if (!localStorage.getItem("theme")) {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    body.classList.add("dark");
    themeToggle.textContent = "☀️";
  }
}
// --------------------------------------------------------------->





















const checkATSBtn = document.getElementById("checkATS");
const resumeUpload = document.getElementById("resumeUpload");
const atsResult = document.querySelector(".ats-result");
const progressFill = document.getElementById("progressFill");
const atsScoreText = document.getElementById("atsScore");

checkATSBtn.addEventListener("click", () => {
  if (!resumeUpload.files.length) {
    alert("Please upload your resume first!");
    return;
  }

  atsResult.style.display = "block";

  // Fake ATS logic (demo)
  const score = Math.floor(Math.random() * 31) + 65; // 65–95%

  progressFill.style.width = score + "%";
  atsScoreText.textContent = score + "%";
});
