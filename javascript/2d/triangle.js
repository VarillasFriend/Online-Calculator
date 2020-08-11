let triangleInputs = document.querySelectorAll('.triangle-input'),
    triangleBase = document.getElementById('triangle-base').value,
    triangleHeight = document.getElementById('triangle-height').value,
    triangleArea = document.getElementById('triangle-area').value,
    triangleRound = document.getElementById('triangle-round').value,

    triangleBaseResult = document.getElementById('triangle-base-result'),
    triangleHeightResult = document.getElementById('triangle-height-result'),
    triangleAreaResult = document.getElementById('triangle-area-result');

triangleInputs.forEach(triangleInput => triangleInput.oninput = () => {
    triangle()
})

function triangle() {
    triangleBase = document.getElementById('triangle-base').value
    triangleHeight = document.getElementById('triangle-height').value
    triangleArea = document.getElementById('triangle-area').value
    triangleRound = document.getElementById('triangle-round').value

    if (!triangleRound) {
        triangleRound = 2
    } else if (triangleRound > 12) {
        triangleRound = 12
    }

    if (triangleBase && triangleHeight) {
        triangleBaseResult.innerHTML = Math.round(triangleBase * (10 ** triangleRound)) / (10 ** triangleRound)
        triangleHeightResult.innerHTML = Math.round(triangleHeight * (10 ** triangleRound)) / (10 ** triangleRound)

        triangleAreaResult.innerHTML = Math.round(triangleBase * triangleHeight /2 * (10 ** triangleRound)) / (10 ** triangleRound)
    } else if (triangleArea && triangleHeight) {
        triangleAreaResult.innerHTML = Math.round(triangleArea  * (10 ** triangleRound)) / (10 ** triangleRound)
        triangleHeightResult.innerHTML = Math.round(triangleHeight * (10 ** triangleRound)) / (10 ** triangleRound)

        triangleBaseResult.innerHTML = Math.round(triangleArea * 2 / triangleHeight * (10 ** triangleRound)) / (10 ** triangleRound)
    } else if (triangleArea && triangleBase) {
        triangleAreaResult.innerHTML = Math.round(triangleArea  * (10 ** triangleRound)) / (10 ** triangleRound)
        triangleBaseResult.innerHTML = Math.round(triangleBase * (10 ** triangleRound)) / (10 ** triangleRound)

        triangleHeightResult.innerHTML = Math.round(triangleArea * 2 / triangleBase * (10 ** triangleRound)) / (10 ** triangleRound)
    }
}