let sphereInputs = document.querySelectorAll('.sphere-input'),
    sphereRadius = document.getElementById('sphere-radius').value,
    sphereDiameter = document.getElementById('sphere-diameter').value,
    sphereCircumsference = document.getElementById('sphere-circumsference').value,
    sphereArea = document.getElementById('sphere-area').value,
    sphereVolume = document.getElementById('sphere-volume').value,
    sphereRound = document.getElementById('sphere-round').value,

    sphereRadiusResult = document.getElementById('sphere-radius-result'),
    sphereDiameterResult = document.getElementById('sphere-diameter-result'),
    sphereCircumsferenceResult = document.getElementById('sphere-circumsference-result'),
    sphereAreaResult = document.getElementById('sphere-area-result'),
    sphereVolumeResult = document.getElementById('sphere-volume-result');

sphereInputs.forEach(sphereInput => sphereInput.oninput = () => {
    sphere()
})

function sphere() {
    let radius = 0,
        diameter = 0,
        circumsference = 0,
        area = 0,
        volume = 0;

    sphereRadius = document.getElementById('sphere-radius').value
    sphereDiameter = document.getElementById('sphere-diameter').value
    sphereCircumsference = document.getElementById('sphere-circumsference').value
    sphereArea = document.getElementById('sphere-area').value
    sphereVolume = document.getElementById('sphere-volume').value
    sphereRound = document.getElementById('sphere-round').value

    if (!sphereRound) {
        sphereRound = 2
    } else if (sphereRound > 12) {
        sphereRound = 12
    }

    if (sphereRadius) {
        radius = sphereRadius

        diameter = radius * 2
        circumsference = 2 * pi * radius
        area = 4 * (radius ** 2) * pi
        volume = (4/3) * pi * (radius ** 3)
    } else if (sphereDiameter) {
        diameter = sphereDiameter

        radius = diameter / 2
        circumsference = 2 * pi * radius
        area = 4 * (radius ** 2) * pi
        volume = (4/3) * pi * (radius ** 3)
    } else if (sphereCircumsference) {
        circumsference = sphereCircumsference

        radius = circumsference / pi / 2
        diameter = 2 * radius
        area = 4 * (radius ** 2) * pi
        volume = (4/3) * pi * (radius ** 3)
    } else if (sphereArea) {
        area = sphereArea

        radius = (area / pi / 4) ** 0.5
        diameter = 2 * radius
        circumsference = 2 * pi * radius
        volume = (4/3) * pi * (radius ** 3)
    } else if (sphereVolume) {
        volume = sphereVolume

        radius = (volume / (4/3) / pi) ** (1/3)
        diameter = 2 * radius
        circumsference = 2 * pi * radius
        area = 4 * (radius ** 2) * pi
    }

    sphereRadiusResult.innerHTML = Math.round(radius * (10 ** sphereRound)) / (10 ** sphereRound)
    sphereDiameterResult.innerHTML = Math.round(diameter * (10 ** sphereRound)) / (10 ** sphereRound)
    sphereCircumsferenceResult.innerHTML = Math.round(circumsference * (10 ** sphereRound)) / (10 ** sphereRound)
    sphereAreaResult.innerHTML = Math.round(area * (10 ** sphereRound)) / (10 ** sphereRound)
    sphereVolumeResult.innerHTML = Math.round(volume * (10 ** sphereRound)) / (10 ** sphereRound)
}