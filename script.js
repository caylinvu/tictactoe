const gameboardContainer = document.getElementById("gameboard-container");
const gameboardSquares = document.querySelectorAll(".gameboard-square");

const gameboard = (() => {

    // let gameboardInput = ['X', 'X', 'X', 'O', 'O', 'O', 'Y', 'Y', 'Y'];

    let gameboardInput = [];

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    let winner;

    const checkWinner = () => {
        for (i = 0; i < winningConditions.length; i++) {

            const winCondition = winningConditions[i];
            let a = gameboardInput[winCondition[0]];
            let b = gameboardInput[winCondition[1]];
            let c = gameboardInput[winCondition[2]];

            if ((a == b && b == c) && a) {
                if (a == 'X') {
                    console.log('player 1 wins!!!');
                    winner = 1;
                } else {
                    console.log('player 2 wins!!!!!');
                    winner = 2;
                }
            }
        }
    }

    return {
        gameboardInput, checkWinner, winner
    };


})();

const Player = (symbol) => {

    const takeTurn = (e) => {
        let i = e.target.id;
        gameboard.gameboardInput[i] = symbol;
        displayController.displayGameboard(gameboard.gameboardInput);
    };

    return {
        takeTurn
    };


};

const displayController = (() => {

    const displayGameboard = (gameboardArray) => {
        for (i = 0; i < gameboardArray.length; i++) {
            gameboardSquares[i].textContent = gameboardArray[i];
        }
    };
    
    let turn = 1;
    const togglePlayer = (e) => {
        if (e.target.textContent) {
            return;
        }

        if (turn == 1) {
            player1.takeTurn(e);
            turn = 2;
        } else {
            player2.takeTurn(e);
            turn = 1;
        }

        gameboard.checkWinner();
    }

    return {
        displayGameboard, togglePlayer
    };


})();

const player1 = Player('X');
const player2 = Player('O');

// displayController.displayGameboard(gameboard.gameboardInput);
// let turn = 1;
// gameboardSquares.forEach((square) => {
//     square.addEventListener('click', (e) => {
//         if (turn == 1) {
//             player1.takeTurn(e);
//             turn = 2;
//         } else {
//             player2.takeTurn(e);
//             turn = 1;
//         }
//     });
// });

gameboardSquares.forEach((square) => {
    square.addEventListener('click', displayController.togglePlayer);
});

