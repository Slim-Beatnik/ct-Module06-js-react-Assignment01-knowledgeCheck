<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![knock yourself out][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Slim-Beatnik/ct-Module06-js-react-Assignment01-knowledgeCheck">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">ct-Module06-js-react-Assignment01-knowledgeCheck</h3>

  <p align="center">
    Instructions:
1. Create an input box where users can type the name or ID of a Pokémon.
Add a button that triggers the search when clicked.
Use the PokeAPI to fetch Pokémon data asynchronously.
When the search is triggered, make an API request to retrieve the Pokémon's information.
3. Display Data:
Display the Pokémon's name and image on the page after fetching the data.
Update the DOM dynamically based on the API response.
4. Basic Error Handling:
If the Pokémon is not found, display a simple error message.
Bonus (Optional):
Display the Pokémon's type (e.g., Fire, Water) along with its name and image.
Technical Requirements:
Use vanilla JavaScript (no frameworks).
Fetch Pokémon data using the Fetch API or async/await.
Dynamically update the DOM with the Pokémon data.
Deliverables:
A working web page that allows users to search for a Pokémon and displays its name and image.
Evaluation Criteria:
The app should successfully fetch and display Pokémon data.
Clean and readable code.
Simple, functional interface with appropriate feedback for invalid searches.
Resources:
https://pokeapi.co/
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function


Main take aways:
o   It's clearly a great way to throw information into a site, especially considering you can style it in advance.
o   I need to look into the errors a bit more see if I can get some flexibility, and maybe even an onclick interuptor - something that recognizes the click and breaks the function if something silly goes wrong without forcing the user to refresh.
o   One needs to know thy data. Format is everything, if you don't know what you're getting or how you're getting it who knows what class functions will work. -- DEBUG DEBUG DEBUG

Things to look for:
o   All different pokemon types are styled differently when the card populates
o   The button toggles disabled if the search term isn't in the options list.
o   The option list is populated with a different fetch endpoint, but uses the same function
o   To see the fetch error: hide the create functions in script.js
o   To see the http error: inspect the form, delete the disabled tag with no search value or a non-pokemon search value and push the button.
o   The card display function uses map and an interpolated string to build the html tags.
o   Name image and type are present, I also added the id# using padstart for values under 1000


    <br />
    <a href="https://github.com/Slim-Beatnik/ct-Module06-js-react-Assignment01-knowledgeCheck"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://kh-ct-module06-assignment01.netlify.app/">View Demo on netlify</a>
    &middot;
    <a href="https://github.com/Slim-Beatnik/ct-Module06-js-react-Assignment01-knowledgeCheck/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/Slim-Beatnik/ct-Module06-js-react-Assignment01-knowledgeCheck/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Here's a blank template to get started. To avoid retyping too much info, do a search and replace with your text editor for the following: `Slim-Beatnik`, `ct-Module06-js-react-Assignment01-knowledgeCheck`, `twitter_handle`, `3dkylehill`, `gmail`, `totem64`, `ct-Module06-js-react-Assignment01-knowledgeCheck`, `Instructions:
1. 
Create an input box where users can type the name or ID of a Pokémon.
Add a button that triggers the search when clicked.
Use the PokeAPI to fetch Pokémon data asynchronously.
When the search is triggered, make an API request to retrieve the Pokémon's information.
3. Display Data:
Display the Pokémon's name and image on the page after fetching the data.
Update the DOM dynamically based on the API response.
4. Basic Error Handling:
If the Pokémon is not found, display a simple error message.
Bonus (Optional):
Display the Pokémon's type (e.g., Fire, Water) along with its name and image.
Technical Requirements:
Use vanilla JavaScript (no frameworks).
Fetch Pokémon data using the Fetch API or async/await.
Dynamically update the DOM with the Pokémon data.
Deliverables:
A working web page that allows users to search for a Pokémon and displays its name and image.
Evaluation Criteria:
The app should successfully fetch and display Pokémon data.
Clean and readable code.
Simple, functional interface with appropriate feedback for invalid searches.
Resources:
https://pokeapi.co/
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function`, `knock yourself out`

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![JQuery][JQuery.com]][JQuery-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Just download it and check it out or hit up the demo link 

<!-- CONTACT -->
## Contact

Kyle Hill - totem64@gmail.com

Project Link: [https://github.com/Slim-Beatnik/ct-Module06-js-react-Assignment01-knowledgeCheck](https://github.com/Slim-Beatnik/ct-Module06-js-react-Assignment01-knowledgeCheck)

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Slim-Beatnik/ct-Module06-js-react-Assignment01-knowledgeCheck.svg?style=for-the-badge
[contributors-url]: https://github.com/Slim-Beatnik/ct-Module06-js-react-Assignment01-knowledgeCheck/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Slim-Beatnik/ct-Module06-js-react-Assignment01-knowledgeCheck.svg?style=for-the-badge
[forks-url]: https://github.com/Slim-Beatnik/ct-Module06-js-react-Assignment01-knowledgeCheck/network/members
[stars-shield]: https://img.shields.io/github/stars/Slim-Beatnik/ct-Module06-js-react-Assignment01-knowledgeCheck.svg?style=for-the-badge
[stars-url]: https://github.com/Slim-Beatnik/ct-Module06-js-react-Assignment01-knowledgeCheck/stargazers
[issues-shield]: https://img.shields.io/github/issues/Slim-Beatnik/ct-Module06-js-react-Assignment01-knowledgeCheck.svg?style=for-the-badge
[issues-url]: https://github.com/Slim-Beatnik/ct-Module06-js-react-Assignment01-knowledgeCheck/issues
[license-shield]: https://img.shields.io/github/license/Slim-Beatnik/ct-Module06-js-react-Assignment01-knowledgeCheck.svg?style=for-the-badge
[license-url]: https://github.com/Slim-Beatnik/ct-Module06-js-react-Assignment01-knowledgeCheck/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/3dkylehill
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
