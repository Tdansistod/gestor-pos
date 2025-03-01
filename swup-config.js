const swup = new Swup();

const setStyle = (url = window.location.pathname) => {
  // Asegurarse de que la ruta no tenga el slash al final
  const path = url.endsWith("/") ? url.slice(0, -1) : url;

  console.log(path);

  // Esto asegura que si estás en GitHub Pages, las rutas se interpreten correctamente.
  if (path === "/" || path === "/index.html") {
    document.getElementById("/")?.classList.add("active");
  } else {
    document.getElementById("/")?.classList.remove("active");
  }

  if (path === "/inventory") {
    document.getElementById("inventory")?.classList.add("active");
  } else {
    document.getElementById("inventory")?.classList.remove("active");
  }

  if (path === "/supplier") {
    document.getElementById("supplier")?.classList.add("active");
  } else {
    document.getElementById("supplier")?.classList.remove("active");
  }

  if (path === "/clients") {
    document.getElementById("clients")?.classList.add("active");
  } else {
    document.getElementById("clients")?.classList.remove("active");
  }

  if (path === "/history") {
    document.getElementById("history")?.classList.add("active");
  } else {
    document.getElementById("history")?.classList.remove("active");
  }
};

setStyle();

swup.hooks.on("page:view", (visit) => {
  setStyle(visit.to.url);
});
