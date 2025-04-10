/*SCRIPT para animações da tela DEPOIMENTOS*/

document.addEventListener('DOMContentLoaded', function() {
    // Animação de fade-in para elementos
    const animateElements = document.querySelectorAll('.testimonial-card, .video-card, .case-card');
    
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
    
    // Sistema de avaliação por estrelas
    const stars = document.querySelectorAll('.rating i');
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = this.getAttribute('data-rating');
            
            // Reset all stars
            stars.forEach(s => {
                s.classList.remove('fas');
                s.classList.add('far');
            });
            
            // Fill stars up to selected rating
            for (let i = 0; i < rating; i++) {
                stars[i].classList.remove('far');
                stars[i].classList.add('fas');
            }
        });
        
        star.addEventListener('mouseover', function() {
            const rating = this.getAttribute('data-rating');
            
            // Highlight stars on hover
            for (let i = 0; i < rating; i++) {
                stars[i].classList.add('hover');
            }
        });
        
        star.addEventListener('mouseout', function() {
            stars.forEach(s => {
                s.classList.remove('hover');
            });
        });
    });
});