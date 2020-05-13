// rock paper scissors game function
function rpsGame(yourChoice) {
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randomIntGenerator());
    let results = decideWinner(humanChoice, botChoice);
    let message = finalMessage(results);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randomIntGenerator() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}


function decideWinner(yourChoice, computerChoice) {
    const rpsDataBase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };
    const yourScore = rpsDataBase[yourChoice][computerChoice];
    const computerScore = rpsDataBase[computerChoice][yourChoice];
    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message': 'You lost!', 'color': 'red'};
    } else if (yourScore === 0.5) {
        return {'message': 'You tied!', 'color': 'yellow'};
    } else {
        return {'message': 'You Won!', 'color': 'green'};
    }
}

// displaying the end results to the user
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    let imagesDataBase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    };

    // remove the images from the div
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    let imageSourceHuman = imagesDataBase[humanImageChoice];
    let imageSourceBot = imagesDataBase[botImageChoice];
    let text = finalMessage['message'];
    let textColor = finalMessage['color'];
    humanDiv.innerHTML = "<img src='"+imageSourceHuman+"' height='150px' width='150px' alt='image1' style='box-shadow: 0 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h2 style='font-size: 60px; color: "+ textColor+"; text-align: center'>" + text+ "</h2>"
    console.log(text);
    botDiv.innerHTML = "<img src='"+imageSourceBot+"' height='150px' width='150px' alt='image' style='box-shadow: 0 10px 50px rgba(243, 38, 24, 1);'>"
    document.getElementById('rps-flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('rps-flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('rps-flex-box-rps-div').appendChild(botDiv);
}


let allButtons = document.getElementsByTagName('button');

// copy the attribute of all the buttons
let copyAllButtons = [];
for(let i = 0; i<allButtons.length; i++){
    copyAllButtons.push(allButtons[i].classList[0]);
}

function redButton() {
    for (let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[0]);
        allButtons[i].classList.add('newRed');
    }
}

function yellowButton() {
    for (let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[0]);
        allButtons[i].classList.add('newYellow');
    }
}

function greenButton() {
    for (let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[0]);
        allButtons[i].classList.add('newGreen');
    }
}

function blueButton() {
    for (let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[0]);
        allButtons[i].classList.add('newBlue');
    }
}

function resetButtons() {
    for (let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[0]);
        allButtons[i].classList.add(copyAllButtons[i]);
    }
}

function randomButton() {
    let choices = ['redButton','blueButton','yellowButton','greenButton'];
    for (let i = 0; i < allButtons.length; i++){
        let randomNumber = Math.floor(Math.random() * 5);
        allButtons[i].classList.remove(allButtons[i].classList[0]);
        allButtons[i].classList.add(choices[randomNumber]);
    }
}

// change button color function
function changeButtonColor(buttonOption) {
    if (buttonOption.value === 'red'){
        redButton();
    } else if (buttonOption.value === 'green'){
        greenButton();
    } else if (buttonOption.value === 'yellow'){
        yellowButton();
    } else if (buttonOption.value === 'blue'){
        blueButton();
    } else if (buttonOption.value === 'random'){
        randomButton();
    }
    else if (buttonOption.value === 'reset'){
        resetButtons();
    }
}