"use strict";

const descrSearchText = document.querySelector(".js_in_search_desc");
const searchButton = document.querySelector(".js_button_search");
const characterList = document.querySelector(".js-list");
const favoriteList = document.querySelector(".js-list-fav");

let characters = [];
let searchInput = "";
let favCharacters = [];
//esta función sirve para buscar por nombre los characters en la barra de búsqueda y mostrar la card en pantalla
function searchCharacters(name) {
  // fetch lanza peticion GET a la API, Pero es asincrono, por lo que devuelve una promesa y hay que usar then
  fetch(`//api.disneyapi.dev/character?pageSize=50&name=${name}`)
  //Parseo de la respuesta para transformar el texto JSON en un objeto facil de manejar. TB es asincrono
  .then((response) => response.json())
    //asincrono: cada vez que hay un then hay asincronía
    .then((response_json) => {
      //Obtener characters de propiedad data (mirar API para mas info)
      characters = response_json.data;
      //printcharacters en este caso se pintaran los objetos de tipo characters en el ul de characterList
      printCharacters(characters, characterList);
      const cardElements = document.querySelectorAll(".card");
      

      cardElements.forEach((card) => {
        card.addEventListener("click", (event) => {
          //al añadir closest conseguimos traernos el elemento padre anterior más proximo de clase card
          const clickedElement = event.target.closest('.card');
          //clickedCharacter es el character que find encuentra en el array characters que tiene el mimso ID que el clickedElement
          let clickedCharacter = characters.find(character => character._id == clickedElement.id)
          //hacemos un push del elemento clicado para añadirlo a los favs
          favCharacters.push(clickedCharacter)
          //printcharacters en este caso se pintaran los objetos de tipo favcharacters en el ul de favoriteList que hasta ahora está vacía
          printCharacters(favCharacters, favoriteList);
          saveToLocalStorage();
          console.log(`Number of films: ${clickedCharacter.films.length}`)
        });
      });
      printCharacters(favCharacters, favoriteList);
      
    });
}

//character: es una lista de objetos de tipo characters
//list: es el ul donde quiero pintar los characters
function printCharacters(characters, list) {
  //la lista está vacía
  list.innerHTML = "";
  characters.forEach((character) => {
    //characterCard: es un string
    const characterCard = craftCharacterHtml(character);
    //insertAdjacentHTML: es un método que se constituye de dos parametros: la posición , en este caso beforeend que añadirá el texto 
    //que le pase como parámetro después del último elemento hijo. 
    //el otro parámetro charcaterCard que es un string, será el texto que queramos introducir.
    list.insertAdjacentHTML("beforeend", characterCard);
  });
}
// characterData: es un objeto de tipo character
// esta funcion genra un string el cual representa el html de la carta que queremos pintar
function craftCharacterHtml(characterData) {
  const imageUrl = characterData.imageUrl
    ? characterData.imageUrl
    : "https://via.placeholder.com/210x295/ffffff/555555/?text=Disney";
  return `
    <li class="card" id="${characterData._id}">
      <img class="card_img" src="${imageUrl}" alt="${characterData.name}" />
      <a class="card_title">${characterData.name}</a>
    </li>
  `;
}
//deja vacía los elementos
searchCharacters("");

function handleClickSearch(ev) {
  // Evita que el formulario se envíe y la página se recargue
  ev.preventDefault();
   // Obtiene el valor del campo de búsqueda y elimina los espacios en blanco al inicio y al final
  const searchTerm = descrSearchText.value.trim();
  // Llama a la función searchCharacters con el término de búsqueda como argumento
  searchCharacters(searchTerm);
}
// Agrega un event listener al botón de búsqueda para que llame a handleClickSearch cuando se hace clic en él
searchButton.addEventListener("click", handleClickSearch);


//cuando llamas a esta función, se almacenará la información del array favCharacters en el almacenamiento local 
//del navegador con la clave "ListFavorite".
function saveToLocalStorage() {
  // Utiliza el método setItem de localStorage para almacenar el array favCharacters con la clave "ListFavorite"
  //JSON.stringify se utiliza para convertir el array a una cadena JSON antes de guardarlo.
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
