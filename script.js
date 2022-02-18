'use strict';
// console.log(document.querySelector(`.message`).textContent);
// document.querySelector(`.message`).textContent = `🎉Correct Number!`;
// console.log(document.querySelector(`.message`).textContent);
// document.querySelector(`.number`).textContent = 13;
// document.querySelector(`.score`).textContent = 10;
// document.querySelector(`.guess`).value = 23;
// console.log(document.querySelector(`.guess`).value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const num = Number(document.querySelector('.guess').value);
  console.log(num, typeof num);

  //When there is no input
  if (!num) {
    // document.querySelector(`.message`).textContent = 'No number';
    displayMessage(`🔴No number!`);

    //When player wins
  } else if (num === secretNumber) {
    // document.querySelector(`.message`).textContent = `🎉Correct Number!`;
    displayMessage(`🎉Correct Number!`);
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (num !== secretNumber) {
    if (score > 1) {
      // document.querySelector(`.message`).textContent =
      //   num > secretNumber ? `📈Too high` : `📉Too low`;
      displayMessage(num > secretNumber ? `📈Too high` : `📉Too low`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      // document.querySelector('.message').textContent =
      //   '😔You lost the game !';
      displayMessage('😔You lost the game !');
      document.querySelector(`.score`).textContent = 0;
    }
  }
  //When guess is too high
  //  else if (num > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(`.message`).textContent =
  //       num > secretNumber ? `📈Too high` : `📉Too low`;
  //     score--;
  //     document.querySelector(`.score`).textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😔You lost the game !';
  //     document.querySelector(`.score`).textContent = 0;
  //   }

  //   //When guess is too low

  // else if (num < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(`.message`).textContent = `📉Too low`;
  //     score--;
  //     document.querySelector(`.score`).textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😔You lost the game !';
  //     document.querySelector(`.score`).textContent = 0;
  //   }
  // }

  // else if (num !== secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(`.message`).textContent = `📉Too low`;
  //     score--;
  //     document.querySelector(`.score`).textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😔You lost the game !';
  //     document.querySelector(`.score`).textContent = 0;
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  let score = 20;
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = secretNumber;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.number').style.width = '15rem';
});
