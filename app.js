document.addEventListener("DOMContentLoaded", function () {

    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    button.appendChild(btnText);
    document.body.appendChild(button);

    let sqContainer = document.createElement('div');
    sqContainer.classList.add('container')
    document.body.appendChild(sqContainer)

    let num = 0

    button.addEventListener("click", function () {
        let square = document.createElement('div')
        square.classList.add('square')
        sqContainer.appendChild(square)
        document.body.appendChild(sqContainer)
        num++
        square.setAttribute('id', num)

        let idDisplay = document.createElement('span')
        idDisplay.classList.add('id-display')
        idDisplay.innerText = num


    })











})