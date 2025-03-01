const swup = new Swup();

const setStyle = (url = window.location.pathname) => {
  url === "/" || url === "/index.html"
    ? document.getElementById("/")?.classList.add("active")
    : document.getElementById("/")?.classList.remove("active");
  url === "/inventory.html"
    ? document.getElementById("inventory")?.classList.add("active")
    : document.getElementById("inventory")?.classList.remove("active");
  url === "/supplier.html"
    ? document.getElementById("supplier")?.classList.add("active")
    : document.getElementById("supplier")?.classList.remove("active");
  url === "/clients.html"
    ? document.getElementById("clients")?.classList.add("active")
    : document.getElementById("clients")?.classList.remove("active");
  url === "/history.html"
    ? document.getElementById("history")?.classList.add("active")
    : document.getElementById("history")?.classList.remove("active");
};
setStyle();

swup.hooks.on("page:view", (visit) => {
  setStyle(visit.to.url);
});
