let trigonomInputs = document.querySelectorAll('.trigonom-input'),
    trigonomA = document.getElementById('trigonom-a').value,
    trigonomB = document.getElementById('trigonom-b').value,
    trigonomC = document.getElementById('trigonom-c').value,
    trigonomAlfa = document.getElementById('trigonom-alfa').value,
    trigonomBeta = document.getElementById('trigonom-beta').value,
    trigonomRound = document.getElementById('trigonom-round').value,

    trigonomAResult = document.getElementById('trigonom-a-result'),
    trigonomBResult = document.getElementById('trigonom-b-result'),
    trigonomCResult = document.getElementById('trigonom-c-result'),
    trigonomAlfaResult = document.getElementById('trigonom-alfa-result'),
    trigonomBetaResult = document.getElementById('trigonom-beta-result'),
    
    rad = false;

trigonomInputs.forEach(trigonomInput => trigonomInput.oninput = () => {
    trigonom()
})

function trigonom() {
    let a = 0,
        b = 0,
        c = 0,
        alfa = 0,
        beta = 0;

    trigonomA = document.getElementById('trigonom-a').value
    trigonomB = document.getElementById('trigonom-b').value
    trigonomC = document.getElementById('trigonom-c').value
    trigonomAlfa = document.getElementById('trigonom-alfa').value
    trigonomBeta = document.getElementById('trigonom-beta').value
    trigonomRound = document.getElementById('trigonom-round').value

    if (!trigonomRound) {
        trigonomRound = 2
    } else if (trigonomRound > 12) {
        trigonomRound = 12
    }

    if (trigonomA) {
        if (trigonomB) {
            a = trigonomA
            b = trigonomB

            c = (a ** 2 + b ** 2) ** 0.5
        
            alfa = rtod(Math.asin(a / c))
            beta = rtod(Math.asin(b / c))
        } else if (trigonomC) {
            a = trigonomA
            c = trigonomC

            b = (c ** 2 - a ** 2) ** 0.5
        
            alfa = rtod(Math.asin(a / c))
            beta = rtod(Math.asin(b / c))
        } else if (trigonomAlfa) {
            a = trigonomA
            alfa = trigonomAlfa
            
            c = a / Math.sin(dtor(alfa))
            b = (c ** 2 - a ** 2) ** 0.5
        
            beta = rtod(Math.asin(b / c))
        } else if (trigonomBeta) {
            a = trigonomA
            beta = trigonomBeta
            
            c = a / Math.cos(dtor(beta))
            b = (c ** 2 - a ** 2) ** 0.5
        
            alfa = rtod(Math.asin(a / c))
        }
    } else if (trigonomB) {
        if (trigonomC) {
            b = trigonomB
            c = trigonomC

            a = (c ** 2 - b ** 2) ** 0.5
        
            alfa = rtod(Math.asin(a / c))
            beta = rtod(Math.asin(b / c))
        } else if (trigonomAlfa) {
            b = trigonomB
            alfa = trigonomAlfa

            c = b / Math.cos(dtor(alfa))
            a = (c ** 2 - b ** 2) ** 0.5
        
            beta = rtod(Math.asin(b / c))
        } else if (trigonomBeta) {
            b = trigonomB
            beta = trigonomBeta

            c = b / Math.sin(dtor(beta))
            a = (c ** 2 - b ** 2) ** 0.5
        
            alfa = rtod(Math.asin(a / c))
        }
    } else if (trigonomC) {
        if (trigonomAlfa) {
            c = trigonomC
            alfa = trigonomAlfa

            a = Math.sin(dtor(alfa)) * c
            b = (c ** 2 - a ** 2) ** 0.5
        
            beta = rtod(Math.asin(b / c))
        } else if (trigonomBeta) {
            c = trigonomC
            beta = trigonomBeta

            a = Math.cos(dtor(alfa)) * c
            b = (c ** 2 - a ** 2) ** 0.5
        
            alfa = rtod(Math.asin(a / c))
        }
    }

    trigonomAResult.innerHTML = Math.round(a * (10 ** trigonomRound)) / (10 ** trigonomRound)
    trigonomBResult.innerHTML = Math.round(b * (10 ** trigonomRound)) / (10 ** trigonomRound)
    trigonomCResult.innerHTML = Math.round(c * (10 ** trigonomRound)) / (10 ** trigonomRound)
    trigonomAlfaResult.innerHTML = Math.round(alfa * (10 ** trigonomRound)) / (10 ** trigonomRound)
    trigonomBetaResult.innerHTML = Math.round(beta * (10 ** trigonomRound)) / (10 ** trigonomRound)
}