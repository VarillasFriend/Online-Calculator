let rectangleInputs = document.querySelectorAll('.rectangle-input'),
    rectangleBase = document.getElementById('rectangle-base').value,
    rectangleHeight = document.getElementById('rectangle-height').value,
    rectangleDiagonal = document.getElementById('rectangle-diagonal').value,
    rectangleArea = document.getElementById('rectangle-area').value,
    rectangleRound = document.getElementById('rectangle-round').value,

    rectangleBaseResult = document.getElementById('rectangle-base-result'),
    rectangleHeightResult = document.getElementById('rectangle-height-result'),
    rectangleDiagonalResult = document.getElementById('rectangle-diagonal-result'),
    rectangleAreaResult = document.getElementById('rectangle-area-result');

rectangleInputs.forEach(rectangleInput => rectangleInput.oninput = () => {
    rectangle()
})

function rectangle() {
    rectangleBase = document.getElementById('rectangle-base').value
    rectangleHeight = document.getElementById('rectangle-height').value
    rectangleDiagonal = document.getElementById('rectangle-diagonal').value
    rectangleArea = document.getElementById('rectangle-area').value
    rectangleRound = document.getElementById('rectangle-round').value

    if (!rectangleRound) {
        rectangleRound = 2
    } else if (rectangleRound > 12) {
        rectangleRound = 12
    }

    if (rectangleBase && rectangleHeight) {
        rectangleBaseResult.innerHTML = Math.round(rectangleBase * (10 ** rectangleRound)) / (10 ** rectangleRound)
        rectangleHeightResult.innerHTML = Math.round(rectangleHeight * (10 ** rectangleRound)) / (10 ** rectangleRound)

        rectangleDiagonalResult.innerHTML = Math.round(((rectangleBase ** 2 + rectangleHeight ** 2) ** 0.5)  * (10 ** rectangleRound)) / (10 ** rectangleRound)
        rectangleAreaResult.innerHTML = Math.round(rectangleBase * rectangleHeight  * (10 ** rectangleRound)) / (10 ** rectangleRound)
    } else if (rectangleDiagonal && rectangleHeight) {
        rectangleDiagonalResult.innerHTML = Math.round(rectangleDiagonal  * (10 ** rectangleRound)) / (10 ** rectangleRound)
        rectangleHeightResult.innerHTML = Math.round(rectangleHeight * (10 ** rectangleRound)) / (10 ** rectangleRound)

        rectangleBaseResult.innerHTML = Math.round((rectangleDiagonal ** 2 - rectangleHeight ** 2) ** 0.5 * (10 ** rectangleRound)) / (10 ** rectangleRound)
        rectangleAreaResult.innerHTML = Math.round(rectangleBaseResult.innerHTML * rectangleHeight  * (10 ** rectangleRound)) / (10 ** rectangleRound)
    } else if (rectangleDiagonal && rectangleBase) {
        rectangleDiagonalResult.innerHTML = Math.round(rectangleDiagonal  * (10 ** rectangleRound)) / (10 ** rectangleRound)
        rectangleBaseResult.innerHTML = Math.round(rectangleBase * (10 ** rectangleRound)) / (10 ** rectangleRound)

        rectangleHeightResult.innerHTML = Math.round((rectangleDiagonal ** 2 - rectangleBase ** 2) ** 0.5 * (10 ** rectangleRound)) / (10 ** rectangleRound)
        rectangleAreaResult.innerHTML = Math.round(rectangleBase * rectangleHeightResult.innerHTML  * (10 ** rectangleRound)) / (10 ** rectangleRound)
    }
}