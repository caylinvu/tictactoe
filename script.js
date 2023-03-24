const gameboardContainer = document.getElementById("gameboard-container");
const gameboardSquares = document.querySelectorAll(".gameboard-square");
const winnerTxt = document.querySelector(".winner-txt");

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

    const checkWinner = () => {
        for (i = 0; i < winningConditions.length; i++) {

            const winCondition = winningConditions[i];
            let a = input[winCondition[0]];
            let b = input[winCondition[1]];
            let c = input[winCondition[2]];

            if ((a == b && b == c) && a) {
                if (a == 'X') {
                    return 'Player 1 wins!!!';
                } else {
                    return 'Player 2 wins!!!';
                }
            }
        }
    }

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
        } else {
            player2.takeTurn(e);
            turn = 1;
        }

        winnerTxt.textContent = gameboard.checkWinner();
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

// TO DO!!!!!

// RE-ORGANIZE CODE

// ADD LOGIC TO DISABLE INPUT AFTER SOMEONE WINS

// ADD LOGIC TO CHECK FOR A TIE

// ADD BUTTON TO LET PLAYERS ENTER NAMES

// ADD BUTTON TO ALLOW YOU TO START/RESTART GAME

// ADD UI TO CONGRADULATE WINNER

// MAKE UI PRETTY

// ADD AI