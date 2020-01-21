//Memory Game: T Larkin

//Make a list of all memory card elements and store this inside a constant named 'cards'
//const cards = document.querySelectorAll('.memory-card');
let cards = document.querySelectorAll('.memory-card');
//console.log(cards.length);

let numUniqueCards = 18;
let boardSize = 10;
let matchedCards = 0;

let hasFlippedCard = false;
//once two cards have been clicked we need to 'lock' the board to prevent further clicking
let lockBoard = false;
let firstCard, secondCard;
let cardValue;

//Array with each of the card names, used to randomly select cards
var cardNames = ["DLeckie", "PMeredith", "HJeromin", "IBotka", "KSinkevicius", 
                "AGlavica", "JPeska", "RLodge", "GVanWezel", "ABeranek", 
                "HGibbs", "RBrodie", "CHarvey", "RBelin", "PJFrench", "TMCrawford",
                "JGotts", "FRGibbs"];

var cardNamesDisplay = [];

var randN = 0;
var currentRandS;
var removeCards = [];
while(randN < numUniqueCards - boardSize){
    var randSelection = Math.floor((Math.random() * 13) + 0); //randomly select a number between 0 and 13 (inclusive)
    if (removeCards.includes(randSelection)){
        // do nothing
    }else{
        removeCards.push(randSelection); //push this number to the array 'removeCards'
        randN++;
    }
}
//console.log(removeCards);
var removeCardsArray = [cardNames[removeCards[0]], cardNames[removeCards[1]], cardNames[removeCards[2]], cardNames[removeCards[3]],
                        cardNames[removeCards[4]], cardNames[removeCards[5]], cardNames[removeCards[6]], cardNames[removeCards[7]],
]
//console.log(removeCardsArray);


for (var j = 0; j<numUniqueCards; j++){
    if (removeCards.includes(j)){
        //do nothing
    }else{
        cardNamesDisplay.push(cardNames[j]);
    }
}

//console.log(cardNamesDisplay);

//MODAL VARIABLES
//Taken from this webpage https://sabe.io/tutorials/how-to-create-modal-popup-box
var modal = document.querySelector(".modal");

// Get the modal
var modals = document.getElementsByClassName('modal');
var imgBs = document.getElementsByClassName('imgB');

// Author popup modal
var modalAuthor = document.getElementsByClassName('modalAuthor');
var closeButtonsAuthor = document.getElementsByClassName('close-buttonAuthor');

//var trigger = document.querySelector(".trigger");
var closeButtons = document.getElementsByClassName('close-button');
var closeButton = document.querySelector(".close-button");
//console.log(closeButtons);
//console.log(closeButtons[0]);

cards.forEach(card => card.addEventListener('click', flipCard));

//Now loop through this list and attach an 'Event Listener' to each card. We are going to
//listen for a 'click' event and when this fires, we will run the 'card flip' function
//Begin function flipCard
function flipCard(){
    //if the lockBoard variable is true, do not execute the rest of the code 
    if (lockBoard) return;
    //to prevent the same card from being clicked twice and locking out the game
    if(this === firstCard) return;

    this.classList.add('flip');

    if(!hasFlippedCard){
        //first click
        hasFlippedCard = true;
        firstCard = this;
        return;
    } 
    // second click
    hasFlippedCard = false;
    secondCard = this;
    checkForMatch();

}//end function flipCard

