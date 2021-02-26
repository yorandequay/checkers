const blackCheckers = document.getElementsByClassName("blackPiece");
const whiteCheckers = document.getElementsByClassName("whitePiece");
// console.log(blackCheckers.dataset.blackPiece);
for (i = 0; i < blackCheckers.length; i++) {
    const dataBlackPiece = document.getElementById("blackPiece" + i).dataset.blackpiece;
    const elementBlackPiece = document.getElementById("blackPiece" + i);
    document.getElementById("blackPiece" + i).onclick = function moveBlackChecker () {
        console.log("Black checker: ");
        console.log(dataBlackPiece);
        console.log("Tile: ");
        console.log(elementBlackPiece.parentElement.dataset.tile);
    }
}

for (a = 0; a < whiteCheckers.length; a++) {
    const dataWhitePiece = document.getElementById("whitePiece" + a).dataset.whitepiece;
    const elementWhitePiece = document.getElementById("whitePiece" + a);
    document.getElementById("whitePiece" + a).onclick = function moveBlackChecker () {
        console.log("White checker: ");
        console.log(dataWhitePiece);
        console.log("Tile: ");
        console.log(elementWhitePiece.parentElement.dataset.tile);
    }
}

