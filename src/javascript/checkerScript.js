const blackCheckers = document.getElementsByClassName("blackPiece");
const whiteCheckers = document.getElementsByClassName("whitePiece");
// console.log(blackCheckers.dataset.blackPiece);
for (i = 0; i < blackCheckers.length; i++) {
    const dataBlackPiece = document.getElementById("blackPiece" + i).dataset.blackpiece;
    const elementBlackPiece = document.getElementById("blackPiece" + i);
    document.getElementById("blackPiece" + i).onclick = function moveBlackChecker () {
        const dataTile = elementBlackPiece.parentElement.dataset.tile;
        const stepOne = parseInt(dataTile) + 9;
        const stepTwo = parseInt(dataTile) + 7;
        const stepThree =  parseInt(dataTile) - 9;
        const stepFour =  parseInt(dataTile) - 7;
        if (!document.getElementById("tile" + stepOne).firstChild) {
            document.getElementById("tile" + stepOne).style.backgroundColor = "yellow";
        } 
        if(!document.getElementById("tile" + stepTwo).firstChild) {
            document.getElementById("tile" + stepTwo).style.backgroundColor = "yellow";
        } 
        if (!document.getElementById("tile" + stepThree).firstChild) {
            document.getElementById("tile" + stepThree).style.backgroundColor = "yellow";
        } 
        if (!document.getElementById("tile" + stepFour).firstChild) {
            document.getElementById("tile" + stepFour).style.backgroundColor = "yellow";
        }
    }
}

for (a = 0; a < whiteCheckers.length; a++) {
    const dataWhitePiece = document.getElementById("whitePiece" + a).dataset.whitepiece;
    const elementWhitePiece = document.getElementById("whitePiece" + a);
    document.getElementById("whitePiece" + a).onclick = function moveWhiteChecker () {
        const dataTile = elementWhitePiece.parentElement.dataset.tile;
        const stepOne = parseInt(dataTile) + 9;
        const stepTwo = parseInt(dataTile) + 7;
        const stepThree =  parseInt(dataTile) - 9;
        const stepFour =  parseInt(dataTile) - 7;
        document.getElementById("tile" + stepOne).style.backgroundColor = "yellow";
        document.getElementById("tile" + stepTwo).style.backgroundColor = "yellow";
        document.getElementById("tile" + stepThree).style.backgroundColor = "yellow";
        document.getElementById("tile" + stepFour).style.backgroundColor = "yellow";
    }
}

