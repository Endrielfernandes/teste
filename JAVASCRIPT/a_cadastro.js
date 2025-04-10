/*SCRIPT para animações da tela CADASTRO*/

document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidade para seleção de avatar
    const avatarCards = document.querySelectorAll('.avatar-card');
    
    avatarCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove a classe 'selected' de todos os cards
            avatarCards.forEach(c => c.classList.remove('selected'));
            // Adiciona a classe 'selected' ao card clicado
            this.classList.add('selected');
        });
    });
    
    // Funcionalidade para mostrar/ocultar senha
    const toggleButtons = document.querySelectorAll('.toggle-password');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.previousElementSibling;
            const icon = this.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });
    
    // Funcionalidade para submissão do formulário
    const cadastroForm = document.getElementById('cadastroForm');
    const successMessage = document.querySelector('.success-message');
    
    cadastroForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Validar senha e confirmação de senha
        const senha = document.getElementById('senha').value;
        const confirmarSenha = document.getElementById('confirmar_senha').value;
        
        if (senha !== confirmarSenha) {
            alert('As senhas não coincidem. Por favor, verifique.');
            return;
        }
        
        // Simulação de envio do formulário
        setTimeout(() => {
            cadastroForm.style.display = 'none';
            successMessage.style.display = 'block';
        }, 1000);
    });
});