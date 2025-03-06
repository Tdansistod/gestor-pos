const showField = (input) => {
  input.removeAttribute("readonly");
  input.classList.add("activeInput");
};

const saveChange = (input, property) => {
  input.setAttribute("readonly", true);

  const id = input.name;
  const newValue = input.value.replace("$", "");

  const itemName = getLocation();
  let data = JSON.parse(localStorage.getItem(itemName)) || [];

  let item = data.find((p) => p.id == id);
  if (item) item[property] = newValue;

  localStorage.setItem(itemName, JSON.stringify(data));
  input.classList.remove("activeInput");
};
