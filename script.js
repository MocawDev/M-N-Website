// wacht tot de pagina helemaal geladen is
document.addEventListener("DOMContentLoaded", () => {

  // zoek de elementen op in de pagina
  const menuButton = document.getElementById("Main_search_button");
  const menuPanel = document.getElementById("Energie_logo_button");
  const emailButton = document.getElementById("NonProfitEmail");
  const sections = document.querySelectorAll("section");
  // Alles door kamil
  // hamburger menu openen en sluiten
  if (menuButton && menuPanel) {

    // als je op de knop klikt
    menuButton.addEventListener("click", () => {
      menuButton.classList.toggle("open");  // zet de class "open" aan of uit
      menuPanel.classList.toggle("open");   // zelfde voor het menu
    });

    // als je ergens anders op de pagina klikt, sluit het menu
    document.addEventListener("click", (event) => {
      const klikInMenu = menuPanel.contains(event.target);   // klikte je IN het menu?
      const klikOpKnop = menuButton.contains(event.target);  // klikte je op de knop?

      // als je niet in het menu en niet op de knop klikte: sluit alles
      if (!klikInMenu && !klikOpKnop) {
        menuButton.classList.remove("open");
        menuPanel.classList.remove("open");
      }
    });
  }

  // email knop krijgt een handje als je eroverheen gaat
  if (emailButton) {
    emailButton.style.cursor = "pointer";
  }

  // deze functie kijkt welke blokken zichtbaar zijn op het scherm
  const laaBlokkenZien = () => {
    sections.forEach((section) => {
      const positie = section.getBoundingClientRect(); // waar is dit blok op het scherm

      // als het blok bijna in beeld is, maak het zichtbaar
      if (positie.top < window.innerHeight - 80) {
        section.classList.add("visible");
      }
    });
  };

  // voer de functie 1x uit als de pagina laadt
  laaBlokkenZien();

  // en daarna elke keer als je scrolt
  window.addEventListener("scroll", laaBlokkenZien);

});