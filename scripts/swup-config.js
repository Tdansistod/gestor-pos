const swup = new Swup();

swup.hooks.on("page:view", (visit) => {
  setStyle(visit.to.url);
  displayCards();
  search();
  showHideButtons();
});
