const deleteSelected = () => {
  const checkboxes = Array.from(document.querySelectorAll(".itemCheckbox"));
  const selected = checkboxes
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => Number(checkbox.id));
  const itemName = getItemName();
  const data = JSON.parse(localStorage.getItem(itemName));
  const newData = data.filter((item) => !selected.includes(item.id));
  localStorage.setItem(itemName, JSON.stringify(newData));
  document.getElementById("selectAll").checked = false;
  document.getElementById("search").value = "";
  displayCards();
  showHideButtons();
};
