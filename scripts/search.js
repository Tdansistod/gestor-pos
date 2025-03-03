const search = () => {
  const itemName = getLocation();
  const properties = getProperties();
  const productos = JSON.parse(localStorage.getItem(itemName)) || [];
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
      p[properties[0]].toLowerCase().includes(query)
    );
    filtered
      .slice(0, 5) // Limitar sugerencias
      .forEach((p) => {
        const button = document.createElement("button");
        button.textContent = p[properties[0]];
        button.addEventListener("click", () => {
          searchInput.value = p[properties[0]];
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
