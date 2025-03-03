const search = () => {
  const productos = JSON.parse(localStorage.getItem("productData")) || [];
  const searchInput = document.getElementById("search");
  const resultsList = document.getElementById("autocomplete-list");
  searchInput?.focus();

  searchInput?.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    resultsList.innerHTML = "";

    if (!query) {
      displayCards(undefined, undefined);
      return; // Si está vacío, no mostrar nada
    }

    const filtered = productos.filter((p) =>
      p.Producto.toLowerCase().includes(query)
    );
    filtered
      .slice(0, 5) // Limitar sugerencias
      .forEach((p) => {
        const button = document.createElement("button");
        button.textContent = p.Producto;
        button.addEventListener("click", () => {
          searchInput.value = p.Producto;
          displayCards(undefined, [p]);
          resultsList.innerHTML = ""; // Ocultar lista al seleccionar
        });
        resultsList.appendChild(button);
      });
    displayCards(undefined, filtered);
  });

  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key.toLowerCase() === "b") {
      e.preventDefault(); // Evita conflictos con atajos del navegador
      searchInput.focus(); // Enfoca el input de búsqueda
    }
  });
};
search();
