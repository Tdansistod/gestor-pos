const deleteSelected = () => {
  const checkboxes = Array.from(document.querySelectorAll(".itemCheckbox"));
  const selected = checkboxes
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => Number(checkbox.id));
  const itemName = getLocation();
  if (itemName === "index" || itemName === "/") {
    checkboxes
      .filter((checkbox) => checkbox.checked)
      .forEach((checkbox) => {
        checkbox.closest(".card")?.remove();
      });
    document.getElementById("selectAll").checked = false;
    document.getElementById("search").value = "";
    showHideButtons();
    calculateTotal();
    return;
  }
  const data = JSON.parse(localStorage.getItem(itemName));
  const newData = data.filter((item) => !selected.includes(item.id));
  localStorage.setItem(itemName, JSON.stringify(newData));
  document.getElementById("selectAll").checked = false;
  document.getElementById("search").value = "";
  displayCards();
  showHideButtons();
};

document.addEventListener("keydown", (event) => {
  if (getLocation() === "index" || getLocation() === "/") {
    if (event.key === "Escape") {
      document.getElementsByClassName("cards")[0].innerHTML = "";
      document.getElementById("selectAll").checked = false;
      document.getElementById("search").value = "";
      showHideButtons();
    }
  }
});