function checkForMatch(){
    //do the cards match
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    if (isMatch == true){
        
        //console.log('We Have a Match');
        //if the cards that are matched are the Australia cards, toggle the 'Australia' modal
        //if (firstCard.dataset.framework == 'australia'){
            cardValue = firstCard.dataset.framework;
            if (cardValue == 'DLeckie'){setTimeout(toggleModalA, 1500);}
            else if (cardValue == 'PMeredith'){setTimeout(toggleModalV, 1500);}
            else if (cardValue == 'HJeromin'){setTimeout(toggleModalAn, 1500);}
            else if (cardValue == 'IBotka'){setTimeout(toggleModalE, 1500);}
            else if (cardValue == 'KSinkevicius'){setTimeout(toggleModalB, 1500);}
            else if (cardValue == 'AGlavica'){setTimeout(toggleModalR, 1500);}
            else if (cardValue == 'JPeska'){setTimeout(toggleModalH, 1500);}
            else if (cardValue == 'RLodge'){setTimeout(toggleModalAp, 1500);}
            else if (cardValue == 'GVanWezel'){setTimeout(toggleModalAu, 1500);}
            else if (cardValue == 'ABeranek'){setTimeout(toggleModalD, 1500);}
            else if (cardValue == 'HGibbs'){setTimeout(toggleModalJ, 1500);}
            else if (cardValue == 'RBrodie'){setTimeout(toggleModalJ2, 1500);}
            else if (cardValue == 'CHarvey'){setTimeout(toggleModalJ3, 1500);}
            else if (cardValue == 'RBelin'){setTimeout(toggleModalJ4, 1500);}
            else if (cardValue == 'PJFrench'){setTimeout(toggleModalJ5, 1500);}
            else if (cardValue == 'TMCrawford'){setTimeout(toggleModalJ6, 1500);}
            else if (cardValue == 'JGotts'){setTimeout(toggleModalJ7, 1500);}
            else if (cardValue == 'FRGibbs'){setTimeout(toggleModalJ8, 1500);}
            else{
                console.log('Congratulations, you are done!')
            }

        //}
        //console.log(modals);
    }

    //ternary operator
    isMatch ? disableCards() : unflipCards();
}//end function checkForMatch

//console.log(imgBs);
    //If the cards matched are the Australia Cards, toggle 'Australia' Modal

function toggleModalTom(){
    modalAuthor[0].classList.toggle("show-modal");
    console.log("something clicked here");
}

function toggleModalA(){modals[0].classList.toggle("show-modal");}
function toggleImgA(){imgBs[0].style.display = "block";}

function toggleModalV(){modals[1].classList.toggle("show-modal");}
function toggleImgV(){imgBs[1].style.display = "block";}

function toggleModalAn(){modals[2].classList.toggle("show-modal");}
function toggleImgAn(){imgBs[2].style.display = "block";}

function toggleModalE(){modals[3].classList.toggle("show-modal");}
function toggleImgE(){imgBs[3].style.display = "block";}

function toggleModalB(){modals[4].classList.toggle("show-modal");}
function toggleImgB(){imgBs[4].style.display = "block";}

function toggleModalR(){modals[5].classList.toggle("show-modal");}
function toggleImgR(){imgBs[5].style.display = "block";}

function toggleModalH(){modals[6].classList.toggle("show-modal");}
function toggleImgH(){imgBs[6].style.display = "block";}

function toggleModalAp(){modals[7].classList.toggle("show-modal");}
function toggleImgAp() {imgBs[7].style.display = "block";}

function toggleModalAu(){modals[8].classList.toggle("show-modal");}
function toggleImgAu(){imgBs[8].style.display = "block";}

function toggleModalD(){modals[9].classList.toggle("show-modal");}
function toggleImgD(){imgBs[9].style.display = "block";}

function toggleModalJ(){modals[10].classList.toggle("show-modal");}
function toggleImgJ(){imgBs[10].style.display = "block";}

function toggleModalJ2(){modals[11].classList.toggle("show-modal");}
function toggleImgJ2(){imgBs[11].style.display = "block";}

function toggleModalJ3(){modals[12].classList.toggle("show-modal");}
function toggleImgJ3(){imgBs[12].style.display = "block";}

function toggleModalJ4(){modals[13].classList.toggle("show-modal");}
function toggleImgJ4(){imgBs[13].style.display = "block";}

function toggleModalJ5(){modals[14].classList.toggle("show-modal");}
function toggleImgJ5(){imgBs[14].style.display = "block";}

