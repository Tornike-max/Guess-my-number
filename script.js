'use strict';

// console.log(document.querySelector('.message')
// .textContent)

// document.querySelector('.message').textContent = 'correct number'

// document.querySelector('.score').textContent = Math.trunc(Math.random() * 20)
// document.querySelector('.question-mark').textContent = Math.trunc(Math.random() * 20)
// document.querySelector('.guess').value = Math.trunc(Math.random() * 20)


 const secretNumber = document.querySelector('.question-mark').textContent = Math.trunc(Math.random() * 20)+1;
 let score = 20;

document.querySelector('.check').addEventListener
('click' , function(){   
    const guess = Number( document.querySelector('.guess').value)
    console.log(guess, typeof guess)

    if(!guess){
        document.querySelector('.message').textContent = '🤷‍♂️No Number!'
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = '😭Correct'
    }else if(guess < secretNumber){
        if(score > 0) {
            
        document.querySelector('.message').textContent = '👺Too Low';
        score --;
        document.querySelector('.score').textContent = score;
    }}else if(guess > secretNumber) {
        document.querySelector('.message').textContent = ' 👺Too High';
        score --;
        document.querySelector('.score').textContent = score;
    }
    
    
    
    
});