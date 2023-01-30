const robotron = document.querySelector("#robotron");

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
