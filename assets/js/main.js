const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMore')

const maxRecords = 151
const limit = 10
let offset = 0




function loadPokemonItems(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `<li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.num}</span>
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                        <img src="${pokemon.image}"
                            alt="${pokemon.name}">
                    </div>
                </li>
            `).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItems(offset, limit)



loadMoreButton.addEventListener('click', () => {

    offset += limit
    
    const qtdRecordWhithNextPag = offset + limit

    if (qtdRecordWhithNextPag >= maxRecords) {
        const newLimit =  maxRecords - offset
        loadPokemonItems(offset, newLimit)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {

        loadPokemonItems(offset, limit)
    }
})