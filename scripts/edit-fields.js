const showField = (input) => {
  input.removeAttribute("readonly");
  input.classList.add("activeInput");
};

const saveChange = (input, property) => {
  input.setAttribute("readonly", true);

  const id = input.name;
  const newValue = input.value;

  let productos = JSON.parse(localStorage.getItem("productData")) || [];

  let item = productos.find((p) => p.id == id);
  if (item) item[property] = newValue;

  localStorage.setItem("productData", JSON.stringify(productos));
  input.classList.remove("activeInput");
};
