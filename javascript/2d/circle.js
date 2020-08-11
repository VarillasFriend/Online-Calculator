let circleInputs = document.querySelectorAll('.circle-input'),
    circleRadius = document.getElementById('circle-radius').value,
    circleDiameter = document.getElementById('circle-diameter').value,
    circleCircum = document.getElementById('circle-circum').value,
    circleArea = document.getElementById('circle-area').value,
    circleRound = document.getElementById('circle-round').value,

    circleRadiusResult = document.getElementById('circle-radius-result'),
    circleDiameterResult = document.getElementById('circle-diameter-result'),
    circleCircumResult = document.getElementById('circle-circum-result'),
    circleAreaResult = document.getElementById('circle-area-result');

circleInputs.forEach(circleInput => circleInput.oninput = () => {
    circle()
})

function circle() {
    circleRadius = document.getElementById('circle-radius').value
    circleDiameter = document.getElementById('circle-diameter').value
    circleCircum = document.getElementById('circle-circum').value
    circleArea = document.getElementById('circle-area').value
    circleRound = document.getElementById('circle-round').value

    if (!circleRound) {
        circleRound = 2
    } else if (circleRound > 12) {
        circleRound = 12
    }

    if (circleRadius) {
        circleRadiusResult.innerHTML = Math.round(circleRadius * (10 ** circleRound)) / (10 ** circleRound)

        circleDiameterResult.innerHTML = Math.round(circleRadius * 2 * (10 ** circleRound)) / (10 ** circleRound)
        circleCircumResult.innerHTML = Math.round((2 * Math.PI * circleRadius) * (10 ** circleRound)) / (10 ** circleRound)
        circleAreaResult.innerHTML = Math.round(Math.PI * (circleRadius ** 2) * (10 ** circleRound)) / (10 ** circleRound)
    } else if (circleDiameter) {
        circleDiameterResult.innerHTML = Math.round(circleDiameter * (10 ** circleRound)) / (10 ** circleRound)

        circleRadiusResult.innerHTML = Math.round(circleDiameter / 2 * (10 ** circleRound)) / (10 ** circleRound)
        circleCircumResult.innerHTML = Math.round((2 * Math.PI * circleRadiusResult.innerHTML) * (10 ** circleRound)) / (10 ** circleRound)
        circleAreaResult.innerHTML = Math.round(Math.PI * (circleRadiusResult.innerHTML ** 2) * (10 ** circleRound)) / (10 ** circleRound)
    } else if (circleCircum) {
        circleCircumResult.innerHTML = Math.round(circleCircum * (10 ** circleRound)) / (10 ** circleRound)

        circleRadiusResult.innerHTML = Math.round(circleCircum / 2 / Math.PI * (10 ** circleRound)) / (10 ** circleRound)
        circleDiameterResult.innerHTML = Math.round(circleRadiusResult.innerHTML * 2 * (10 ** circleRound)) / (10 ** circleRound)
        circleAreaResult.innerHTML = Math.round(Math.PI * (circleRadiusResult.innerHTML ** 2) * (10 ** circleRound)) / (10 ** circleRound)
    } else if (circleArea) {
        circleAreaResult.innerHTML = Math.round(circleArea * (10 ** circleRound)) / (10 ** circleRound)

        circleRadiusResult.innerHTML = Math.round((circleArea / Math.PI) ** 0.5 * (10 ** circleRound)) / (10 ** circleRound)
        circleDiameterResult.innerHTML = Math.round(circleRadiusResult.innerHTML * 2 * (10 ** circleRound)) / (10 ** circleRound)
        circleCircumResult.innerHTML = Math.round(2 * Math.PI * circleRadiusResult.innerHTML * (10 ** circleRound)) / (10 ** circleRound)
    }
}