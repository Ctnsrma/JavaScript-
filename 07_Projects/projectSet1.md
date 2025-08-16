# Project related to DOM

## Project Link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## project 1

```javascript

console.log("Chetan")
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function (button){
    button.addEventListener('click', function (e){
        if(e.target.id == 'grey'){
            console.log(e.target)
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
    })

})


```

## project 2

```javascript

console.log("Chetan")

const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseFloat(document.querySelector('#height').value)
    const weight = parseFloat(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if(height < 0 || isNaN(height)){
        result.innerHTML = "Please enter a valid height."
    }else if(weight < 0 || isNaN(weight)){
        result.innerHTML = "Please enter a valid weight"
    }else {
        const bmi = (weight / ((height * height)/10000)).toFixed(2);
        let category = '';
        if (bmi < 18.6) category = "Underweight";
        else if (bmi < 24.9) category = "Normal Range";
        else if (bmi < 29.9) category = "Overweight";
        else category = "Obese";
        result.innerHTML = `<span>${bmi} : ${category}</span>`
    }
})
```


## project 3

``` javascript

console.log("Chetan")

const clock = document.getElementById("clock")

setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString();
},1000)


```


## project 4

``` javascript

console.log("Chetan")

const randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('guesses')
const remaining = document.querySelector('.lastResult')
const loOrHi = document.querySelector('.loOrHi')
const startOver = document.querySelector('resultParas')


const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parent(userInput.value)
        validateGuess(guess);
    })
}


function validateGuess(guess){
    //
    if(isNaN(guess)){
        alert('Please enter a valid number.');
    }else if(guess < 1){
        alert('Please enter number greater than 0')
    }else if(guess > 100){
        alert('Please enter number less than 100')
    }else {
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess)
            displayMesssage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    // 
    if(guess === randomNumber){
        displayMesssage(`You Guessed it right.`)
    }else if(guess < randomNumber){
        displayMesssage(`Number is too low.`)
    }else if(guess > randomNumber){
        displayMesssage(`Number is too high.`)
    }
}

function displayGuess(){
    // 
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `
    numGuess++ 
    remaining.innerHTML = `${11-numGuess}`
}

function displayMesssage(message){
    //
    loOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    // 
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame();
}

function newGame(){
    //
    const newGameButton = documen.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1;
        guessSlot.innerHTML = ''
        remaining.innerHTML = ''
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true 
    })
}




```