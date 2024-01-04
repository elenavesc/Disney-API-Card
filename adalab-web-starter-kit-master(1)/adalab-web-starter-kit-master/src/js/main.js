"use strict";

const descrSearchText = document.querySelector(".js_in_search_desc");
const searchButton = document.querySelector(".js_button_search");
const characterList = document.querySelector(".js-list");

let characters = []; // Inicializa characters como un array vacío en lugar de undefined
let searchInput = "";

function searchCharacters(name) {
  fetch(`//api.disneyapi.dev/character?pageSize=50&name=${name}`)
    .then((response) => response.json())
    .then((response_json) => {
      characters = response_json.data; // Guarda los personajes en la variable characters
      printCharacters(characters);
    });
}

function printCharacters(characters) {
  characterList.innerHTML = "";
  characters.forEach((character) => {
    const characterCard = craftCharacterHtml(character);
    characterList.insertAdjacentHTML("beforeend", characterCard);
  });
}
//if (list.img) {
  //imgElement.setAttribute("src", `${list.img}`);
//} else {
  //imgElement.setAttribute(
   // "src",
    //"https://via.placeholder.com/210x295/ffffff/555555/?text=Disney"
 // );
//}

function craftCharacterHtml(characterData) {
  // Utiliza los datos del personaje para crear la tarjeta
  return `
    <li class="card" id="${characterData.id}">
      <img class="card_img" src="${characterData.imageUrl}" alt="${characterData.name}" />
      <h3 class="card_title">${characterData.name}</h3>
    </li>
  `;
}

searchCharacters("");

function handleClickSearch(ev) {
  ev.preventDefault();
  const searchTerm = descrSearchText.value.trim(); // Obtén el término de búsqueda del input
  searchCharacters(searchTerm);
}

searchButton.addEventListener("click", handleClickSearch);
