function generateFact(event) {
  event.preventDefault();
  new Typewriter("#fact", {
    strings:
      "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let factFormElement = document.querySelector("#fact-form");
factFormElement.addEventListener("submit", generateFact);
