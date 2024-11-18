// Seleciona os elementos do modal
const modal = document.getElementById('pokemonModal');
const closeButton = document.querySelector('.close');

// Preenche o modal com as informações do Pokémon
function openModal(event) {
    const pokemonImage = event.target;

    // Verifica se o clique foi em uma imagem de Pokémon
    if (pokemonImage.classList.contains('pokemon-img')) {
        const name = pokemonImage.dataset.name;
        const photo = pokemonImage.dataset.photo;
        const types = pokemonImage.dataset.types;

        // Atualiza o conteúdo do modal
        document.getElementById('pokemonName').textContent = name;
        document.getElementById('pokemonImage').src = photo;
        document.getElementById('pokemonImage').alt = name;
        document.getElementById('pokemonType').textContent = `Tipos: ${types}`;


        // Exibe o modal
        modal.style.display = 'flex';
    }
}

// Fecha o modal quando o botão de fechamento é clicado
closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Fecha o modal se o usuário clicar fora da área do modal
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Adiciona o evento de clique na imagem do Pokémon
document.addEventListener('click', openModal);
