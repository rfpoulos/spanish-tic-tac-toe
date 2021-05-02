const condicionDeVictoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let jugadorActual = "X";
let ganador;

const cuadrado = document.querySelectorAll(".cuadrado");
cuadrado.forEach((cuadrado, indice) => {
    cuadrado.addEventListener("click", () => {
        if (ganador) {
            return;
        }
        clicButon(cuadrado, indice);
    }, { once: true });
});

function clicButon(element, indice) {
    element.textContent = jugadorActual;
    if (tieneGanador()) {
        ganador = jugadorActual;
        return;
    }
    jugadorActual = jugadorActual === "X" ? "O" : "X";
}

function tieneGanador() {
    const cuadradoValues = Array.from(cuadrado).map((cuadrado) => {
        return cuadrado.textContent;
    });

    const tieneGanador = condicionDeVictoria.some(winCondition => {
        const indiceDeVictoria0 = cuadradoValues[winCondition[0]];
        const indiceDeVictoria1 = cuadradoValues[winCondition[1]];
        const indiceDeVictoria2 = cuadradoValues[winCondition[2]];
        return indiceDeVictoria0 && indiceDeVictoria0 === indiceDeVictoria1 && indiceDeVictoria0 === indiceDeVictoria2;
    });

    return tieneGanador;
}