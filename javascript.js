const container = document.querySelector('.container');

// create 4 rows as containers, within which there are 4 squares
// then add to main container

let rowCount = 16;

for (let i = 0; i < rowCount; i++) {
    addRow(container);
}

function addRow(parentContainer, columnCount=16) {
    const newRow = document.createElement('div');
    newRow.classList.add('row');

    for (let i = 0; i < columnCount; i++) {
        addSquare(newRow);
    }

    parentContainer.appendChild(newRow);
}

function addSquare(rowNode) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');

    rowNode.appendChild(newSquare);
}

// adding event listeners to square divs
// events: when mouse hovers and when mouse leaves

const squares = document.querySelectorAll('.square');

addSquareEventHandlers(squares);

function addSquareEventHandlers(squares) {squares.forEach(square => {
    square.addEventListener('mouseover', handleMouseoverEvent);
    square.addEventListener('mouseleave', handleMouseleaveEvent);
})};

function handleMouseoverEvent(e) {
    this.classList.add('hover');
}

function handleMouseleaveEvent(e) {
    this.classList.remove('hover');
}

// event listener to button
// when clicked, ask user for grid number
// then change the sketch pad to match the grid number

const button = document.querySelector('button');

button.addEventListener('click', handleButtonClickEvent);

function handleButtonClickEvent(e) {
    const newCount = askUserForNewCount();

    removeAllChildren(container);

    for (let i = 0; i < newCount; i++) {
        addRow(container, newCount);
    }

    const newSquares = document.querySelectorAll('.square');
    addSquareEventHandlers(newSquares);
}

function askUserForNewCount() {
    const newCount = prompt('Type next grid number: (0-100)');

    if (newCount >= 0 && newCount <= 100) {
        return newCount;
    }

    alert('Grid number must be a number between 0-100!');
    return askUserForNewCount();
}

function removeAllChildren(parentNode) {

    while (parentNode.lastChild) {
        parentNode.removeChild(parentNode.lastChild);
    }
}