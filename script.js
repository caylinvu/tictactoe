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
        console.log(e.target.id);
        // e.target.textContent = symbol;
        let i = e.target.id;
        gameboard.gameboardInput[i] = symbol;
        displayController.displayGameboard(gameboard.gameboardInput);
    }

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

    return {
        displayGameboard
    };


})();

const player1 = Player('X');
const player2 = Player('O');

// displayController.displayGameboard(gameboard.gameboardInput);

gameboardSquares.forEach((square) => {
    square.addEventListener('click', player2.takeTurn);
});