const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;


async function fetchPokemonDetails(pokemonId) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const data = await response.json();
  
    const name = data.name;
    const types = data.types.map(typeInfo => typeInfo.type.name).join(', ');
    const image = data.sprites.front_default;

  
    // Atualize os elementos da modal com os dados do Pokémon
    document.getElementById('pokemonName').textContent = `Nome: ${name}`;
    document.getElementById('pokemonType').textContent = `Tipo(s): ${types}`;
    document.getElementById('pokemonImage').src = image;

  
    // Mostre a modal
    document.getElementById('pokemonModal').style.display = 'block';
  }
  

  function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img 
                    src="${pokemon.photo}" 
                    alt="${pokemon.name}" 
                    class="pokemon-img"
                    data-name="${pokemon.name}" 
                    data-photo="${pokemon.photo}" 
                    data-types="${pokemon.types.join(', ')}"
                >
            </div>
        </li>
    `;
}



function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}


loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})


