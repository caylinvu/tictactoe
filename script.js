const gameboardContainer = document.getElementById("gameboard-container");
const gameboardSquares = document.querySelectorAll(".gameboard-square");

const gameboard = (() => {

    // let input = ['X', 'X', 'X', 'O', 'O', 'O', 'Y', 'Y', 'Y'];

    let input = [];

    const display = () => {
        for (i = 0; i < input.length; i++) {
            gameboardSquares[i].textContent = input[i];
        }
    };

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
            let a = input[winCondition[0]];
            let b = input[winCondition[1]];
            let c = input[winCondition[2]];

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
        input, display, checkWinner, winner
    };


})();

const Player = (symbol) => {

    const takeTurn = (e) => {
        let i = e.target.id;
        gameboard.input[i] = symbol;
        gameboard.display();
    };

    return {
        takeTurn
    };


};

const game = (() => {

    // const displayGameboard = (gameboardArray) => {
    //     for (i = 0; i < gameboardArray.length; i++) {
    //         gameboardSquares[i].textContent = gameboardArray[i];
    //     }
    // };
    
    let turn = 1;
    const play = (e) => {
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
        play
    };


})();

const player1 = Player('X');
const player2 = Player('O');

gameboardSquares.forEach((square) => {
    square.addEventListener('click', game.play);
});

