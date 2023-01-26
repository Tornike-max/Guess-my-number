'use strict';

 let secretNumber = Math.trunc(Math.random() * 20)+1;
 let score = 20;
 let highscore = 0;
document.querySelector('.check').addEventListener
('click' , function(){   
    const guess = Number( document.querySelector('.guess').value)
    console.log(guess, typeof guess)

    if(!guess){
        document.querySelector('.message').textContent = '🤷‍♂️No Number!'
    }else if(guess === secretNumber){

        document.querySelector('.question-mark').textContent = secretNumber

        document.querySelector('.game-header').textContent = `Winner Winner Chicken dinner`;

        document.querySelector('.message').textContent = '😭Correct';

        document.querySelector('.container').style.backgroundColor = '#60b347';

        document.querySelector('.highscore').value = score

        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore
            
        }
        

     

    }else if(guess > secretNumber){
         
        if(score > 1){
            document.querySelector('.message').textContent = ' 👺Too High';
            score --;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = score = 0
        }

    }else if(guess < secretNumber) {
        if(score > 1){
            document.querySelector('.message').textContent = ' Too low';
            score --;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = score = 0
        }
        
        
    }
    
    
    
    
});

let tryAgain = document.querySelector('.btn-again').addEventListener
('click', function(){
    
    score = 20; 
    secretNumber = Math.trunc(Math.random() * 20)+1;

    document.querySelector('.score').textContent = score;

    document.querySelector('.message').textContent = '👻Start a game...';

    document.querySelector('.question-mark').textContent = '?'

    document.querySelector('.game-header').textContent = `Guess My Number!`

    document.querySelector('.container').style.backgroundColor = '#222';

    document.querySelector('.guess').value = '';
})