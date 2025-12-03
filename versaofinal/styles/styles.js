const botoes = document.querySelectorAll(".btnConteudo");
const conteudos = document.querySelectorAll(".conteudo");

// Mostra o conteúdo ao clicar no botão
botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        const targetId = botao.getAttribute("data-target");

        conteudos.forEach(c => {
            c.style.display = (c.id === targetId) ? "block" : "none";
        });
    });
});
