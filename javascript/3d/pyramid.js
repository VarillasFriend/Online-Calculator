let pyramidInputs = document.querySelectorAll('.pyramid-input'),
    pyramidSide = document.getElementById('pyramid-side').value,
    pyramidBase = document.getElementById('pyramid-base').value,
    pyramidHeight = document.getElementById('pyramid-height').value,
    pyramidApotem = document.getElementById('pyramid-apotem').value,
    pyramidArea = document.getElementById('pyramid-area').value,
    pyramidVolume = document.getElementById('pyramid-volume').value,
    pyramidRound = document.getElementById('pyramid-round').value,

    pyramidSideResult = document.getElementById('pyramid-side-result'),
    pyramidBaseResult = document.getElementById('pyramid-base-result'),
    pyramidHeightResult = document.getElementById('pyramid-height-result'),
    pyramidApotemResult = document.getElementById('pyramid-apotem-result'),
    pyramidAreaResult = document.getElementById('pyramid-area-result'),
    pyramidVolumeResult = document.getElementById('pyramid-volume-result');

pyramidInputs.forEach(pyramidInput => pyramidInput.oninput = () => {
    pyramid()
})

function pyramid() {
    let side = 0,
        base = 0,
        height = 0,
        apotem = 0,
        area = 0,
        volume = 0;

    pyramidSide = document.getElementById('pyramid-side').value
    pyramidBase = document.getElementById('pyramid-base').value
    pyramidHeight = document.getElementById('pyramid-height').value
    pyramidApotem = document.getElementById('pyramid-apotem').value
    pyramidArea = document.getElementById('pyramid-area').value
    pyramidVolume = document.getElementById('pyramid-volume').value
    pyramidRound = document.getElementById('pyramid-round').value

    if (!pyramidRound) {
        pyramidRound = 2
    } else if (pyramidRound > 12) {
        pyramidRound = 12
    }

    if (pyramidHeight && pyramidSide && pyramidApotem) {
        side = pyramidSide
        height = pyramidHeight
        apotem = pyramidApotem

        base = side ** 2
        area = base + side * apotem * 2
        volume = base * height / 3 
    } else if (pyramidHeight && pyramidApotem && pyramidBase) {
        base = pyramidBase
        height = pyramidHeight
        apotem = pyramidApotem

        side = base ** 0.5
        area = base + side * apotem * 2
        volume = base * height / 3 
    } else if (pyramidVolume && pyramidSide && pyramidApotem) {
        side = pyramidSide
        apotem = pyramidApotem
        volume = pyramidVolume

        base = side ** 2
        height = volume * 3 / base
        area = base + side * apotem * 2
    } else if (pyramidVolume && pyramidHeight && pyramidApotem) {
        height = pyramidHeight
        apotem = pyramidApotem
        volume = pyramidVolume

        base = volume * 3 / height
        side = base ** 0.5
        area = base + side * apotem * 2
    }

    pyramidSideResult.innerHTML = Math.round(side * (10 ** pyramidRound)) / (10 ** pyramidRound)
    pyramidBaseResult.innerHTML = Math.round(base * (10 ** pyramidRound)) / (10 ** pyramidRound)
    pyramidHeightResult.innerHTML = Math.round(height * (10 ** pyramidRound)) / (10 ** pyramidRound)
    pyramidApotemResult.innerHTML = Math.round(apotem * (10 ** pyramidRound)) / (10 ** pyramidRound)
    pyramidAreaResult.innerHTML = Math.round(area * (10 ** pyramidRound)) / (10 ** pyramidRound)
    pyramidVolumeResult.innerHTML = Math.round(volume * (10 ** pyramidRound)) / (10 ** pyramidRound)
}