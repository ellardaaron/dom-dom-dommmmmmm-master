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

        var colors = ["#85e6c5", "#51b9c6", "#6087c6", "#4d59ae", "#401a8e"];
        square.addEventListener("click", function (e) {
            e.target.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        })

        square.addEventListener("dblclick", function (e) {
            if (square.id % 2 == 0) {
                if (document.contains(square.nextSibling)) {
                    square.nextSibling.remove()
                } else {
                    alert('There is no square to delete')
                }
            } else {
                if (document.contains(square.previousSibling)) {
                    square.previousSibling.remove()
                } else {
                    alert('There is no square to delete')
                }
            }
        })

    })

})