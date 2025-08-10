document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(".theme-toggle");
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (themeToggle) {
      themeToggle.querySelector("i").classList.replace("fa-moon", "fa-sun");
    }
  }
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const icon = themeToggle.querySelector("i");
      const isDarkMode = document.body.classList.contains("dark-mode");
      icon.classList.toggle("fa-moon", !isDarkMode);
      icon.classList.toggle("fa-sun", isDarkMode);
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    });
  }
  // Add other JS logic (e.g., sidebar, modal) as needed
});