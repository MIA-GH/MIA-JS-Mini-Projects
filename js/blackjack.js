// this is programmed by musah ibrahim ali

document.querySelector("#hit-button").addEventListener('click', hitButtonFunction);

let blackJackGame = {
    'you': {'scoreSpan': '#user-results', 'div': '#user-box', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-results', 'div': '#dealer-box', 'score': 0},
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q', 'A'],
    'cardsMap': {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'K': 10,
        'J': 10,
        'Q': 10,
        'A': [1, 11]
    },
    'wins' : 0,
    'losses' : 0,
    'draws' : 0,
    'isStands' : false,
    'isTurnsOver' : false,
}

const CARDS = blackJackGame['cards'];
const YOU = blackJackGame['you']; // this selects the user box
const DEALER = blackJackGame['dealer']; // this selects teh dealer box
const hitSound = new Audio('../sounds/swish.m4a'); // this sound is played on clicking the hit button
const winSound = new Audio('../sounds/cash.mp3'); // this sound is played on winning he game
const lossSound = new Audio('../sounds/aww.mp3'); // this sound is played on loosing he game

// This function show the card to the user
function showCard(card, activePlayer) {
    if (activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img');
        cardImage.src = `../images/images/${card}.png`
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play().then();
    }
}

// The function for the hit button
function hitButtonFunction() {
    if (blackJackGame['isStands'] === false){
        let userCard = randomCard();
        showCard(userCard, YOU);
        updateScore(userCard, YOU);
        showScore(YOU);
    }
}

// select the stand button
document.querySelector('#stand-button').addEventListener('click', standButtonFunction);

// this function delays the play sequence of the dealer
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

// stand button function
async function standButtonFunction() {
    blackJackGame['isStands'] = true;
    while (DEALER['score'] < 16 && blackJackGame['isStands'] === true){
        let dealerCard;
        dealerCard = randomCard();
        showCard(dealerCard, DEALER);
        updateScore(dealerCard, DEALER);
        showScore(DEALER);
        await(sleep(1000));
    }

    let winner = computeWinner();
    blackJackGame['isTurnsOver'] = true;
    showResults(winner);
}

document.querySelector('#deal-button').addEventListener('click', dealButtonFunction);

// this function handles the deal button
function dealButtonFunction() {
    if (blackJackGame['isTurnsOver'] === true){
        blackJackGame['isStands'] = false;
        removeCards(YOU); // removes the cards from the user box
        removeCards(DEALER); // removes the cards from the dealer box

        // set the score internally to zero
        YOU['score'] = 0;
        DEALER['score'] = 0;

        // reset the user score
        document.querySelector(YOU['scoreSpan']).textContent = 0;
        document.querySelector(YOU['scoreSpan']).style.color = 'white';

        // reset the dealer score
        document.querySelector(DEALER['scoreSpan']).textContent = 0;
        document.querySelector(DEALER['scoreSpan']).style.color = 'white';

        // reset the title of the game
        document.querySelector('#black-jack-results').textContent = "Let's Play";
        document.querySelector('#black-jack-results').style.color = 'black';

        blackJackGame['isTurnsOver'] = false;
    }
}

// this function removes the images
function removeCards(activePlayer) {
    let activePlayerImages;
    activePlayerImages = document.querySelector(activePlayer['div']).querySelectorAll('img');
    for (let i = 0; i < activePlayerImages.length; i++) {
        activePlayerImages[i].remove();
    }
}

// this function returns a random card
function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return CARDS[randomIndex];
}

// this function updates the score
function updateScore(card, activePlayer) {
    if (card === "A") {
        if (activePlayer['score'] += blackJackGame['cardsMap'][card][1] <= 21) {
            activePlayer['score'] += blackJackGame['cardsMap'][card][1];
        } else {
            activePlayer['score'] += blackJackGame['cardsMap'][card][0];
        }
    } else {
        activePlayer['score'] += blackJackGame['cardsMap'][card];
    }
}

// this function displays the score
function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = "BUST!!";
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else if (activePlayer['score'] <= 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score']
    }
}

// this function determines the winner
function computeWinner() {
    let winner;
    if (YOU['score'] <= 21) {
        if (YOU['score'] > DEALER['score'] || DEALER['score'] > 21) {
            blackJackGame['wins']++;
            winner = YOU;
        } else if (YOU['score'] < DEALER['score']) {
            blackJackGame['losses']++;
            winner = DEALER;
        } else if (YOU['score'] === DEALER['score']) {
            blackJackGame['draws']++;
        }
    } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        blackJackGame['losses']++;
        winner = DEALER;
    } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        blackJackGame['draws']++;
    }
    return winner;
}

// this function show the results either win or loose
function showResults(winner) {
    let message;
    let messageColor;

    if (blackJackGame['isTurnsOver'] === true){
        if (winner === YOU){
            document.querySelector('#wins').textContent = blackJackGame['wins'];
            message = 'You Won!!';
            messageColor = 'green';
            winSound.play().then();
        } else if(winner === DEALER){
            document.querySelector('#losses').textContent = blackJackGame['losses'];
            message = 'You Lost';
            messageColor = 'red';
            lossSound.play().then();
        } else{
            document.querySelector('#draws').textContent = blackJackGame['draws'];
            message = 'You Drew !'
            messageColor = 'black'
        }

        document.querySelector('#black-jack-results').textContent = message;
        document.querySelector('#black-jack-results').style.color = messageColor;
    }


}

