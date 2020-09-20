let parallelepipedInputs = document.querySelectorAll('.parallelepiped-input'),
    parallelepipedBase = document.getElementById('parallelepiped-base').value,
    parallelepipedHeight = document.getElementById('parallelepiped-height').value,
    parallelepipedDepth = document.getElementById('parallelepiped-depth').value,
    parallelepipedDiagonal = document.getElementById('parallelepiped-diagonal').value,
    parallelepipedArea = document.getElementById('parallelepiped-area').value,
    parallelepipedVolume = document.getElementById('parallelepiped-volume').value,
    parallelepipedRound = document.getElementById('parallelepiped-round').value,

    parallelepipedBaseResult = document.getElementById('parallelepiped-base-result'),
    parallelepipedHeightResult = document.getElementById('parallelepiped-height-result'),
    parallelepipedDepthResult = document.getElementById('parallelepiped-depth-result'),
    parallelepipedDiagonalResult = document.getElementById('parallelepiped-diagonal-result'),
    parallelepipedAreaResult = document.getElementById('parallelepiped-area-result'),
    parallelepipedVolumeResult = document.getElementById('parallelepiped-volume-result');

parallelepipedInputs.forEach(parallelepipedInput => parallelepipedInput.oninput = () => {
    parallelepiped()
})

function parallelepiped() {
    let diagonal = 0,
        area = 0,
        volume = 0;

    parallelepipedBase = document.getElementById('parallelepiped-base').value
    parallelepipedHeight = document.getElementById('parallelepiped-height').value
    parallelepipedDepth = document.getElementById('parallelepiped-depth').value
    parallelepipedDiagonal = document.getElementById('parallelepiped-diagonal').value
    parallelepipedArea = document.getElementById('parallelepiped-area').value
    parallelepipedVolume = document.getElementById('parallelepiped-volume').value
    parallelepipedRound = document.getElementById('parallelepiped-round').value

    if (!parallelepipedRound) {
        parallelepipedRound = 2
    } else if (parallelepipedRound > 12) {
        parallelepipedRound = 12
    }

    const dimensions = [parallelepipedBase, parallelepipedHeight, parallelepipedDepth]

    let base = false,
        depth = false,
        height = false;

    dimensions.forEach(value => {
        if (value && !base) {
            base = value
        } else if (value && !height) {
            height = value
        } else if (value && !depth) {
            depth = value
        }
    })

    if (depth) {
        diagonal = (base ** 2 + height ** 2 + depth ** 2) ** 0.5
        area = base * height * 2 + depth * height * 2 + base * depth * 2
        volume = base * height * depth
    } else if (height && parallelepipedDiagonal) {
        depth = (parallelepipedDiagonal ** 2 - (base ** 2 + height ** 2)) ** 0.5
        diagonal = parallelepipedDiagonal
        area = base * height * 2 + depth * height * 2 + base * depth * 2
        volume = base * height * depth
    } else if (height && parallelepipedArea) {
        depth = ((parallelepipedArea / 2) - (base * height)) / (height * 1 + base * 1)
        diagonal = (base ** 2 + height ** 2 + depth ** 2) ** 0.5
        area = parallelepipedArea
        volume = base * height * depth
    } else if (height && parallelepipedVolume) {
        depth = parallelepipedVolume / base / height
        diagonal = (base ** 2 + height ** 2 + depth ** 2) ** 0.5
        area = base * height * 2 + depth * height * 2 + base * depth * 2
        volume = parallelepipedVolume
    }

    parallelepipedBaseResult.innerHTML = Math.round(base * (10 ** parallelepipedRound)) / (10 ** parallelepipedRound)
    parallelepipedHeightResult.innerHTML = Math.round(height * (10 ** parallelepipedRound)) / (10 ** parallelepipedRound)
    parallelepipedDepthResult.innerHTML = Math.round(depth * (10 ** parallelepipedRound)) / (10 ** parallelepipedRound)
    parallelepipedDiagonalResult.innerHTML = Math.round(diagonal * (10 ** parallelepipedRound)) / (10 ** parallelepipedRound)
    parallelepipedAreaResult.innerHTML = Math.round(area * (10 ** parallelepipedRound)) / (10 ** parallelepipedRound)
    parallelepipedVolumeResult.innerHTML = Math.round(volume * (10 ** parallelepipedRound)) / (10 ** parallelepipedRound)
}