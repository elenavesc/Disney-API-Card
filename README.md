Disney Characters Search
Introduction

The Disney Characters Search project is a web application that allows users to search for Disney characters using an external API and add their favorite characters to a favorites list. It utilizes JavaScript to fetch character data from the Disney API and provides a simple user interface to view and manage favorite characters.
Features

    Character Search: Users can search for Disney characters by name using the search bar.
    Character Display: Retrieved characters are displayed as cards with their images and names.
    Favorite Characters: Users can click on character cards to add them to the favorites list.
    Local Storage: The application utilizes local storage to persist favorite character data across sessions.

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