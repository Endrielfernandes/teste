/*SCRIPT da tela do FAQ*/

// Seleciona todos os elementos que possuem a classe 'faq-item'
document.querySelectorAll(".faq-item").forEach(item => {

    // Adiciona um ouvinte de evento de clique a cada item
    item.addEventListener("click", () => {

        // Alterna a classe 'active' no item clicado
        // Se a classe estiver presente, será removida (fechando a resposta)
        // Se não estiver presente, será adicionada (abrindo a resposta)
        item.classList.toggle("active");
    });
});
