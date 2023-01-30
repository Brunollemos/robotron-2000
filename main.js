const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode);
        console.log(evento.target.parentNode);
    });
});

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector(".controle-contador");
    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

// Rascunho para consulta abaixo

/*somar.addEventListener("click", () => {
    manipulaDados("somar");
});

subtrair.addEventListener("click", () => {
    manipulaDados("subtrair");
});*/

/*somar.addEventListener("click", (evento) => {
    //console.log(parseInt(braco.value));
    braco.value = parseInt(braco.value) + 1;
});

subtrair.addEventListener("click", (evento) => {
    braco.value = parseInt(braco.value) - 1;
});*/

/* const robotron = document.querySelector("#robotron");

// função comum nomeada
function dizOi() {
    console.log("oi");
}

// função comum nomeada com parâmetro
function dizOi(nome) {
    console.log("oi" + nome);
    console.log("Bem vindo ao Robotron 2000");
}

robotron.addEventListener("click", dizOi);

// função anônima
robotron.addEventListener("click", function () {
    console.log("Cliquei no robô.");
});

// arrow function anônima
robotron.addEventListener("click", () => {
    console.log("Cliquei no robô");
});

*/