function toggleModalJ6(){modals[15].classList.toggle("show-modal");}
function toggleImgJ6(){imgBs[15].style.display = "block";}

function toggleModalJ7(){modals[16].classList.toggle("show-modal");}
function toggleImgJ7(){imgBs[16].style.display = "block";}

function toggleModalJ8(){modals[17].classList.toggle("show-modal");}
function toggleImgJ8(){imgBs[17].style.display = "block";}


function windowOnClick(event) {
    if (event.target === modal && cardValue == 'DLeckie') {toggleModalA();}
    if (event.target === modal && cardValue == 'PMeredith') {toggleModalV();}
    if (event.target === modal && cardValue == 'HJeromin') {toggleModalAn();}
    if (event.target === modal && cardValue == 'IBotka') {toggleModalE();}
    if (event.target === modal && cardValue == 'KSinkevicius') {toggleModalB();}
    if (event.target === modal && cardValue == 'AGlavica') {toggleModalR();}
    if (event.target === modal && cardValue == 'JPeska') {toggleModalH();}
    if (event.target === modal && cardValue == 'RLodge') {toggleModalAp();}
    if (event.target === modal && cardValue == 'GVanWezel') {toggleModalAu();}
    if (event.target === modal && cardValue == 'ABeranek') {toggleModalD();}
    if (event.target === modal && cardValue == 'HGibbs') {toggleModalJ();}
    if (event.target === modal && cardValue == 'RBrodie') {toggleModalJ2();}
    if (event.target === modal && cardValue == 'CHarvey') {toggleModalJ3();}
    if (event.target === modal && cardValue == 'RBelin') {toggleModalJ4();}
    if (event.target === modal && cardValue == 'PJFrench') {toggleModalJ5();}
    if (event.target === modal && cardValue == 'TMCrawford') {toggleModalJ6();}
    if (event.target === modal && cardValue == 'JGotts') {toggleModalJ7();}
    if (event.target === modal && cardValue == 'FRGibbs') {toggleModalJ8();}
}

function disableCards(){
    //it's a match
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    matchedCards = matchedCards += 2;
    if (matchedCards == 20){
        document.getElementById('buttonQuiz').style.display = 'block';
    }
        console.log(matchedCards);
    resetBoard();
} //end function disableCards

function unflipCards(){
    lockBoard = true;
    //not a match
    //the numeral value in this setTimeout sets the amount of time for the 
    //card to remain visible on screen before being flipped over again
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500);   
} //end function unflipCards

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
} //end function resetBoard

(function shuffle(){
    console.log("first invoked function");
    //   removeCardsArray

    // Card 1 to remove from Game
    var card1 = document.getElementsByClassName(removeCardsArray[0]);
    card1[0].style.display = 'none';
    card1[1].style.display = 'none';
    
    // Card 2 to remove from Game
    var card2 = document.getElementsByClassName(removeCardsArray[1]);
    card2[0].style.display = 'none';
    card2[1].style.display = 'none';
    
    // Card 3 to remove from Game
    var card3 = document.getElementsByClassName(removeCardsArray[2]);
    card3[0].style.display = 'none';
    card3[1].style.display = 'none';
    
    // Card 4 to remove from Game
    var card4 = document.getElementsByClassName(removeCardsArray[3]);
    card4[0].style.display = 'none';
    card4[1].style.display = 'none';

    // Card 5 to remove from Game
    var card5 = document.getElementsByClassName(removeCardsArray[4]);
    card5[0].style.display = 'none';
    card5[1].style.display = 'none';

    // Card 6 to remove from Game
    var card6 = document.getElementsByClassName(removeCardsArray[5]);
    card6[0].style.display = 'none';
    card6[1].style.display = 'none';

    // Card 7 to remove from Game
    var card7 = document.getElementsByClassName(removeCardsArray[6]);
    card7[0].style.display = 'none';
    card7[1].style.display = 'none';

    // Card 8 to remove from Game
    var card8 = document.getElementsByClassName(removeCardsArray[7]);
    card8[0].style.display = 'none';
    card8[1].style.display = 'none';
    
    var i;
    //document.getElementById("wohoo").style.display = "none";
    for (i=0; i<cards.length; i++){


        let randomPos = Math.floor(Math.random()*12);
        cards[i].style.order = randomPos;
        ////cards[i].style.display = 'none';
    }
    
    cards.forEach(card => {
        //let randomPos = Math.floor(Math.random()*12);
        //card.style.order = randomPos;
    });
})();
//these extra parenthesis at the end make this function an immediately 
//invoked function expression

