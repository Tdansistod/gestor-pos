const dropArea = document.getElementById("drop-area");
const fileInput = document.getElementById("file-upload");

dropArea?.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropArea.classList.add("dragover");
});

dropArea?.addEventListener("dragleave", () =>
  dropArea.classList.remove("dragover")
);

dropArea?.addEventListener("drop", (e) => {
  e.preventDefault();
  dropArea.classList.remove("dragover");

  const dt = new DataTransfer();
  for (let file of e.dataTransfer.files) {
    dt.items.add(file);
  }
  fileInput.files = dt.files;

  handleFile();
});

function handleFile() {
  const fileInput = document.getElementById("file-upload");
  const file = fileInput.files[0];

  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.onload = function (event) {
    const data = event.target.result;
    const workbook = XLSX.read(data, { type: "binary" });
    const sheetName = workbook.SheetNames[0]; // Usa la primera hoja
    const sheet = workbook.Sheets[sheetName];
    let jsonData = XLSX.utils.sheet_to_json(sheet);

    // Agregar un ID basado en el índice
    jsonData = jsonData.map((item, index) => ({ id: index + 1, ...item }));

    const itemName = getLocation();
    localStorage.setItem(itemName, JSON.stringify(jsonData));
    document.getElementById("excel").close(); // Cierra el modal después de cargar el archivo
    displayCards();
  };

  reader.readAsBinaryString(file);
}
