const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const html = document.documentElement;

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    return savedTheme;
  }

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }

  return "light";
};

const applyTheme = (theme) => {
  document.body.classList.add("theme-changing");

  if (theme === "dark") {
    html.setAttribute("data-theme", "dark");
    themeIcon.textContent = "😎";
  } else {
    html.removeAttribute("data-theme");
    themeIcon.textContent = "🌒";
  }

  localStorage.setItem("theme", theme);

  setTimeout(() => {
    document.body.classList.remove("theme-changing");
  }, 500);
};

const toggleTheme = () => {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
};

const initialTheme = getInitialTheme();
applyTheme(initialTheme);

themeToggle.addEventListener("click", toggleTheme);

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      applyTheme(e.matches ? "dark" : "light");
    }
  });

// ===== EASTER EGG - PI DIGITS =====

// First 100 digits of Pi after the decimal point
const piDigits =
  "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";

// Get the level tags
const levelTags = document.querySelectorAll(".level-tag");

// Add click event to each level tag
levelTags.forEach((tag) => {
  tag.addEventListener("click", () => {
    triggerPiEasterEgg();
  });
});

function triggerPiEasterEgg() {
  // Create 50 falling digits
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      createFallingDigit();
    }, i * 80); // Stagger the creation
  }
}

function createFallingDigit() {
  const digit = document.createElement("div");
  digit.className = "pi-digit";

  // Random digit from pi
  const randomIndex = Math.floor(Math.random() * piDigits.length);
  digit.textContent = piDigits[randomIndex];

  // Random horizontal position
  const randomX = Math.random() * window.innerWidth;
  digit.style.left = randomX + "px";
  digit.style.top = "-50px";

  // Random animation duration (2-4 seconds)
  const duration = 2 + Math.random() * 2;
  digit.style.animationDuration = duration + "s";

  document.body.appendChild(digit);

  // Remove element after animation
  setTimeout(() => {
    digit.remove();
  }, duration * 1000);
}
