const navLink1 = document.getElementById('nav-link1'),
      navLink2 = document.getElementById('nav-link2'),
      navLink3 = document.getElementById('nav-link3'),

      operationType1 = document.getElementById('operation-type1'),
      operationType2 = document.getElementById('operation-type2'),
      operationType3 = document.getElementById('operation-type3'),

      d2 = document.getElementById('2d'),
      d3 = document.getElementById('3d'),
      subOperationType1 = document.getElementById('sub-operation-type1'),
      subOperationType2 = document.getElementById('sub-operation-type2'),

      figures = document.querySelectorAll('.figure');

navLink1.onclick = () => {
    operationType2.classList.add('none')
    operationType3.classList.add('none')

    operationType1.classList.toggle('none')
}

navLink2.onclick = () => {
    operationType1.classList.add('none')
    operationType3.classList.add('none')

    operationType2.classList.toggle('none')
}

navLink3.onclick = () => {
    operationType1.classList.add('none')
    operationType2.classList.add('none')

    operationType3.classList.remove('none')
}

d2.onclick = () => {
    subOperationType1.classList.toggle('none')

    subOperationType2.classList.add('none')
}

d3.onclick = () => {
    subOperationType2.classList.toggle('none')
    
    subOperationType1.classList.add('none')
}

figures.forEach(figure => {
    figure.onclick = () => {
        clickedFigure = document.querySelector('.clicked-figure')
        if (clickedFigure) {
            clickedFigure.children[1].classList.add('none')
            clickedFigure.classList.remove('clicked-figure')
        }

        figure.children[1].classList.toggle('none')
        figure.classList.toggle('clicked-figure')
    }
})