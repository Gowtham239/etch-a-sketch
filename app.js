document.addEventListener("DOMContentLoaded", function() {
    sketchBoard(16)
});

function sketchBoard(size) {
    let board = document.querySelector(".sketch-board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numOfDivs = size * size;
    for( let i=0; i<numOfDivs; i++) {
        let div = document.createElement("div");
        div.style.backgroundColor = "yellow";
        board.insertAdjacentElement("beforeend", div);  
    }
}