// HTML Variables

let firstName = document.getElementById('name1');
let lastName = document.getElementById('name2');
let randomNickname = document.getElementById('button1');
let allNicknames = document.getElementById('button2');
let containerEl = document.getElementById('container');

// Global Variable
let myNickname = ["the T-Rex", "the Robot", "the Legendary", "The Crusher", 'the Jester', 'the Mad Lad Himself', 'the Weirdo'];

// Click Event
randomNickname.addEventListener('click', randomNickGen)

function randomNickGen() {
    containerEl.innerHTML = firstName.value + ' ' + myNickname[randomInt(0, 6)] + ' ' + lastName.value; 
}

function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}
 
allNicknames.addEventListener('click', displayNicknames)

function displayNicknames() {
    let divStr = "";
    for (let i = 0; i < myNickname.length; i++) {
        divStr += `<div>${firstName.value + ' ' + myNickname[i] + ' ' + lastName.value}</div>`;
    }
    containerEl.innerHTML = divStr;
}