let randomNumber= parseInt(Math.random()*100 + 1 )

const submit= document.querySelector('#subt')
const userInput= document.querySelector('#guessField')
const guessSlot= document.querySelector('.guesses')
const remaining= document.querySelector('.lastResult')
const lowOrHi= document.querySelector('.lowOrHi')
const startOver= document.querySelector('.resultParas')

const p= document.createElement('p')
let prevGuess=[];
let numGuess=1;

let PlayGame= true ;
if(PlayGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=  parseInt(userInput.value)
        validateGuess(guess)
    })
}

// validateGuess() method will be used for validation actually the values is between 1 to 100 or it is value or not
function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    }else if(guess<1){
        alert('please enter a number more than 1')
    }else if(guess>100){
        alert('please enter number upto 100')
    }else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber} `)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

// checkGuess() method will check that value is equal random number or not ? if equal then display win ....or(hi & low)
function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage('you guessed in right')
        endGame
    }else if(guess < randomNumber){
        displayMessage('number is too low')
    }else if(guess > randomNumber){
        displayMessage('number is too high')
    }
}

// displayGuess will clean the value , will update the array, will update the remaining attemt too 
function displayGuess(guess){
    userInput.value= ''
    guessSlot.innerHTML+=`${guess} `
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
}

// displayMessage will display the message
function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

// to end the game and start a new game


function endGame(){
    userInput.value= ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    PlayGame=false
    newGame();
}

function newGame(){
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random()*100 + 1 )
        prevGuess=[]
        numGuess=1
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        PlayGame=true
    })
}
