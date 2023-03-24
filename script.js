const gameboardContainer = document.getElementById("gameboard-container");
const gameboardSquares = document.querySelectorAll(".gameboard-square");

const gameboard = (() => {

    // let gameboardInput = ['X', 'X', 'X', 'O', 'O', 'O', 'Y', 'Y', 'Y'];

    let gameboardInput = [];

    return {
        gameboardInput
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

