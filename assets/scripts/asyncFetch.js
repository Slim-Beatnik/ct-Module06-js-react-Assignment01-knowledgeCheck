async function createOptionsFromPokemonNames(nameData) {
        const datalist = document.getElementById('pokemonNames');
            // dynamically create 1000+ option tags from nameData
            nameData.forEach(name => {
                const option = document.createElement('option');
                option.value = name.replace(/[-]/gi, ' ').replace(/(\w)(\w+)/g, (match, group1, group2) => {
                    if (group2) {
                        return group1.toUpperCase() + group2;
                    } else {
                        return group1.toUpperCase();
                    }
                });
                // put option tags inside datalist tag
                datalist.appendChild(option);
            });
}

// hide search bar until options are dynamically loaded
function toggleSearchOK() {
    const form = document.getElementById('pokeForm');
    const loadMessage = document.getElementById('loadMessage');

    form.classList.toggle('d-none');
    loadMessage.innerHTML = 'Search whenever you\'re ready!';
}

// fetch and format nameData, call toggleSearchOK and createOptionsFromPokemonNames(nameData)
async function getAllPokemonNames() {
    try {
        const pokemonData = await new Promise((resolve) => {
        const response = fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1025');
        resolve(response);
        });

        const data = await pokemonData.json();
        console.log(data);
        if (data) {
            // display searchOK message and unhide searchbar and button
            toggleSearchOK();
            // create nameData as '# name'
            const nameData = []
            i = 1;
            for (const x of data.results) {
                nameData.push(`${i} ` + x.name);
                i++;
            }
            
            createOptionsFromPokemonNames(nameData);
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('loadingError').classList.toggle('d-none');
    }
}

getTargetPokemonData = async (targetPokemon) => {
    try {
        console.log('tp= ',targetPokemon.match(/\d+/))
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${targetPokemon.match(/\d+/)[0]}`);
        const data = await response.json();
        console.log(data);
        if (data) {
            // create targetPokemonData object
            const targetPokemonData = {
                name: data.name,
                id: data.id,
                type: data.types[0].type.name,
                imgUrl: data.sprites.other['official-artwork'].front_default,
                desc: `#${data.id} ${data.name} is a ${data.types[0].type.name} type Pokemon.`
            };
            // call formatCardDisplay(targetPokemonData)
            formatCardDisplay(targetPokemonData);
        }
    } catch (error) {
        console.error('getTargetPokemon Error:', error);
        document.getElementById('loadingError').classList.toggle('d-none');
    }
}

function formatCardDisplay(targetPokemonData) {
    const cardContainer = document.getElementById("pokeCardContainer");
    cardContainer.innerHTML = "";
    
    // Use .map() to create the HTML elements for each dog image
    const pokeCards = cards.map(cardData => `
        <div class="card col-md-6 col-10">
            <img src="${cardData.url}" id="pokeImg" alt="${cardData.name}">
            <h3 id="pokeName">${cardData.name}</h3>
            <blockquote>${cardData.desc}</blockquote>
        </div>
    `).join(""); // Convert the array into a single HTML string

    cardContainer.innerHTML = pokeCards; // Inject the generated HTML into the gallery
}

// call getAllPokemonNames() to load options immediately
getAllPokemonNames();