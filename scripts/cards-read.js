function displayCards(event, filtered) {
  const container = document.getElementsByClassName("cards")[0];
  const itemName = getItemName();
  const data = filtered || JSON.parse(localStorage.getItem(itemName));

  if (!data || !data[0]) {
    container.innerHTML = "<p class='message'>Sin elementos</p>";
    return;
  }
  container.innerHTML = ""; // Limpiar antes de mostrar
  const properties = getProperties();

  data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    // Ajusta las claves según las columnas del Excel
    card.innerHTML = `
          <label class="checkboxContainer">
            <input type="checkbox" class="itemCheckbox" id="${item.id}" 
            onchange="checkboxHandler()"/>
            <div class="checkmark"></div>
          </label>
          ${properties
            .map(
              (e) => `
            <input name="${item.id}"
          type="text"
          value="${item[e] || "Sin datos"}"
          readonly
          ondblclick="showField(this)"
          onblur="saveChange(this, '${e}')"
          onkeydown="if(event.key === 'Enter') saveChange(this, '${e}')"
          />
            `
            )
            .join("")}
      `;

    container.appendChild(card);
  });
}

displayCards();
