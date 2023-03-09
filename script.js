'use strict';

//  let secretNumber = Math.trunc(Math.random() * 40)+1;
//  let score = 20;
//  let highscore = 0;
//  let displayMessage = function(message){
//     document.querySelector('.message').textContent = message;
//  }

 

// document.querySelector('.check').addEventListener
// ('click' , function(){   
//     const guess = Number( document.querySelector('.guess').value)
//     console.log(guess, typeof guess)

//     if(!guess){
//         displayMessage('🤷‍♂️No Number!')
//     }else if(guess === secretNumber){

//         document.querySelector('.question-mark').textContent = secretNumber

//         document.querySelector('.game-header').textContent = `Winner Winner Chicken dinner`;

//         displayMessage('😭Correct');

//         document.querySelector('.container').style.backgroundColor = '#60b347';

//         document.querySelector('.highscore').value = score

//         if(score > highscore) {
//             highscore = score;
//             document.querySelector('.highscore').textContent = highscore
            
//         }
        

     

//     } else if (guess !== secretNumber){
//         if(score > 1){
//             displayMessage( guess > secretNumber ? '👺Too High' : '🤷‍♂️Too low');
//             score --;
//             document.querySelector('.score').textContent = score;
//         }else{
//             displayMessage('You lost the game');
//             document.querySelector('.score').textContent = score = 0
//         }
//     }






    // else if(guess > secretNumber){
         
    //     if(score > 1){
    //         document.querySelector('.message').textContent = ' 👺Too High';
    //         score --;
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = 'You lost the game';
    //         document.querySelector('.score').textContent = score = 0
    //     }

    // }else if(guess < secretNumber) {
    //     if(score > 1){
    //         document.querySelector('.message').textContent = ' Too low';
    //         score --;
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = 'You lost the game';
    //         document.querySelector('.score').textContent = score = 0
    //     }
        
        
    // }
    
    
    
    
// });

// let tryAgain = document.querySelector('.btn-again').addEventListener
// ('click', function(){
    
//     score = 20; 
//     secretNumber = Math.trunc(Math.random() * 20)+1;

//     document.querySelector('.score').textContent = score;

//     displayMessage('👻Start game...');

//     document.querySelector('.question-mark').textContent = '?'

//     document.querySelector('.game-header').textContent = `Guess My Number!`

//     document.querySelector('.container').style.backgroundColor = '#222';

//     document.querySelector('.guess').value = '';
// })




// გამეორება ჩემით 2
// let secretNumber = Math.trunc(Math.random() * 20) +1;

// let score = 20;
// document.querySelector('.score').textContent = score;
// let highScore = 0;
// document.querySelector('.highscore').textContent = highScore;
// let displayMessage = function(message) {
//     document.querySelector('.message').textContent = message;
// }


// document.querySelector('.check').addEventListener
// ('click', function() {
//     const guess = Number( document.querySelector('.guess').value);

//     if(!guess){
//         displayMessage(' 🤷‍♂️No number')

//     }else if(guess === secretNumber){
//         document.querySelector('.question-mark').textContent = secretNumber;
//         displayMessage('💥You win')
//         document.querySelector('.container').style.backgroundColor = '#60b347'
//         document.querySelector('.game-header').textContent = '💥Congratulations💥'

//         if(score > highScore){
//             highScore = score
//             document.querySelector('.highscore').textContent = highScore;
//         }

//     }else if(guess !== secretNumber){
//         if(score > 0){
//             displayMessage(guess < secretNumber ? '🤷‍♂️Too low' : '🤷‍♂️Too high')
//             score--
//             document.querySelector('.score').textContent = score;
//         }else{
//             displayMessage('You lost the game')
//         }
//     }

// })

//  let tryAgain = document.querySelector('.btn-again').addEventListener('click', function(){
//     score = 20;
//     secretNumber = Math.trunc(Math.random() * 40) +1;
//     document.querySelector('.game-rule').textContent = 'Between 1 and 40'
//     document.querySelector('.question-mark').textContent = '?';
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.container').style.backgroundColor = '#222'
//     displayMessage('👻start game...');
//     document.querySelector('.game-header').textContent = 'Guess My Number!'
//     document.querySelector('.guess').value = ''

//  })




// let secretNumber = Math.trunc(Math.random() *20) + 1;

// let score = 20;
// document.querySelector('.score').textContent = score;
// let highscore = 0;
// document.querySelector('.highscore').textContent = highscore;

// let displayMessage = function (message){
//      document.querySelector('.message').textContent = message;
// }

// document.querySelector('.check').addEventListener('click', function(){
//     let guess = Number( document.querySelector('.guess').value);
    

//     if(!guess){
//         displayMessage('no number')
//     }


//     else if(guess === secretNumber){
//         document.querySelector('.container').style.backgroundColor = '#60b347'
//         displayMessage('💥You win')
//         document.querySelector('.question-mark').textContent = secretNumber;

//         if(score > highscore){
//             highscore = score;
//             document.querySelector('.highscore').textContent = highscore;
//         }

//     }else if(guess !== secretNumber){
//         if(score > 0){
//             displayMessage(guess > secretNumber ? 'To high' : 'To low')
//             score--;
//             document.querySelector('.score').textContent = score;
//         }else{
//             displayMessage('you lost')
            
//         }
//     }
// })

