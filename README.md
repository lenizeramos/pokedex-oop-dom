> **Note:** This repository is a personal backup of coursework originally developed as part of my studies at Cornerstone College. It was cloned from a institutional and private repository to preserve my contributions and development history.

# Dom Manipulation with Dom

## Introduction

This requires building a small application that allows users to capture Pokémon and manage a Pokédex.

You will develop this application based on a provided static page. The CSS has been pre-configured, so your primary task is to implement JavaScript to make the application dynamic, using the static page as a reference.

## Setup Instructions

1. **Clone the Repository**
   Clone the repository to your local machine using the following command:

   ```zsh
   git clone <repository-url>
   ```

2. **Navigate to the Repository**
   Change your directory to the cloned repository:

   ```zsh
     cd ./path-to-repository
   ```

3. **Install Dependencies**
   Install the necessary dependencies:

   ```zsh
     npm install
   ```
5. **Start Development**
   Begin developing your dynamic page:

   ```zsh
     npm run dev
   ```

   > This command runs a mock server that provides an endpoint at http://localhost:3005/pokemons, which you can use to fetch the list of Pokémon.

## Requirements

Please watch the instructional video linked below to understand how to make your page dynamic using JavaScript. While you may make educated guesses during the implementation, do not hesitate to ask questions if you are unsure about any part of the project.

* Your pokedex.js should call pokedexList.js to render the specific pokemons captured. 
* You should implement the Context with a Singleton approach to keep track of the pokemons captured. 
* Props are for individual components that needs some information from its parent class, whereas, Context is for state management for your entire application. 

Please make a commit frequently and show your progress. It is more important to show how you implement than finishing the assignment.

Do not use any AI tools.

<div>
   <a href="https://www.loom.com/share/e5f22a9c659341478f25fcf1a2c79d24">
      <p>Favorite Poke - 11 May 2024 - Watch Video</p>
   </a>
   <a href="https://www.loom.com/share/e5f22a9c659341478f25fcf1a2c79d24">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/e5f22a9c659341478f25fcf1a2c79d24-with-play.gif">
   </a>
</div>

## Good Luck!!

We wish you the best of luck in completing this assessment. It's a great opportunity to demonstrate your skills in integrating JavaScript with static web elements.


## Notes

- Add total number of UNIQUE pokemons captured 
- Update the Pokedex List to include more than just the name ( like, count and release button)
- Add count and release button functionality
- Fix styles for the Pokedex
- To autocompile the SCSS to CSS, update the package.json file
- Fix style for the main to match with video example.
