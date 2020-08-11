let paralelInputs = document.querySelectorAll('.paralel-input'),
    paralelBase = document.getElementById('paralel-base').value,
    paralelHeight = document.getElementById('paralel-height').value,
    paralelArea = document.getElementById('paralel-area').value,
    paralelRound = document.getElementById('paralel-round').value,

    paralelBaseResult = document.getElementById('paralel-base-result'),
    paralelHeightResult = document.getElementById('paralel-height-result'),
    paralelAreaResult = document.getElementById('paralel-area-result');

paralelInputs.forEach(paralelInput => paralelInput.oninput = () => {
    paralel()
})

function paralel() {
    paralelBase = document.getElementById('paralel-base').value
    paralelHeight = document.getElementById('paralel-height').value
    paralelArea = document.getElementById('paralel-area').value
    paralelRound = document.getElementById('paralel-round').value

    if (!paralelRound) {
        paralelRound = 2
    } else if (paralelRound > 12) {
        paralelRound = 12
    }

    if (paralelBase && paralelHeight) {
        paralelBaseResult.innerHTML = Math.round(paralelBase * (10 ** paralelRound)) / (10 ** paralelRound)
        paralelHeightResult.innerHTML = Math.round(paralelHeight * (10 ** paralelRound)) / (10 ** paralelRound)

        paralelAreaResult.innerHTML = Math.round(paralelBase * paralelHeight * (10 ** paralelRound)) / (10 ** paralelRound)
    } else if (paralelArea && paralelHeight) {
        paralelAreaResult.innerHTML = Math.round(paralelArea  * (10 ** paralelRound)) / (10 ** paralelRound)
        paralelHeightResult.innerHTML = Math.round(paralelHeight * (10 ** paralelRound)) / (10 ** paralelRound)

        paralelBaseResult.innerHTML = Math.round(paralelArea / paralelHeight * (10 ** paralelRound)) / (10 ** paralelRound)
    } else if (paralelArea && paralelBase) {
        paralelAreaResult.innerHTML = Math.round(paralelArea  * (10 ** paralelRound)) / (10 ** paralelRound)
        paralelBaseResult.innerHTML = Math.round(paralelBase * (10 ** paralelRound)) / (10 ** paralelRound)

        paralelHeightResult.innerHTML = Math.round(paralelArea / paralelBase * (10 ** paralelRound)) / (10 ** paralelRound)
    }
}