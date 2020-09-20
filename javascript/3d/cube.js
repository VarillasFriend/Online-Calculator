let cubeInputs = document.querySelectorAll('.cube-input'),
    cubeSide = document.getElementById('cube-side').value,
    cubeDiagonal = document.getElementById('cube-diagonal').value,
    cubeArea = document.getElementById('cube-area').value,
    cubeVolume = document.getElementById('cube-volume').value,
    cubeRound = document.getElementById('cube-round').value,

    cubeSideResult = document.getElementById('cube-side-result'),
    cubeDiagonalResult = document.getElementById('cube-diagonal-result'),
    cubeAreaResult = document.getElementById('cube-area-result'),
    cubeVolumeResult = document.getElementById('cube-volume-result');

cubeInputs.forEach(cubeInput => cubeInput.oninput = () => {
    cube()
})

function cube() {
    let side = 0,
        diagonal = 0,
        area = 0,
        volume = 0;
        
    cubeSide = document.getElementById('cube-side').value
    cubeDiagonal = document.getElementById('cube-diagonal').value
    cubeArea = document.getElementById('cube-area').value
    cubeVolume = document.getElementById('cube-volume').value
    cubeRound = document.getElementById('cube-round').value

    if (!cubeRound) {
        cubeRound = 2
    } else if (cubeRound > 12) {
        cubeRound = 12
    }

    if (cubeSide) {
        side = cubeSide

        diagonal = (cubeSide ** 2 * 3) ** 0.5
        area = cubeSide ** 2 * 6
        volume = cubeSide ** 3
    } else if (cubeDiagonal) {
        diagonal = cubeDiagonal

        side = (cubeDiagonal ** 2 / 3) ** 0.5
        area = side ** 2 * 6
        volume = side ** 3
    } else if (cubeArea) {
        area = cubeArea

        side = ((cubeArea * 1) / 6) ** 0.5
        diagonal = (side ** 2 * 3) ** 0.5
        volume = side ** 3
    } else if (cubeVolume) {
        volume = cubeVolume

        side = cubeVolume ** (1/3)
        diagonal = (side ** 2 * 3) ** 0.5
        area = side ** 2 * 6
    }

    cubeSideResult.innerHTML = Math.round(side * (10 ** cubeRound)) / (10 ** cubeRound)
    cubeDiagonalResult.innerHTML = Math.round(diagonal * (10 ** cubeRound)) / (10 ** cubeRound)
    cubeAreaResult.innerHTML = Math.round(area * (10 ** cubeRound)) / (10 ** cubeRound)
    cubeVolumeResult.innerHTML = Math.round(volume * (10 ** cubeRound)) / (10 ** cubeRound)
}