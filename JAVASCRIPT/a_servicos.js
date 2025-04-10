/*SCRIPT para animações da tela de SERVIÇOS*/

document.addEventListener('DOMContentLoaded', function() {
    // Adiciona classe de animação aos elementos quando eles entram na viewport
    const animateElements = document.querySelectorAll('.service-card, .methodology-step');
    
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
});