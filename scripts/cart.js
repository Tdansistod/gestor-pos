const calculate = (input) => {
  const card = input.closest(".card");
  const price = card.querySelector(`input[category="Precio"]`).value;
  card.querySelector(`input[id="subtotal"]`).value =
    Number(input.value) * Number(price);
  input.classList.remove("activeInput");
};
const calculateTotal = () => {
  const cards = document.querySelectorAll(".card");
  let total = 0;
  cards.forEach((card) => {
    const input = card.querySelector("#subtotal");
    if (input) {
      total += parseFloat(input.value) || 0; // Convierte a número y evita NaN
    }
  });
  document.getElementById("total").innerHTML = total;
};
