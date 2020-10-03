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

      figures = document.querySelectorAll('.figure'),

      specialNums = document.querySelectorAll('.special-number-div'),
      
      pi = Math.PI
      
      rad = false,
      degSelect = document.getElementById('deg'),
      radSelect = document.getElementById('rad');

// Make the links on the navbar clickable
navLink1.onclick = () => {
    operationType2.classList.add('none')
    operationType3.classList.add('none')

    operationType1.classList.toggle('none')

    navLink2.classList.remove('clicked')
    navLink3.classList.remove('clicked')

    navLink1.classList.toggle('clicked')
}

navLink2.onclick = () => {
    operationType1.classList.add('none')
    operationType3.classList.add('none')

    operationType2.classList.toggle('none')

    navLink1.classList.remove('clicked')
    navLink3.classList.remove('clicked')

    navLink2.classList.toggle('clicked')
}

navLink3.onclick = () => {
    operationType1.classList.add('none')
    operationType2.classList.add('none')

    operationType3.classList.remove('none')

    navLink1.classList.remove('clicked')
    navLink2.classList.remove('clicked')

    navLink3.classList.toggle('clicked')
}

// Make the 2D and 3D links clickable
d2.onclick = () => {
    subOperationType1.classList.toggle('none')

    subOperationType2.classList.add('none')

    d3.classList.remove('clicked')

    d2.classList.toggle('clicked')
}

d3.onclick = () => {
    subOperationType2.classList.toggle('none')
    
    subOperationType1.classList.add('none')

    d2.classList.remove('clicked')

    d3.classList.toggle('clicked')
}

// Make figures clickable
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

// Degrees and Radians selector
degSelect.onclick = () => {
    radSelect.classList.remove('clicked');

    degSelect.classList.add('clicked');

    rad = false;

    trigonom()
}

radSelect.onclick = () => {
    degSelect.classList.remove('clicked');

    radSelect.classList.add('clicked');

    rad = true;

    trigonom()
}

// Convert degrees to radians
function dtor (d) {
    if (rad) {
        return d
    } else {
        return d * (pi / 180)
    }
}

// Convert radians to degrees
function rtod (r) {
    if (rad) {
        return r
    } else {
        return r * (180 / pi)
    }
}

// Copy numbers like pi and e
specialNums.forEach(specialNum => {
    specialNum.onclick = () => {
        if (specialNum.id == 'pi') {
            const copyTextPi = document.querySelector('#pi-value');

            copyTextPi.style.display = 'block';

            copyTextPi.select();
            copyTextPi.setSelectionRange(0, 99999);

            document.execCommand('copy');

            copyTextPi.style.display = 'none';
        } else if (specialNum.id == 'euler') {
            const copyTextE = document.querySelector('#e-value');

            copyTextE.style.display = 'block';

            copyTextE.select();
            copyTextE.setSelectionRange(0, 99999);

            document.execCommand('copy');
            
            copyTextE.style.display = 'none';
        }
    }
})

