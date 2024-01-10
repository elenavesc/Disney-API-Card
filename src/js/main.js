"use strict";

const descrSearchText = document.querySelector(".js_in_search_desc");
const searchButton = document.querySelector(".js_button_search");
const characterList = document.querySelector(".js-list");
const favoriteList = document.querySelector(".js-list-fav");

let characters = [];
let searchInput = "";
let favCharacters = [];

function searchCharacters(name) {
  fetch(`//api.disneyapi.dev/character?pageSize=50&name=${name}`)
    .then((response) => response.json())
    .then((response_json) => {
      characters = response_json.data;
      printCharacters(characters, characterList);
      //TODO QUeryselectorall de elemtnos con clase card y añadirle el event listener con bucle
      const cardElements = document.querySelectorAll(".card");
      

      cardElements.forEach((card) => {
        card.addEventListener("click", (event) => {
          const clickedElement = event.target.closest('.card');
          let clickedCharacter = characters.find(character => character._id == clickedElement.id)
          favCharacters.push(clickedCharacter)
          printCharacters(favCharacters, favoriteList);
          saveToLocalStorage();
        });
      });
      printCharacters(favCharacters, favoriteList);
      
    });
}

function printCharacters(characters, list) {
  list.innerHTML = "";
  characters.forEach((character) => {
    const characterCard = craftCharacterHtml(character);
    list.insertAdjacentHTML("beforeend", characterCard);
  });
}

function craftCharacterHtml(characterData) {
  const imageUrl = characterData.imageUrl
    ? characterData.imageUrl
    : "https://via.placeholder.com/210x295/ffffff/555555/?text=Disney";
  return `
    <li class="card" id="${characterData._id}">
      <img class="card_img" src="${imageUrl}" alt="${characterData.name}" />
      <h3 class="card_title">${characterData.name}</h3>
    </li>
  `;
}

searchCharacters("");

function handleClickSearch(ev) {
  ev.preventDefault();
  const searchTerm = descrSearchText.value.trim();
  searchCharacters(searchTerm);
}

searchButton.addEventListener("click", handleClickSearch);


//Local Storage

function saveToLocalStorage() {
  localStorage.setItem("ListFavorite", JSON.stringify(favCharacters));
  console.log(favCharacters);
}

function getFromLocalStorage() {
  const storedData = localStorage.getItem("ListFavorite");
  if (storedData) {
    const favoriteItems = JSON.parse(storedData);
    return favoriteItems;
  } else {
    return []; 
  }
}
