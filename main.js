const controle = document.querySelectorAll("[data-controle]");
const pecas = {
    bracos: {
        forca: 29,
        poder: 35,
        energia: -21,
        velocidade: -5,
    },

    blindagem: {
        forca: 41,
        poder: 20,
        energia: 0,
        velocidade: -20,
    },
    nucleos: {
        forca: 0,
        poder: 7,
        energia: 48,
        velocidade: -24,
    },
    pernas: {
        forca: 27,
        poder: 21,
        energia: -32,
        velocidade: 42,
    },
    foguetes: {
        forca: 0,
        poder: 28,
        energia: 0,
        velocidade: -2,
    },
};

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        console.log(evento.target.parentNode);
    });
});

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]");
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
