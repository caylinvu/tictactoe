const gameboardContainer = document.getElementById("gameboard-container");
const gameboardSquares = document.querySelectorAll(".gameboard-square");
const turnTxt = document.querySelector(".turn-txt");
const winnerTxt = document.querySelector(".winner-txt");
const restartBtn = document.querySelector(".restart-btn");

const gameboard = (() => {

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
    ];

    const checkWinner = () => {
        for (i = 0; i < winningConditions.length; i++) {

            const winCondition = winningConditions[i];
            let a = input[winCondition[0]];
            let b = input[winCondition[1]];
            let c = input[winCondition[2]];

            if ((a == b && b == c) && a) {
                turnTxt.textContent = 'Congrats!';
                restartBtn.textContent = 'New Game';
                if (a == 'X') {
                    return 'Player 1 wins!!!';
                } else {
                    return 'Player 2 wins!!!';
                }
            }
        }

        if (input.length == 9 && !input.includes(undefined)) {
            turnTxt.textContent = 'Bummer!';
            restartBtn.textContent = 'New Game';
            return "It's a tie!!!";
        }
    };

    return {
        input, display, checkWinner
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

    let turn = 1;

    const play = (e) => {
        if (e.target.textContent || winnerTxt.textContent) {
            return;
        }

        if (turn == 1) {
            player1.takeTurn(e);
            turn = 2;
            turnTxt.textContent = "It's player 2's turn!";
        } else {
            player2.takeTurn(e);
            turn = 1;
            turnTxt.textContent = "It's player 1's turn!";
        }

        winnerTxt.textContent = gameboard.checkWinner();
    }

    const restart = () => {
        gameboard.input.length = 0;
        gameboardSquares.forEach((square) => {
            square.textContent = '';
        });

        turnTxt.textContent = "It's player 1's turn! (X goes first)";
        winnerTxt.textContent = '';
        restartBtn.textContent = 'Restart Game';
        turn = 1;
    };

    return {
        play, restart
    };


})();

const player1 = Player('X');
const player2 = Player('O');

gameboardSquares.forEach((square) => {
    square.addEventListener('click', game.play);
});

restartBtn.addEventListener('click', game.restart);

// ADD AI???