function off(){
    document.getElementById("loadOverlay").style.display = "none";
    document.getElementById("navBottom").style.display = "flex";
    
}


//MODAL LISTENERS
//TAKEN FROM this webpage https://sabe.io/tutorials/how-to-create-modal-popup-box
//trigger.addEventListener("click", toggleModal);
closeButtonsAuthor[0].addEventListener("click", toggleModalTom); //Close Button A

closeButtons[0].addEventListener("click", toggleModalA); //Close Button A
closeButtons[0].addEventListener("click", toggleImgA); //Img A to appear

closeButtons[1].addEventListener("click", toggleModalV); //Close Button V
closeButtons[1].addEventListener("click", toggleImgV); //Img V to appear

closeButtons[2].addEventListener("click", toggleModalAn); //Close Button An
closeButtons[2].addEventListener("click", toggleImgAn); //Image An to appear

closeButtons[3].addEventListener("click", toggleModalE); //Close Button E
closeButtons[3].addEventListener("click", toggleImgE); //Img E to appear

closeButtons[4].addEventListener("click", toggleModalB); //Close Button B
closeButtons[4].addEventListener("click", toggleImgB); //Img B to appear

closeButtons[5].addEventListener("click", toggleModalR); //Close Button R
closeButtons[5].addEventListener("click", toggleImgR); //Img R to appear

closeButtons[6].addEventListener("click", toggleModalH); //Close Button H
closeButtons[6].addEventListener("click", toggleImgH); //Img H to appear

closeButtons[7].addEventListener("click", toggleModalAp); //Close Button Ap
closeButtons[7].addEventListener("click", toggleImgAp); //Img Ap to appear

closeButtons[8].addEventListener("click", toggleModalAu); //Close Button Au
closeButtons[8].addEventListener("click", toggleImgAu); //Img R to appear Au

closeButtons[9].addEventListener("click", toggleModalD); //Close Button D
closeButtons[9].addEventListener("click", toggleImgD); //Img D to appear

closeButtons[10].addEventListener("click", toggleModalJ); //Close Button D
closeButtons[10].addEventListener("click", toggleImgJ); //Img D to appear

closeButtons[11].addEventListener("click", toggleModalJ2); //Close Button D
closeButtons[11].addEventListener("click", toggleImgJ2); //Img D to appear

closeButtons[12].addEventListener("click", toggleModalJ3); //Close Button D
closeButtons[12].addEventListener("click", toggleImgJ3); //Img D to appear

closeButtons[13].addEventListener("click", toggleModalJ4); //Close Button D
closeButtons[13].addEventListener("click", toggleImgJ4); //Img D to appear

closeButtons[14].addEventListener("click", toggleModalJ5); //Close Button D
closeButtons[14].addEventListener("click", toggleImgJ5); //Img D to appear

closeButtons[15].addEventListener("click", toggleModalJ6); //Close Button D
closeButtons[15].addEventListener("click", toggleImgJ6); //Img D to appear

closeButtons[16].addEventListener("click", toggleModalJ7); //Close Button D
closeButtons[16].addEventListener("click", toggleImgJ7); //Img D to appear

closeButtons[17].addEventListener("click", toggleModalJ8); //Close Button D
closeButtons[17].addEventListener("click", toggleImgJ8); //Img D to appear

window.addEventListener("click", windowOnClick);

function loadHome(){
    location.reload();
}
