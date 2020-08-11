let squareInputs = document.querySelectorAll('.square-input'),
    squareSide = document.getElementById('square-side').value,
    squareDiagonal = document.getElementById('square-diagonal').value,
    squareArea = document.getElementById('square-area').value,
    squareRound = document.getElementById('square-round').value,

    squareSideResult = document.getElementById('square-side-result'),
    squareDiagonalResult = document.getElementById('square-diagonal-result'),
    squareAreaResult = document.getElementById('square-area-result');

squareInputs.forEach(squareInput => squareInput.oninput = () => {
    square()
})

function square() {
    squareSide = document.getElementById('square-side').value
    squareDiagonal = document.getElementById('square-diagonal').value
    squareArea = document.getElementById('square-area').value
    squareRound = document.getElementById('square-round').value

    if (!squareRound) {
        squareRound = 2
    } else if (squareRound > 12) {
        squareRound = 12
    }

    if (squareSide) {
        squareSideResult.innerHTML = Math.round(squareSide * (10 ** squareRound)) / (10 ** squareRound)

        squareDiagonalResult.innerHTML = Math.round(((squareSide ** 2 * 2) ** 0.5)  * (10 ** squareRound)) / (10 ** squareRound)
        squareAreaResult.innerHTML = Math.round(squareSide ** 2  * (10 ** squareRound)) / (10 ** squareRound)
    } else if (squareDiagonal) {
        squareDiagonalResult.innerHTML = Math.round(squareDiagonal  * (10 ** squareRound)) / (10 ** squareRound)

        squareSideResult.innerHTML = Math.round((squareDiagonal ** 2 / 2) ** 0.5  * (10 ** squareRound)) / (10 ** squareRound)
        squareAreaResult.innerHTML = Math.round(squareSideResult.innerHTML ** 2 * (10 ** squareRound)) / (10 ** squareRound)
    } else if (squareArea) {
        squareAreaResult.innerHTML = Math.round(squareArea  * (10 ** squareRound)) / (10 ** squareRound)

        squareSideResult.innerHTML = Math.round(squareArea ** 0.5  * (10 ** squareRound)) / (10 ** squareRound)
        squareDiagonalResult.innerHTML = Math.round((squareSideResult.innerHTML ** 2 * 2) ** 0.5  * (10 ** squareRound)) / (10 ** squareRound)
    }
}

