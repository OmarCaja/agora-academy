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

const applyTheme = (theme, animated = false) => {
  if (animated) {
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
  } else {
    if (theme === "dark") {
      html.setAttribute("data-theme", "dark");
      themeIcon.textContent = "😎";
    } else {
      html.removeAttribute("data-theme");
      themeIcon.textContent = "🌒";
    }
    localStorage.setItem("theme", theme);
  }
};

const toggleTheme = () => {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(newTheme, true);
};

const initialTheme = getInitialTheme();
applyTheme(initialTheme, false);

themeToggle.addEventListener("click", toggleTheme);

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      applyTheme(e.matches ? "dark" : "light", false);
    }
  });
