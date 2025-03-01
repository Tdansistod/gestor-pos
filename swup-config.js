const swup = new Swup();

const setStyle = (url = window.location.pathname) => {
  const path = url.split("/").pop().replace(".html", "");

  if (path === "" || path === "index") {
    document.getElementById("/")?.classList.add("active");
  } else {
    document.getElementById("/")?.classList.remove("active");
  }

  if (path === "inventory") {
    document.getElementById("inventory")?.classList.add("active");
  } else {
    document.getElementById("inventory")?.classList.remove("active");
  }

  if (path === "supplier") {
    document.getElementById("supplier")?.classList.add("active");
  } else {
    document.getElementById("supplier")?.classList.remove("active");
  }

  if (path === "clients") {
    document.getElementById("clients")?.classList.add("active");
  } else {
    document.getElementById("clients")?.classList.remove("active");
  }

  if (path === "history") {
    document.getElementById("history")?.classList.add("active");
  } else {
    document.getElementById("history")?.classList.remove("active");
  }
};

setStyle();

swup.hooks.on("page:view", (visit) => {
  setStyle(visit.to.url);
});
