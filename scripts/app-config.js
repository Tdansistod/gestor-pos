const getItemName = () => {
  let itemName = "";
  const url = window.location.pathname;
  if (url === "/inventory.html") itemName = "products";
  if (url === "/supplier.html") itemName = "suppliers";
  if (url === "/client.html") itemName = "clients";
  return itemName;
};
const getProperties = () => {
  let properties = [];
  const type = getItemName();

  if (type === "products")
    properties = ["Producto", "Categoría", "Precio", "Stock"];
  if (type === "suppliers") properties = ["Proveedor", "Contacto", "Teléfono"];
  if (type === "clients") properties = ["Cliente", "Dirección", "Teléfono"];
  return properties;
};
