/*SCRIPT para animações da tela FAQ*/

document.addEventListener('DOMContentLoaded', function() {
    // Animação para os elementos do FAQ
    const animateElements = document.querySelectorAll('.faq-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // Funcionalidade de abrir/fechar itens do FAQ
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
    
    // Funcionalidade de trocar entre categorias
    const categoryTabs = document.querySelectorAll('.category-tab');
    const faqContainers = document.querySelectorAll('.faq-container');
    
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.getAttribute('data-category');
            
            // Atualizar tabs ativas
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Mostrar conteúdo da categoria selecionada
            faqContainers.forEach(container => {
                container.classList.remove('active');
                if (container.id === category) {
                    container.classList.add('active');
                }
            });
        });
    });
});