// document.querySelector('.btn-again').addEventListener('click', function(){
//     score = 20;
//     document.querySelector('.score').textContent = score;
//     secretNumber = Math.trunc(Math.random() * 20) + 1;
//     document.querySelector('.container').style.backgroundColor = '#222';
//     document.querySelector('.guess').value = '';
//     document.querySelector('.question-mark').textContent = '?'
//     displayMessage('👻Start game...')
// })


// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;
// let displayMessage = function (message) {
//     document.querySelector('.message').textContent = message;
// }
// document.querySelector('.check').addEventListener('click', function(){
//     let guess = Number(document.querySelector('.guess').value);
//     if(!guess){
//         displayMessage('no number')
//     }else if(guess === secretNumber){
//         document.querySelector('.question-mark').textContent = secretNumber
//         displayMessage('YOU WIN')
//         document.querySelector('.container').style.backgroundColor = '#60b347'
//         if(score > highscore){
//             highscore = score;
//             document.querySelector('.highscore').textContent = highscore
//         }
//     }else if(guess !== secretNumber){
//         if(score >=0 ){
//             displayMessage(guess > secretNumber ? '🔝to high' : '🤷‍♂️to low') 
//             score--;
//             document.querySelector('.score').textContent = score;
            
            
//         }else{
//             displayMessage('you lose')
//         }
//     }
// })

// document.querySelector('.btn-again').addEventListener('click', function(){
    // score = 20;
    // document.querySelector('.score').textContent = score;
    // document.querySelector('.container').style.backgroundColor = '#222';
    // displayMessage('👻start game...');
    // secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.question-mark').textContent = '?';
    // guess = Number(document.querySelector('.guess').value = '');
    

// })



// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;
// const displayMessage = function (message) {
//       document.querySelector('.message').textContent = message;
// }

// document.querySelector('.check').addEventListener('click', function (){
//     let guess = Number(document.querySelector('.guess').value);

//     if(!guess){
//         displayMessage('🤷‍♂️No Number!')
//     }else if(guess === secretNumber) {
//         document.querySelector('.question-mark').textContent = secretNumber;
//         displayMessage('💯You Win')
//         document.querySelector('.container').style.backgroundColor = '#60b347';
//         if(score > highscore){
//             highscore = score;
//             document.querySelector('.highscore').textContent = highscore;
//         }
//     }else if(guess !== secretNumber) {
//         if(score >= 1){
//             displayMessage(`${guess < secretNumber ? '😭Too Low' : '😭Too High'}`)
//             score--
//             document.querySelector('.score').textContent = score;
//         }else{
//             displayMessage('Looser')
//         }
        
//     }

// });


// document.querySelector('.btn-again').addEventListener('click', function(){
//     score = 20;
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.container').style.backgroundColor = '#222'
//     displayMessage('👻Start Game');
//     secretNumber = Math.trunc(Math.random() * 40) + 1;
//     document.querySelector('.question-mark').textContent = '?';
//     guess = Number(document.querySelector('.guess').value = '');
// })



// let score = 20
// document.querySelector('.score').textContent = score;
// let highscore = 0;
// document.querySelector('.highscore').textContent = highscore;

// let secretNumber = Math.trunc(Math.random() * 5) + 1;

// let displayMessage = function (message) {
//     document.querySelector('.message').textContent = message;
// }

// document.querySelector('.check').addEventListener('click', function(){
//     let guess = Number(document.querySelector('.guess').value);
    
//     if(!guess){
//        displayMessage('No Number!!')
//     }else if(guess === secretNumber) {
//         document.querySelector('.question-mark').textContent = secretNumber;
//         displayMessage('You win')
//         document.querySelector('.container').style.backgroundColor = '#60b347';
//         if(score > highscore) {
//             highscore = score;
//             document.querySelector('.highscore').textContent = highscore;
//         }
//     }else if(guess !== secretNumber) {
//         if(score >= 1){
//         displayMessage(`${guess > secretNumber ? 'Too high' : 'Too low'}`)
//         score--
//         document.querySelector('.score').textContent = score;
//       }else{
//         displayMessage('You lose')
        
//       }
//     }

// })

// document.querySelector('.btn-again').addEventListener('click' , function(){
//     score = 20
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.container').style.backgroundColor = '#222';
//     displayMessage('👻start game');
//     secretNumber = Math.trunc(Math.random() * 5) + 1;
//     document.querySelector('.question-mark').textContent = '?';
//     guess = Number(document.querySelector('.guess').value = '')
// })


let score = 20;
document.querySelector('.score').textContent = score;

let highScore = 0;
document.querySelector('.highscore').textContent = highScore;

let secretNumber = Math.trunc(Math.random() * 50) + 1;


let displayMessage = function (message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    let guess = Number(document.querySelector('.guess').value);

    if(!guess){
        displayMessage('🤷‍♂️No Number!')
    }else if(guess === secretNumber) {
        displayMessage('You Win💯')
        document.querySelector('.container').style.backgroundColor ='#60b347'
        document.querySelector('.question-mark').textContent = secretNumber;
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }else if(guess !== secretNumber){
        if(score > 0){
            displayMessage(`${guess > secretNumber ? '✈️To High' : '🤷‍♂️To low'} `)
            score--
            document.querySelector('.score').textContent = score;
        }else if(score === 0){
            displayMessage('You lost')
        }
    }

})

document.querySelector('.btn-again').addEventListener('click', function(){
    score = 20;
    document.querySelector('.score').textContent = score;
    displayMessage('👻Start game');
    secretNumber = Math.trunc(Math.random() * 50) + 1;
    document.querySelector('.question-mark').textContent = '?';
    document.querySelector('.container').style.backgroundColor = '#222'
})

