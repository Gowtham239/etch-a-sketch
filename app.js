let color = "black";
let click = false;
let isErase = false;

document.addEventListener("DOMContentLoaded", function() {
    sketchBoard(16);

    document.querySelector('body').addEventListener("click", (e) => {
        if(e.target.tagName != "BUTTON") {
            click = !click;
        }
    })

    const inputButton = document.getElementById("select");
    inputButton.addEventListener("click", () => {
        let size = getSize();
        sketchBoard(size);
    });

    const eraseBtn = document.getElementById("erase");
    eraseBtn.addEventListener("click", () => {
        isErase = !isErase;
        eraseBtn.textContent = isErase ? "Draw" : "Erase";
    })
});

function sketchBoard(size) {
    let board = document.querySelector(".sketch-board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numOfDivs = size * size;
    for( let i=0; i<numOfDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        board.insertAdjacentElement("beforeend", div);  
    }
}

function getSize() {
    let input = prompt("enter a number between 1 to 100");
    let message = document.querySelector(".message");
    if(input == "") {
        message.innerHTML = "Please provide a number";
    } else if (input < 0 || input > 100) {
        message.innerHTML = "Provide a number between 1 and 100";
    } else {
        message.innerHTML = "Let's play";
        return input;
    }
}

function colorDiv() {
    if(click) {
        if(isErase) {
            this.style.backgroundColor = "white";
        } else {
            if(color == "random") {
                this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            } else {
                this.style.backgroundColor = "black";
            }
        }
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}

const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", () => {
    let divs = document.querySelectorAll(".sketch-board div");
    divs.forEach((div) => div.style.backgroundColor = "white");
})