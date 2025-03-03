const root = document.documentElement;

// Cargar el tema guardado
if (localStorage.getItem("theme") === "dark") {
  root.classList.add("dark-mode");
}

const setTheme = (dark) => {
  if (dark) {
    root.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    root.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
};
