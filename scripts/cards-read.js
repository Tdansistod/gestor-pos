function displayCards(event, filtered) {
  const container = document.getElementsByClassName("cards")[0];
  const itemName = getLocation();
  const data = filtered || JSON.parse(localStorage.getItem(itemName));

  if (!data || !data[0]) {
    if (itemName !== "/" && itemName !== "index")
      container.innerHTML = "<p class='message'>Sin elementos</p>";
    return;
  }
  if (itemName !== "/" && itemName !== "index") container.innerHTML = ""; // Limpiar antes de mostrar
  const properties = getProperties();

  data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

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
          category="${e}"
          value="${
            e === "Precio"
              ? `$${Number(item[e]).toLocaleString("es-AR")}`
              : item[e] || "Sin datos"
          }"
          ${
            itemName === "index" || itemName === "/"
              ? ""
              : `readonly
          ondblclick="showField(this)"           
          onblur="saveChange(this, '${e}')"
          onkeydown="if(event.key === 'Enter') saveChange(this, '${e}')"`
          }
          />
            `
            )
            .join("")}
                        ${
                          itemName === "index" || itemName === "/"
                            ? `
            <input id="quantity"
          type="text"
          value=1
          readonly
          onclick="showField(this)"
          onchange="calculate(this)"
          onkeydown="if(event.key === 'Enter') calculate(this)"

          />
          <input id="subtotal"
          type="text"
          readonly
          />
            `
                            : ""
                        }
`;

    container.appendChild(card);
    if (itemName === "index" || itemName === "/") {
      calculate(card.querySelector(`input[id="quantity"]`));
      calculateTotal();
    }
  });
}

displayCards();
