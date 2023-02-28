// p3

document.querySelector(".control-buttons span").onclick = function () {
    let yourName = prompt("Whats your Name?");

    if (yourName == null || yourName == "") {
        document.querySelector(".name span").innerHTML = "Unknown";

    }  else {
        document.querySelector(".name span").innerHTML = yourName;
    }

    document.querySelector(".control-buttons").remove();
};

// p4

// Effect duration
let Duration = 1300;

// select blocks container
let blocksContainer = document.querySelector(".memory-game");

// Create array from game blocks
let blocks = Array.from(blocksContainer.children);

let orderRange = Array.from(Array(blocks.length).keys());

console.log(orderRange);
shuffle(orderRange);
console.log(orderRange);
// p5

// Add Order Css Property to Game Blocks
blocks.forEach((block, index) => {

    // add css order property
    block.style.order = orderRange[index];

    // add click event 
    block.addEventListener(`click`, function () {

    // trigger the flip block function
    flipblock(block);
    

    });
});

// p7 

// flip block function 
function flipblock(selectedblock) {

    // add class is-flipped
    selectedblock.classList.add(`is-flipped`);

    // collect all flipped cards
    allFlippedBlocks = blocks.filter(flipblock => flipblock.classList.contains(`is-flipped`));

    // if theres two selected blocks
    if (allFlippedBlocks.length == 2) {

     
    // stop clicking function
    stopClicking();

    // check matched block
        checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
    }
}

// stop clicked function
function stopClicking() {

    // add class no clicking on block
    blocksContainer.classList.add("no-clicking");

    setTimeout(() => {

    // remove class no clicking after the duration
    blocksContainer.classList.remove("no-clicking");

    }, Duration);
}

// p9

    // check matched blocks
    function checkMatchedBlocks(firstBlock, secondBlock) {

        let triesElement = document.querySelector(".tries span");


        if (firstBlock.dataset.pec === secondBlock.dataset.pec) {

            firstBlock.classList.remove(`is-flipped`);
            secondBlock.classList.remove(`is-flipped`);

            firstBlock.classList.add(`has-match`);
            secondBlock.classList.add(`has-match`);
        }

        else {

            triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;

            setTimeout(() => {

            firstBlock.classList.remove(`is-flipped`);
            secondBlock.classList.remove(`is-flipped`);
            }, Duration);
        }

    };

// p6

// Shuffle Function 
function shuffle(array) {

    // setting vars 
    let current = array.length,
        temp,
        random;

    while (current > 0) {

        //get random number 
        random = Math.floor(Math.random() * current);

    // Decrease length By one 
    current--;

    // save current element in stash
    temp = array[current];

    // current element = random element
    array[current] = array[random];

    // random element = get element from stash
    array[random] = temp;

   
    }
    return array;
};
