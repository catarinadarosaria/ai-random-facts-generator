function displayFact(response) {
  new Typewriter("#fact", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateFact(event) {
  event.preventDefault();
  let input = document.querySelector("#instructions");
  let apiKey = "84d76171da4e217dad7t0o3ca0d5af7b";
  let context =
    "You are an expert in random facts. Your mission is to write a one phrase random fact. Be sure to follow the user instructions.";
  let prompt = `User instructions: Write a short random fact about ${input.value}.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayFact);
}

let factFormElement = document.querySelector("#fact-form");
factFormElement.addEventListener("submit", generateFact);
