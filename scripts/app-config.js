const getLocation = () => {
  return window.location.pathname.split("/").pop().replace(".html", "");
};

const getProperties = () => {
  let properties = [];
  const type = getLocation();
  if (type === "/" || type === "index") properties = ["Producto", "Precio"];
  if (type === "products")
    properties = ["Producto", "Categoría", "Precio", "Stock"];
  if (type === "suppliers") properties = ["Proveedor", "Contacto", "Teléfono"];
  if (type === "clients") properties = ["Cliente", "Dirección", "Teléfono"];
  return properties;
};
