const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

somar.addEventListener("click", () => {
    manipulaDados("somar");
});

subtrair.addEventListener("click", () => {
    manipulaDados("subtrair");
});

function manipulaDados(operacao) {
    if (operacao === "subtrair") {
        braco.value = parseInt(braco.value) - 1;
    } else {
        braco.value = parseInt(braco.value) + 1;
    }
}

// Rascunho para consulta abaixo

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
