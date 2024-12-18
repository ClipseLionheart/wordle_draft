function start(){
    let word = generateWord();
}

function generateWord(){
    let word_options = ["plant", "grade", "heart", "north", "point", "ready", "score", "royal", "phone", "movie", "match", "money", "large", "empty", "night", "extra", "cloud", "group", "earth", "words", "human", "power", "super", "today", "while"]
    let num = randInt(0,24);
    let word = word_options[num];
    console.log(`word=${word}, num=${num}`);
    return word;
}

const height = 6; // Number of rows
const width = 5; // Number of columns

let row=8; // current guess (attampt #)
let col=8 //current letter for that attempt 

let gameover = false;
let word = "squib";

window.onload = function(){
    intialize();
}

function intialize(){
    // create the game borad
    for (let r=0; r < height; r++){
        for(let c=0; c < width; c++){
            let tile = document.createElement("span");
            tile.id= r.toString()+ "-"+ c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);
        }
    }


    document.addEventListener("keyup", (e) =>{
        processInput(e);
    })
}

function processInput(e){
    if (gameover) return;

    //alert(e.code);
    if ("KeyA" <= e.code && e.code <= "KeyZ") {
        if (col < width) {
            let currTile = document.getElementById(row.toString() + '-' + col.toString());
            if (currTile.innerText == "") {
                currTile.innerText = e.code[3];
                col += 1;
            }
        }
    } else if (e.code == "Backspace") {
        if (0 < col && col <= width) {
            col -=1;
        }
        let currTile = document.getElementById(row.toString() + '-' + col.toString());
        currTile.innerText = "";
    }
    else if (e.code == "Enter") {
        update();
    }

    if (!gameOver && row == height) {
        gameOver = true;
        document.getElementById("answer").innerText = word;
    }
}

/* This function links to the keyboard, so when a key is clicked,  
it should go to this function. Like, when someone clicks 'q' it should move here, which
will have the function to fill in the next available box with 'q' */

addEventListenerdocument.getElementById("key-q").addEventListener("click", nextBox);

function nextBox() {
    document.getElementById('1-1').textContent = `Q`;
}

