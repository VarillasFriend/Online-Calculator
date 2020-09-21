let cylinderInputs = document.querySelectorAll('.cylinder-input'),
    cylinderSide = document.getElementById('cylinder-side').value,
    cylinderBase = document.getElementById('cylinder-base').value,
    cylinderHeight = document.getElementById('cylinder-height').value,
    cylinderApotem = document.getElementById('cylinder-apotem').value,
    cylinderArea = document.getElementById('cylinder-area').value,
    cylinderVolume = document.getElementById('cylinder-volume').value,
    cylinderRound = document.getElementById('cylinder-round').value,

    cylinderSideResult = document.getElementById('cylinder-side-result'),
    cylinderBaseResult = document.getElementById('cylinder-base-result'),
    cylinderHeightResult = document.getElementById('cylinder-height-result'),
    cylinderApotemResult = document.getElementById('cylinder-apotem-result'),
    cylinderAreaResult = document.getElementById('cylinder-area-result'),
    cylinderVolumeResult = document.getElementById('cylinder-volume-result');

cylinderInputs.forEach(cylinderInput => cylinderInput.oninput = () => {
    cylinder()
})

function cylinder() {
    let side = 0,
        base = 0,
        height = 0,
        apotem = 0,
        area = 0,
        volume = 0;

    cylinderSide = document.getElementById('cylinder-side').value
    cylinderBase = document.getElementById('cylinder-base').value
    cylinderHeight = document.getElementById('cylinder-height').value
    cylinderApotem = document.getElementById('cylinder-apotem').value
    cylinderArea = document.getElementById('cylinder-area').value
    cylinderVolume = document.getElementById('cylinder-volume').value
    cylinderRound = document.getElementById('cylinder-round').value

    if (!cylinderRound) {
        cylinderRound = 2
    } else if (cylinderRound > 12) {
        cylinderRound = 12
    }

    if (cylinderHeight && cylinderSide && cylinderApotem) {
        side = cylinderSide
        height = cylinderHeight
        apotem = cylinderApotem

        base = side ** 2
        area = base + side * apotem * 2
        volume = base * height / 3 
    } else if (cylinderHeight && cylinderApotem && cylinderBase) {
        base = cylinderBase
        height = cylinderHeight
        apotem = cylinderApotem

        side = base ** 0.5
        area = base + side * apotem * 2
        volume = base * height / 3 
    } else if (cylinderVolume && cylinderSide && cylinderApotem) {
        side = cylinderSide
        apotem = cylinderApotem
        volume = cylinderVolume

        base = side ** 2
        height = volume * 3 / base
        area = base + side * apotem * 2
    } else if (cylinderVolume && cylinderHeight && cylinderApotem) {
        height = cylinderHeight
        apotem = cylinderApotem
        volume = cylinderVolume

        base = volume * 3 / height
        side = base ** 0.5
        area = base + side * apotem * 2
    }

    cylinderSideResult.innerHTML = Math.round(side * (10 ** cylinderRound)) / (10 ** cylinderRound)
    cylinderBaseResult.innerHTML = Math.round(base * (10 ** cylinderRound)) / (10 ** cylinderRound)
    cylinderHeightResult.innerHTML = Math.round(height * (10 ** cylinderRound)) / (10 ** cylinderRound)
    cylinderApotemResult.innerHTML = Math.round(apotem * (10 ** cylinderRound)) / (10 ** cylinderRound)
    cylinderAreaResult.innerHTML = Math.round(area * (10 ** cylinderRound)) / (10 ** cylinderRound)
    cylinderVolumeResult.innerHTML = Math.round(volume * (10 ** cylinderRound)) / (10 ** cylinderRound)
}