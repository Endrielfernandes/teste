/*SCRIPT da tela do CADASTRO*/

document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.querySelector(".success-message").style.display = "block";
});

document.querySelectorAll(".avatar-card").forEach(card => {
    card.addEventListener("click", function() {
        document.querySelectorAll(".avatar-card").forEach(c => c.classList.remove("selected"));
        this.classList.add("selected");
    });
});