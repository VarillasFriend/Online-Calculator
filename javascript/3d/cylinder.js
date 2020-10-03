let cylinderInputs = document.querySelectorAll('.cylinder-input'),
    cylinderRadius = document.getElementById('cylinder-radius').value,
    cylinderDiameter = document.getElementById('cylinder-diameter').value,
    cylinderCircumsference = document.getElementById('cylinder-circumsference').value,
    cylinderBase = document.getElementById('cylinder-base').value,
    cylinderHeight = document.getElementById('cylinder-height').value,
    cylinderArea = document.getElementById('cylinder-area').value,
    cylinderVolume = document.getElementById('cylinder-volume').value,
    cylinderRound = document.getElementById('cylinder-round').value,

    cylinderRadiusResult = document.getElementById('cylinder-radius-result'),
    cylinderDiameterResult = document.getElementById('cylinder-diameter-result'),
    cylinderBaseResult = document.getElementById('cylinder-base-result'),
    cylinderCircumsferenceResult = document.getElementById('cylinder-circumsference-result'),
    cylinderHeightResult = document.getElementById('cylinder-height-result'),
    cylinderAreaResult = document.getElementById('cylinder-area-result'),
    cylinderVolumeResult = document.getElementById('cylinder-volume-result');

cylinderInputs.forEach(cylinderInput => cylinderInput.oninput = () => {
    cylinder()
})

function cylinder() {
    let radius = 0,
        base = 0,
        height = 0,
        diameter = 0,
        circumsference = 0,
        area = 0,
        volume = 0;

    cylinderRadius = document.getElementById('cylinder-radius').value
    cylinderDiameter = document.getElementById('cylinder-diameter').value
    cylinderBase = document.getElementById('cylinder-base').value
    cylinderCircumsference = document.getElementById('cylinder-circumsference').value
    cylinderHeight = document.getElementById('cylinder-height').value
    cylinderArea = document.getElementById('cylinder-area').value
    cylinderVolume = document.getElementById('cylinder-volume').value
    cylinderRound = document.getElementById('cylinder-round').value

    if (!cylinderRound) {
        cylinderRound = 2
    } else if (cylinderRound > 12) {
        cylinderRound = 12
    }

    if (cylinderHeight && cylinderRadius) {
        radius = cylinderRadius
        height = cylinderHeight

        diameter = radius * 2
        circumsference = radius * 2 * pi
        base = radius ** 2 * pi
        area = 2 * pi * radius * height + 2 * pi * (radius ** 2)
        volume = base * height
    } else if (cylinderHeight && cylinderDiameter) {
        diameter = cylinderDiameter
        height = cylinderHeight

        radius = diameter / 2
        circumsference = radius * 2 * pi
        base = radius ** 2 * pi
        area = 2 * pi * radius * height + 2 * pi * (radius ** 2)
        volume = base * height
    } else if (cylinderHeight && cylinderCircumsference) {
        circumsference = cylinderCircumsference
        height = cylinderHeight

        radius = circumsference / 2 / pi
        diameter = radius * 2
        base = radius ** 2 * pi
        area = 2 * pi * radius * height + 2 * pi * (radius ** 2)
        volume = base * height
    } else if (cylinderHeight && cylinderBase) {
        base = cylinderBase
        height = cylinderHeight

        radius = (base / pi) ** 0.5
        diameter = radius * 2
        circumsference = radius * 2 * pi
        area = 2 * pi * radius * height + 2 * pi * (radius ** 2)
        volume = base * height
    } else if (cylinderVolume && cylinderRadius) {
        radius = cylinderRadius
        volume = cylinderVolume

        diameter = radius * 2
        base = radius ** 2 * pi
        height = volume / base
        circumsference = radius * 2 * pi
        area = 2 * pi * radius * height + 2 * pi * (radius ** 2)
    } else if (cylinderVolume && cylinderDiameter) {
        diameter = cylinderDiameter
        volume = cylinderVolume

        radius = diameter / 2
        circumsference = radius * 2 * pi
        base = radius ** 2 * pi
        height = volume / base
        area = 2 * pi * radius * height + 2 * pi * (radius ** 2)
    } else if (cylinderVolume && cylinderCircumsference) {
        circumsference = cylinderCircumsference
        volume = cylinderVolume

        radius = circumsference / 2 / pi
        diameter = radius * 2
        base = radius ** 2 * pi
        height = volume / base
        area = 2 * pi * radius * height + 2 * pi * (radius ** 2)
    } else if (cylinderVolume && cylinderBase) {
        base = cylinderBase
        volume = cylinderVolume

        radius = (base / pi) ** 0.5
        diameter = radius * 2
        circumsference = radius * 2 * pi
        height = volume / base
        area = 2 * pi * radius * height + 2 * pi * (radius ** 2)
    }

    cylinderRadiusResult.innerHTML = Math.round(radius * (10 ** cylinderRound)) / (10 ** cylinderRound)
    cylinderDiameterResult.innerHTML = Math.round(diameter * (10 ** cylinderRound)) / (10 ** cylinderRound)
    cylinderBaseResult.innerHTML = Math.round(base * (10 ** cylinderRound)) / (10 ** cylinderRound)
    cylinderCircumsferenceResult.innerHTML = Math.round(circumsference * (10 ** cylinderRound)) / (10 ** cylinderRound)
    cylinderHeightResult.innerHTML = Math.round(height * (10 ** cylinderRound)) / (10 ** cylinderRound)
    cylinderAreaResult.innerHTML = Math.round(area * (10 ** cylinderRound)) / (10 ** cylinderRound)
    cylinderVolumeResult.innerHTML = Math.round(volume * (10 ** cylinderRound)) / (10 ** cylinderRound)
}