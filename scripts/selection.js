const mainCheckboxHandler = (selectAll) => {
  const checkboxes = document.querySelectorAll(".itemCheckbox");
  checkboxes.forEach((cb) => (cb.checked = selectAll.checked));
  showHideButtons();
};

const checkboxHandler = () => {
  const selectAll = document.getElementById("selectAll");
  const checkboxes = document.querySelectorAll(".itemCheckbox");
  selectAll.checked = [...checkboxes].every((cb) => cb.checked);
  showHideButtons();
};

const showHideButtons = () => {
  const checkboxes = Array.from(document.querySelectorAll(".itemCheckbox"));
  const deleteButton = document.getElementById("delete");
  const selected = checkboxes
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.id);

  if (selected.length === 1 && selected[0] === "selectAll") return;
  if (selected.length) {
    deleteButton.style.display = "flex";
  } else deleteButton.style.display = "none";
};
showHideButtons();
