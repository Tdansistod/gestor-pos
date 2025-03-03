const createItem = () => {
  const cards = document.getElementsByClassName("cards")[0];
  const card = document.createElement("div");
  card.classList.add("card");
  const properties = getProperties();

  card.innerHTML = `
        <div class="cardButtons">
            <button class="cancel" onclick="this.closest('.card').remove();">
                <svg fill="currentColor" width="1.5rem" height="1.5rem" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.771 8.518c-1.144 0.215-2.83 2.171-2.086 2.915l4.573 4.571-4.573 4.571c-0.915 0.915 1.829 3.656 2.744 2.742l4.573-4.571 4.573 4.571c0.915 0.915 3.658-1.829 2.744-2.742l-4.573-4.571 4.573-4.571c0.915-0.915-1.829-3.656-2.744-2.742l-4.573 4.571-4.573-4.571c-0.173-0.171-0.394-0.223-0.657-0.173v0zM16 1c-8.285 0-15 6.716-15 15s6.715 15 15 15 15-6.716 15-15-6.715-15-15-15zM16 4.75c6.213 0 11.25 5.037 11.25 11.25s-5.037 11.25-11.25 11.25-11.25-5.037-11.25-11.25c0.001-6.213 5.037-11.25 11.25-11.25z"></path>
                </svg>
            </button>
            <button class="create" onclick="saveItem(this)">
                <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="currentColor"/>
                </svg>
            </button/>
        </div>
        ${properties
          .map(
            (e) => `<input
          type="text"
          placeholder="${e}"
          />`
          )
          .join("")}
      `;
  cards.prepend(card);
};

const saveItem = (button) => {
  const card = button.closest(".card");
  const properties = getProperties();
  const values = properties.map((e) =>
    card.querySelector(`input[placeholder="${e}"]`).value.trim()
  );

  const itemName = getItemName();
  let data = JSON.parse(localStorage.getItem(itemName)) || [];

  let newItem = properties.reduce((acc, property, index) => {
    acc[property] = values[index];
    return acc;
  }, {});

  newItem = {
    ...newItem,
    id: data.length,
  };

  data.unshift(newItem);
  localStorage.setItem(itemName, JSON.stringify(data));
  button.closest(".card").remove();
  displayCards();
};
