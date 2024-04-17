Disney Characters Search
Introduction

The Disney Characters Search project is a web application that allows users to search for Disney characters using an external API and add their favorite characters to a favorites list. It utilizes JavaScript to fetch character data from the Disney API and provides a simple user interface to view and manage favorite characters.
Features

Character Search: Users can search for Disney characters by name using the search bar.
    ![search](https://github.com/elenavesc/Disney-API-Card/assets/147326237/b56d33fd-8c67-4aa9-a722-ddad93ae7126)

Character Display: Retrieved characters are displayed as cards with their images and names.
    ![portada](https://github.com/elenavesc/Disney-API-Card/assets/147326237/b29c4092-6e83-4fc3-9029-3d90d3bf626d)

Favorite Characters: Users can click on character cards to add them to the favorites list.
    ![favourites](https://github.com/elenavesc/Disney-API-Card/assets/147326237/e16ce20f-d0bf-4d80-96e5-40b0a21350ca)

Local Storage: The application utilizes local storage to persist favorite character data across sessions.

Characters without a photo: they will appear on the list but with a blank image.
    ![notfound](https://github.com/elenavesc/Disney-API-Card/assets/147326237/5016b3bc-9cd4-4571-9229-8dc741f9689e)

Installation

To run the Disney Characters Search project locally: git clone https://github.com/elenavesc/Disney-API-Card.git

    Clone the repository: git clone https://github.com/elenavesc/Disney-API-Card.git

bash

git clone https://github.com/your-username/disney-characters-search.git
cd disney-characters-search

    Open the index.html file in your preferred web browser.

Usage

    Open the web application in your browser.
    Enter a character name in the search bar and click the "Search" button.
    View the retrieved characters displayed as cards.
    Click on a character card to add it to your favorites list.
    View your favorite characters in the favorites list section.

Code Structure

    index.html: HTML file providing the structure of the web page.
    styles.css: CSS file containing styles for the web page layout and elements.
    script.js: JavaScript file implementing the functionality for character search, displaying characters, adding favorites, and utilizing local storage.

Local Storage Functions
Saving to Local Storage

The saveToLocalStorage() function stores favorite characters in the Local Storage using the key "ListFavorite".
Retrieving from Local Storage

The getFromLocalStorage() function retrieves previously stored favorite characters from the Local Storage with the key "ListFavorite".
Contributing

Contributions to enhance the project are welcome! Feel free to submit bug fixes, feature enhancements, or other improvements by creating pull requests.
License

This project is licensed under the MIT License - see the LICENSE file for details.
