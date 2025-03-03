function displayCards(event, filtered) {
  const container = document.getElementsByClassName("cards")[0];
  let itemName = "";

  if (window.location.pathname === "/inventory.html") itemName = "productData";

  const data = filtered || JSON.parse(localStorage.getItem(itemName));

  if (!data || !data[0]) {
    container.innerHTML = "<p class='message'>No hay productos</p>";
    return;
  }
  container.innerHTML = ""; // Limpiar antes de mostrar

  data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    // Ajusta las claves según las columnas del Excel
    card.innerHTML = `
          <label class="checkboxContainer" style="grid-area: checkbox">
            <input type="checkbox" class="itemCheckbox" id="${item.id}" 
            onchange="checkboxHandler()"/>
            <div class="checkmark"></div>
          </label>
          <input name="${item.id}"
          style="grid-area: product"
          type="text"
          value="${item.Producto || "Sin Nombre"}"
          readonly
          ondblclick="showField(this)"
          onblur="saveChange(this, 'Producto')"
          onkeydown="if(event.key === 'Enter') saveChange(this, 'Producto')"
          />

          <input name="${item.id}"
          style="grid-area: category"
          type="text"
          value="${item.Categoría || "Sin Categoría"}"
          readonly
          ondblclick="showField(this)"
          onblur="saveChange(this, 'Categoría')"
          onkeydown="if(event.key === 'Enter') saveChange(this, 'Categoría')"
          />

          <input 
          style="grid-area: price"
          value="${item.Precio || "Sin Precio"}"
          saveChange(this, 'Precio')"
          onblur="saveChange(this, 'Precio')"
          name="${item.id}"
          type="text"
          readonly
          onkeydown="if(event.key === 'Enter') saveChange(this, 'Categoría')"
          ondblclick="showField(this)"
          />
          <input 
          style="grid-area: stock"
          value="${item.Stock || "No Disponible"}"
          saveChange(this, 'Stock')"
          onblur="saveChange(this, 'Stock')"
          name="${item.id}"
          type="text"
          readonly
          onkeydown="if(event.key === 'Enter') saveChange(this, 'Categoría')"
          ondblclick="showField(this)"
          />
      `;

    container.appendChild(card);
  });
}

displayCards();
