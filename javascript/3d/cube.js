let cubeInputs = document.querySelectorAll('.cube-input'),
    cubeSide = document.getElementById('cube-side').value,
    cubeDiagonal = document.getElementById('cube-diagonal').value,
    cubeArea = document.getElementById('cube-area').value,
    cubeRound = document.getElementById('cube-round').value,

    cubeSideResult = document.getElementById('cube-side-result'),
    cubeDiagonalResult = document.getElementById('cube-diagonal-result'),
    cubeAreaResult = document.getElementById('cube-area-result');

cubeInputs.forEach(cubeInput => cubeInput.oninput = () => {
    cube()
})

function cube() {
    cubeSide = document.getElementById('cube-side').value
    cubeDiagonal = document.getElementById('cube-diagonal').value
    cubeArea = document.getElementById('cube-area').value
    cubeRound = document.getElementById('cube-round').value

    if (!cubeRound) {
        cubeRound = 2
    } else if (cubeRound > 12) {
        cubeRound = 12
    }

    if (cubeSide) {
        cubeSideResult.innerHTML = Math.round(cubeSide * (10 ** cubeRound)) / (10 ** cubeRound)

        cubeDiagonalResult.innerHTML = Math.round(((cubeSide ** 2 * 2) ** 0.5)  * (10 ** cubeRound)) / (10 ** cubeRound)
        cubeAreaResult.innerHTML = Math.round(cubeSide ** 2  * (10 ** cubeRound)) / (10 ** cubeRound)
    } else if (cubeDiagonal) {
        cubeDiagonalResult.innerHTML = Math.round(cubeDiagonal  * (10 ** cubeRound)) / (10 ** cubeRound)

        cubeSideResult.innerHTML = Math.round((cubeDiagonal ** 2 / 2) ** 0.5  * (10 ** cubeRound)) / (10 ** cubeRound)
        cubeAreaResult.innerHTML = Math.round(cubeSideResult.innerHTML ** 2 * (10 ** cubeRound)) / (10 ** cubeRound)
    } else if (cubeArea) {
        cubeAreaResult.innerHTML = Math.round(cubeArea  * (10 ** cubeRound)) / (10 ** cubeRound)

        cubeSideResult.innerHTML = Math.round(cubeArea ** 0.5  * (10 ** cubeRound)) / (10 ** cubeRound)
        cubeDiagonalResult.innerHTML = Math.round((cubeSideResult.innerHTML ** 2 * 2) ** 0.5  * (10 ** cubeRound)) / (10 ** cubeRound)
    }
}

