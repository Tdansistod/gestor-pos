const displayFields = () => {
  let properties = getProperties();
  const location = getLocation();
  if (location === "/" || location === "index") {
    properties = ["Producto", "Precio", "Cantidad", "Subtotal"];
  }
  const fields = document.getElementById("fields");
  fields.innerHTML = `
  <label class="checkboxContainer">
  <input
  type="checkbox"
  class="itemCheckbox"
  id="selectAll"
  onchange="mainCheckboxHandler(this)"
  />
  <div class="checkmark"></div>
  </label>
  ${properties.map((e) => `<p>${e}</p>`).join("")}
  `;
};
displayFields();
