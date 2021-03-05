const blackCheckers = document.getElementsByClassName("blackPiece");
const whiteCheckers = document.getElementsByClassName("whitePiece");
var turns = 0;

// Adds a function to each white checker div
for (a = 0; a < whiteCheckers.length; a++) {
    const elementWhitePiece = document.getElementById("whitePiece" + a);
    document.getElementById("whitePiece" + a).onclick = function showMoves () {
        // Gets the tile a checker is standing on
        const dataTile = elementWhitePiece.parentElement.dataset.tile;
        // Variables for calculating the steps a checker can take
        const stepOne = parseInt(dataTile) + 9;
        const stepTwo = parseInt(dataTile) + 7;
        const stepThree =  parseInt(dataTile) - 9;
        const stepFour =  parseInt(dataTile) - 7;
        // If statements to check if a div already had a checker standing on it and gives
        // tile a yellow color if it can move to that tile
        if (!document.getElementById("tile" + stepOne).firstChild) {
            previousBgColor = document.getElementById("tile" + stepOne).style.backgroundColor;
            document.getElementById("tile" + stepOne).style.backgroundColor = "yellow";
            // Adds a function to the tile if there is not a checker on the tile
            document.getElementById("tile" + stepOne).onclick = function moveChecker () {
                document.getElementById("tile" + stepOne).appendChild(document.getElementById("tile" + dataTile).firstChild);
                document.getElementById("tile" + stepOne).style.backgroundColor = previousBgColor;
                // Increments the turns so that you can calculate who's turn it is
                turns++;
            };
        } 
        // If statements to check if a div already had a checker standing on it and gives
        // tile a yellow color if it can move to that tile
        if (!document.getElementById("tile" + stepTwo).firstChild) {
            previousBgColor = document.getElementById("tile" + stepTwo).style.backgroundColor;
            document.getElementById("tile" + stepTwo).style.backgroundColor = "yellow";
            // Adds a function to the tile if there is not a checker on the tile
            document.getElementById("tile" + stepTwo).onclick = function moveChecker () {
                document.getElementById("tile" + stepTwo).appendChild(document.getElementById("tile" + dataTile).firstChild);
                document.getElementById("tile" + stepTwo).style.backgroundColor = previousBgColor;
                // Increments the turns so that you can calculate who's turn it is
                turns++;
            };
        } 
        // If statements to check if a div already had a checker standing on it and gives
        // tile a yellow color if it can move to that tile
        if (!document.getElementById("tile" + stepThree).firstChild) {
            previousBgColor = document.getElementById("tile" + stepThree).style.backgroundColor;
            document.getElementById("tile" + stepThree).style.backgroundColor = "yellow";
            // Adds a function to the tile if there is not a checker on the tile
            document.getElementById("tile" + stepThree).onclick = function moveChecker () {
                document.getElementById("tile" + stepThree).appendChild(document.getElementById("tile" + dataTile).lastChild);
                document.getElementById("tile" + stepThree).style.backgroundColor = previousBgColor;
                // Increments the turns so that you can calculate who's turn it is
                turns++;
            };
        } 
        // If statements to check if a div already had a checker standing on it and gives
        // tile a yellow color if it can move to that tile
        if (!document.getElementById("tile" + stepFour).firstChild) {
            // Adds a function to the tile if there is not a checker on the tile
            previousBgColor = document.getElementById("tile" + stepFour).style.backgroundColor;
            document.getElementById("tile" + stepFour).style.backgroundColor = "yellow";
            document.getElementById("tile" + stepFour).onclick = function moveChecker () {
                document.getElementById("tile" + stepFour).appendChild(document.getElementById("tile" + dataTile).firstChild);
                document.getElementById("tile" + stepFour).style.backgroundColor = previousBgColor;
                // Increments the turns so that you can calculate who's turn it is
                turns++;
            };
        }
    }
}

// Adds a function to each black checker div
for (i = 0; i < blackCheckers.length; i++) {
    const elementBlackPiece = document.getElementById("blackPiece" + i);
    document.getElementById("blackPiece" + i).onclick = function moveBlackChecker () {
        // Gets the tile a checker is standing on
        const dataTile = elementBlackPiece.parentElement.dataset.tile;
        // Variables for calculating the steps a checker can take
        const stepOne = parseInt(dataTile) + 9;
        const stepTwo = parseInt(dataTile) + 7;
        const stepThree =  parseInt(dataTile) - 9;
        const stepFour =  parseInt(dataTile) - 7;
        // If statements to check if a div already had a checker standing on it and gives
        // tile a yellow color if it can move to that tile
        if (!document.getElementById("tile" + stepOne).firstChild) {
            previousBgColor = document.getElementById("tile" + stepOne).style.backgroundColor;
            document.getElementById("tile" + stepOne).style.backgroundColor = "yellow";
            // Adds a function to the tile if there is not a checker on the tile
            document.getElementById("tile" + stepOne).onclick = function moveChecker () {
                document.getElementById("tile" + stepOne).appendChild(document.getElementById("tile" + dataTile).firstChild);
                document.getElementById("tile" + stepOne).style.backgroundColor = previousBgColor;
                // Increments the turns so that you can calculate who's turn it is
                turns++;
            };
        } 
        // If statements to check if a div already had a checker standing on it and gives
        // tile a yellow color if it can move to that tile
        if (!document.getElementById("tile" + stepTwo).firstChild) {
            previousBgColor = document.getElementById("tile" + stepTwo).style.backgroundColor;
            document.getElementById("tile" + stepTwo).style.backgroundColor = "yellow";
            // Adds a function to the tile if there is not a checker on the tile
            document.getElementById("tile" + stepTwo).onclick = function moveChecker () {
                document.getElementById("tile" + stepTwo).appendChild(document.getElementById("tile" + dataTile).firstChild);
                document.getElementById("tile" + stepTwo).style.backgroundColor = previousBgColor;
                // Increments the turns so that you can calculate who's turn it is
                turns++;
            };
        } 
        // If statements to check if a div already had a checker standing on it and gives
        // tile a yellow color if it can move to that tile
        if (!document.getElementById("tile" + stepThree).firstChild) {
            previousBgColor = document.getElementById("tile" + stepThree).style.backgroundColor;
            document.getElementById("tile" + stepThree).style.backgroundColor = "yellow";
            // Adds a function to the tile if there is not a checker on the tile
            document.getElementById("tile" + stepThree).onclick = function moveChecker () {
                document.getElementById("tile" + stepThree).appendChild(document.getElementById("tile" + dataTile).lastChild);
                document.getElementById("tile" + stepThree).style.backgroundColor = previousBgColor;
                // Increments the turns so that you can calculate who's turn it is
                turns++;
            };
        } 
        // If statements to check if a div already had a checker standing on it and gives
        // tile a yellow color if it can move to that tile
        if (!document.getElementById("tile" + stepFour).firstChild) {
            // Adds a function to the tile if there is not a checker on the tile
            previousBgColor = document.getElementById("tile" + stepFour).style.backgroundColor;
            document.getElementById("tile" + stepFour).style.backgroundColor = "yellow";
            document.getElementById("tile" + stepFour).onclick = function moveChecker () {
                document.getElementById("tile" + stepFour).appendChild(document.getElementById("tile" + dataTile).firstChild);
                document.getElementById("tile" + stepFour).style.backgroundColor = previousBgColor;
                // Increments the turns so that you can calculate who's turn it is
                turns++;
            };
        }
    }
}


