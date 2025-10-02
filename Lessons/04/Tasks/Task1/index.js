const crossButton = document.querySelector('.side-panel__cross');
const zeroButton = document.querySelector('.side-panel__zero');

const cells = document.querySelectorAll('.tic-tac-toe__item');

let selectedFigure = null;

const board = Array(9).fill(null);

crossButton.addEventListener('click', () => {
    selectedFigure = 'cross';
});

zeroButton.addEventListener('click', () => {
    selectedFigure = 'zero';
});

cells.forEach((cell, idx) => {
    cell.addEventListener('click', () => {
        if (!board[idx] && selectedFigure) {
            cell.innerHTML = `<img src="./icons/${selectedFigure === 'cross' ? 'tac.svg' : 'tic.svg'}" alt="">`;
            board[idx] = selectedFigure;
            selectedFigure = null;
            checkWinner();
        }
    });
});

function checkWinner() {
    const winCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (const combo of winCombinations) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            alert(`${board[a] === 'cross' ? 'Крестик' : 'Нолик'} выиграл!`);
            return board[a];
        }
    }
    return null;
}