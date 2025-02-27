async function getPokemonByName() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        
        if (!response.ok) {  // Check if response is successful
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const todo = await response.json();
        console.log('pokemanData:', todo);
    } catch (error) {
        console.error('Fetch Error:', error.message);
    }
}

getPokemonByName();


// Function to display images using .map()
/* function displayPokemon(pokemanata) {
    const cardContainer = document.getElementById("pokeCardContainer");
    
    // Use .map() to create the HTML elements for each dog image
    const pokeCards = images.map(imageUrl => `
        <div class="card col-md-6 col-10">
            <img src="${imageUrl}" id="pokeImg alt="Random Dog">
            <h3 id="pokeName"></h3>
            <div class="
        </div>
    `).join(""); // Convert the array into a single HTML string

    cardContainer.innerHTML = pokeCards; // Inject the generated HTML into the gallery
} */