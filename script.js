const gameboardContainer = document.getElementById("gameboard-container");
const gameboardSquares = document.querySelectorAll(".gameboard-square");

const gameboard = (() => {

    // let gameboardInput = ['X', 'X', 'X', 'O', 'O', 'O', 'Y', 'Y', 'Y'];

    let gameboardInput = [];

    return {
        gameboardInput
    };


})();

const Player = (name, symbol) => {

    const takeTurn = (e) => {
        console.log(e.target.id);
        e.target.textContent = 'X';

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

const player1 = Player('Caylin', 'X');

displayController.displayGameboard(gameboard.gameboardInput);

gameboardSquares.forEach((square) => {
    square.addEventListener('click', player1.takeTurn);
});