/*
BONUS: Pokemon types are handled and display w/i the card. -- see createCardDisplay in create section

Functions layed out as follows:
fetch
format
html interactors
create
call
*/

//***fetch
// generic async fetch takes api url and function name - runs function name once loaded
// creater functions will require data handling
async function fetchAndFeedDataToFunction(targetEndpoint, func) {
    try {
        const response = await fetch(targetEndpoint);
        if (!response.ok) {
            // display img with refresh instruction
            document.getElementById('httpError').classList.remove('d-none');
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        func(data);
    } catch (error) {
        console.error("Fetch error:", error);
        // display img with refresh instruction - or come back later
        document.getElementById('fetchError').classList.remove('d-none');
    }
}

//***format
function capitalize(str) {
    // finds word border followed by letter and returns uppercase form of letter
    return str.replace(/\b\w/g, function(match) {
        return match.toUpperCase();
    });
}

function formatName(name) {
    return capitalize(name.replace(/[-]/g, " "));
}

//  nums < 1000 -- 40 -> #0040, 5 -> #0005
function formatPokemonId(id) {
    if (id < 1000) {
        return '#' + String(id).padStart(4, '0')
    }
    return '#' + id;
}

function collectRelevantData(data) {
    return {
        imgUrl: data.sprites.front_default,
        name: capitalize(data.name),
        id: formatPokemonId(data.order),
        types: data.types.map(t => t.type.name)
    }
}

//***html interact
// hide search bar until options are dynamically loaded
function toggleSearchOK() {
    const form = document.getElementById('pokeForm');
    const loadMessage = document.getElementById('loadMessage');

    form.classList.toggle('d-none');
    loadMessage.innerHTML = 'Search whenever you\'re ready!';
}

//  applies user input value from searchbar enters it as endpoint url
function getTargetEndPointBySearchbar() {
    const pokeman = document.getElementById('searchPokemans');
    return 'https://pokeapi.co/api/v2/pokemon/' + pokeman.value
}

function blockInvalidSearch() {
    const searchbar = document.getElementById('searchPokemans');
    // had some help with this selector
    const datalistOptions = Array.from( document.querySelectorAll('option') ).map(option => option.value);
    const searchButton = document.getElementById('searchButton');
    
    searchbar.addEventListener('input', function() {
        if (datalistOptions.includes(this.value)) {
            // The input value is not in the datalist options
            searchButton.toggleAttribute('disabled', false);
        } else {
            searchButton.toggleAttribute('disabled', true);
            console.log(`"${ this.value }" is not a valid option. It's not on the list. Pick from the list and try searching again.`);
        }
    });
}

//***create
function createOptions(nameData) {
    // fetch all names for options
    const datalist = document.getElementById('pokemonNames');
        // dynamically create 1000+ option tags from nameData in format '# name'
    let i = 1;
    nameData.forEach((data) => {
        const option = document.createElement('option');
        option.value = formatName(data.name);
    // put option tags inside datalist tag
        datalist.appendChild(option);
    });
    // toggle form display and card message
    toggleSearchOK();
    blockInvalidSearch();
}

function createCardDisplay(targetPokemonData) {
    // get specific data
    const stat = collectRelevantData(targetPokemonData);
    // get target div for display
    const cardContainer = document.getElementById("pokeCardContainer");
    // clear previous content in the div
    cardContainer.innerHTML = "";

    // handle any number of types
    const types = stat.types.map(typeName => `
        <div class="col-5 mx-auto text-nowrap" id="${capitalize(typeName)}">${capitalize(typeName)}</div>
    `).join("") 

    // put stuff where you want it
    const pokeCard = `
        <div class="card col-md-6 col-10">
            <img class="img-thumbnail mx-auto" src="${ stat.imgUrl }" id="pokeImg" alt="Image of ${ stat.name }">
            <h3 id="pokeName">${stat.name}</h3>
            <blockquote>${ stat.id }</blockquote>
            <div class="row" id="typeContainer">
            ${ types }
            </div>
        </div>
    `
    // display the card
    cardContainer.innerHTML = pokeCard;
}

//***call
// create options immediately
fetchAndFeedDataToFunction('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1025', (nameData) => createOptions(nameData.results));