const calculate = (input) => {
  const card = input.closest(".card");
  const price = card.querySelector(`input[category="Precio"]`).value;
  card.querySelector(`input[id="subtotal"]`).value = `$${(
    Number(input.value) * Number(price.replace("$", "").replace(/\./g, ""))
  ).toLocaleString("es-AR")}`;
  input.classList.remove("activeInput");
  calculateTotal();
};
const calculateTotal = () => {
  const cards = document.querySelectorAll(".card");
  let total = 0;
  cards.forEach((card) => {
    const input = card.querySelector("#subtotal");
    if (input) {
      total += Number(input.value.replace("$", "").replace(/\./g, "")) || 0; // Convierte a número y evita NaN
    }
  });
  document.getElementById("total").innerHTML = `$${total.toLocaleString(
    "es-AR"
  )}`;
};
