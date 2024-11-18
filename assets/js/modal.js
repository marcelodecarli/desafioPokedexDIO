// Seleciona o modal e seus elementos internos
const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('.modal-name');
const modalImage = document.querySelector('.modal-image');
const modalTypes = document.querySelector('.modal-types');
const modalCloseButton = document.querySelector('.modal-close');

// Abre o modal com as informações do Pokémon
function openModal(event) {
    const pokemonImage = event.target;

    // Verifica se o clique foi em uma imagem de Pokémon
    if (pokemonImage.classList.contains('pokemon-img')) {
        const name = pokemonImage.dataset.name;
        const photo = pokemonImage.dataset.photo;
        const types = pokemonImage.dataset.types;

        // Atualiza o conteúdo do modal
        modalTitle.textContent = name;
        modalImage.src = photo;
        modalImage.alt = name;
        modalTypes.textContent = `Tipos: ${types}`;

        // Exibe o modal
        modal.style.display = 'flex';
    }
}

// Fecha o modal
function closeModal() {
    modal.style.display = 'none';
}

// Eventos para abrir e fechar o modal
document.addEventListener('click', openModal);
modalCloseButton.addEventListener('click', closeModal);

// Fecha o modal ao clicar fora da área de conteúdo
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
