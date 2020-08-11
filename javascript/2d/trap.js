let trapInputs = document.querySelectorAll('.trap-input'),
    trapBase = document.getElementById('trap-base').value,
    trapBase2 = document.getElementById('trap-base2').value,
    trapHeight = document.getElementById('trap-height').value,
    trapArea = document.getElementById('trap-area').value,
    trapRound = document.getElementById('trap-round').value,

    trapBaseResult = document.getElementById('trap-base-result'),
    trapBase2Result = document.getElementById('trap-base2-result'),
    trapHeightResult = document.getElementById('trap-height-result'),
    trapAreaResult = document.getElementById('trap-area-result');

trapInputs.forEach(trapInput => trapInput.oninput = () => {
    trap()
})

function trap() {
    trapBase = document.getElementById('trap-base').value
    trapBase2 = document.getElementById('trap-base2').value
    trapHeight = document.getElementById('trap-height').value
    trapArea = document.getElementById('trap-area').value
    trapRound = document.getElementById('trap-round').value

    if (!trapRound) {
        trapRound = 2
    } else if (trapRound > 12) {
        trapRound = 12
    }

    if (trapBase && trapBase2 && trapHeight) {
        trapBaseResult.innerHTML = Math.round(trapBase * (10 ** trapRound)) / (10 ** trapRound)
        trapBase2Result.innerHTML = Math.round(trapBase2 * (10 ** trapRound)) / (10 ** trapRound)
        trapHeightResult.innerHTML = Math.round(trapHeight * (10 ** trapRound)) / (10 ** trapRound)

        trapAreaResult.innerHTML = Math.round((trapBase * 1 + trapBase2 * 1) * trapHeight * 0.5 * (10 ** trapRound)) / (10 ** trapRound)
    } else if (trapBase && trapBase2 && trapArea) {
        trapBaseResult.innerHTML = Math.round(trapBase * (10 ** trapRound)) / (10 ** trapRound)
        trapBase2Result.innerHTML = Math.round(trapBase2 * (10 ** trapRound)) / (10 ** trapRound)
        trapAreaResult.innerHTML = Math.round(trapArea * (10 ** trapRound)) / (10 ** trapRound)

        trapHeightResult.innerHTML = Math.round(trapArea * 2 / (trapBase * 1 + trapBase2 * 1) * (10 ** trapRound)) / (10 ** trapRound)
    } else if (trapBase && trapHeight && trapArea) {
        trapBaseResult.innerHTML = Math.round(trapBase * (10 ** trapRound)) / (10 ** trapRound)
        trapHeightResult.innerHTML = Math.round(trapHeight * (10 ** trapRound)) / (10 ** trapRound)
        trapAreaResult.innerHTML = Math.round(trapArea * (10 ** trapRound)) / (10 ** trapRound)

        trapBase2Result.innerHTML = Math.round((trapArea * 2 / trapHeight - trapBase * 1) * (10 ** trapRound)) / (10 ** trapRound)
    } else if (trapBase2 && trapHeight && trapArea) {
        trapBase2Result.innerHTML = Math.round(trapBase2 * (10 ** trapRound)) / (10 ** trapRound)
        trapHeightResult.innerHTML = Math.round(trapHeight * (10 ** trapRound)) / (10 ** trapRound)
        trapAreaResult.innerHTML = Math.round(trapArea * (10 ** trapRound)) / (10 ** trapRound)

        trapBaseResult.innerHTML = Math.round((trapArea * 2 / trapHeight - trapBase2 * 1) * (10 ** trapRound)) / (10 ** trapRound)
    }
}