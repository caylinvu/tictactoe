const gameboardContainer = document.getElementById("gameboard-container");
const gameboardSquares = document.querySelectorAll(".gameboard-square");

const gameboard = (() => {

    let gameboardInput = ['X', 'X', 'X', 'O', 'O', 'O', 'Y', 'Y', 'Y'];

    return {
        gameboardInput
    };


})();

const Player = (name, symbol) => {




    return {

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

displayController.displayGameboard(gameboard.gameboardInput);