//Your JS file contains a 'use strict' declaration at the top. Always.
'use strict';

//Design a guessing game about you that involves FIVE yes/no questions. Be creative and fun and whimsical. Or not. It's up to you! It's your project!
//The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either .toUpperCase() or .toLowerCase() used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.
var baseball = prompt('Was Joshua a Little League Umpire?');
  console.log('question1', baseball);
var baseballAnswer = baseball.toLowerCase();
  console.log('answer1', baseballAnswer);
if (baseballAnswer === 'yes' || baseballAnswer === 'y') {
  alert('You are correct! Josh was a Little League Umpire for his son\'s little league');
  } else{
    alert('Josh was a Little League Umpire for his son\'s little league');
    }

var kids = prompt('Does Joshua have 4 kids ranging from 6 months old to 19 years old?');
  console.log('question2', kids);
var kidsAnswer = kids.toLowerCase();
  console.log('answer2', kidsAnswer);
if (kidsAnswer === 'yes' || kidsAnswer === 'y') {
  alert('You are correct! Josh has 4 kids.');
  } else{
  alert('Oh Snap!  Josh does have 4 kids');
  }

var seatown = prompt('Did Josh come from Northern California?');
  console.log('question3', seatown);
var seatownAnswer = seatown.toLowerCase();
  console.log('answer3', seatownAnswer);
if (seatownAnswer === 'no' || seatownAnswer === 'n') {
  alert('You are correct, Josh has lived in the Seattle area all of his life.');
  } else{
  alert('Oh No!  Josh has lived in the Seattle area all of his life.');
  }

var firewood = prompt('Was Josh\'s first job stacking 100 cords of firewood for his grandfather?');
  console.log('question4',firewood );
var firewoodAnswer = firewood.toLowerCase();
  console.log('answer4', firewoodAnswer);
if (firewoodAnswer ==='yes' || firewoodAnswer ==='y') {
  alert('Yep! Josh stacked his grandfather\'s firewood 3 summers in a row.');
  } else{
  alert('incorrect');
  }

var ua = prompt('Is Joshua Fredrickson\'s nickname UA?');
  console.log('question5', ua);
var uaAnswer = ua.toLowerCase();
  console.log('answer5', uaAnswer);
if (uaAnswer === 'yes' || uaAnswer === 'y') {
  alert('Yep! Josh\'s nickname is UA');
  } else{
  alert('incorrect \n Josh\'s nickname is UA');
  }

//Useful and descriptive console.log() messages in the JS are well written and correctly displaying to the browser console for each question of the guessing game.
