const robotron = document.querySelector("#robotron");

// função comum
function dizOi() {
    console.log("oi");
}

robotron.addEventListener("click", dizOi);

// função anônima comum
robotron.addEventListener("click", function () {
    console.log("Cliquei no robô.");
});

// arrow function anônima
robotron.addEventListener("click", () => {
    console.log("Cliquei no robô");
});
