//Your JS file contains a 'use strict' declaration at the top. Always.
'use strict';

//Design a guessing game about you that involves FIVE yes/no questions. Be creative and fun and whimsical. Or not. It's up to you! It's your project!
//The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either .toUpperCase() or .toLowerCase() used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.
var score = 0;

var userName = prompt('Greetings and Salutations!  \n Welcome to Joshua Fredrickson\'s website.  Could you kindly enter your name at the prompt?');



function questionOne() {
  var baseball = prompt('Was Joshua a Little League Umpire?');
  console.log('question1', baseball);
  var baseballAnswer = baseball.toLowerCase();
  console.log('answer1', baseballAnswer);
  if (baseballAnswer === 'yes' || baseballAnswer === 'y') {
    alert(userName + '! You are correct! Josh was a Little League Umpire for his son\'s little league');
    score++;
  } else{
    alert('Well ' + userName + ', Josh was a Little League Umpire for his son\'s little league');
  }
}

questionOne();

function questionTwo() {
  var kids = prompt('Does Joshua have 4 kids ranging from 6 months old to 19 years old?');
  console.log('question2', kids);
  var kidsAnswer = kids.toLowerCase();
  console.log('answer2', kidsAnswer);
  if (kidsAnswer === 'yes' || kidsAnswer === 'y') {
    alert('You are correct! Josh has 4 kids.');
    score++;
  } else{
    alert('Oh Snap!  Josh does have 4 kids');
  }
}

questionTwo();

function questionThree() {
  var seatown = prompt('Did Josh come from Northern California?');
  console.log('question3', seatown);
  var seatownAnswer = seatown.toLowerCase();
  console.log('answer3', seatownAnswer);
  if (seatownAnswer === 'no' || seatownAnswer === 'n') {
    alert('You are correct, Josh has lived in the Seattle area all of his life.');
    score++;
  } else {
    alert('Oh No!  Josh has lived in the Seattle area all of his life.');
  }
}

questionThree();

function questionFour() {
  var firewood = prompt('Was Josh\'s first job stacking 100 cords of firewood for his grandfather?');
  console.log('question4',firewood );
  var firewoodAnswer = firewood.toLowerCase();
  console.log('answer4', firewoodAnswer);
  if (firewoodAnswer === 'yes' || firewoodAnswer === 'y') {
    alert('Yep! Josh stacked his grandfather\'s firewood 3 summers in a row.');
    score++;
  } else {
    alert('sorry \n that is incorrect');
  }
}

questionFour();

function questionFive() {
  var ua = prompt('Is Joshua Fredrickson\'s nickname UA?');
  console.log('question5', ua);
  var uaAnswer = ua.toLowerCase();
  console.log('answer5', uaAnswer);
  if (uaAnswer === 'yes' || uaAnswer === 'y') {
    alert('Yep! Josh\'s nickname is UA');
    score++;
  } else {
    alert('incorrect \n Josh\'s nickname is UA');
  }
}

questionFive();

function questionSix() {
  var countdown = 1;
  while(countdown < 4) {
  //creating a while loop so the if/else question can repeat!
  //Thanks to Scott McCoy for the help working this out!
    var years = prompt('Guess the shortest amount of time Joshua has been employed in his adult life?  between 1-5.  Choose wisely, you only have ' + (4 - countdown) + ' chances left.');
    if(years === '4') {
      console.log('if', years);
      console.log('correctAnswer');
      score++;
      break;
    } else {
      if(years < 4){
        alert('your answers was too low.');
      } else {
        alert('your answer was too high');
      }
      console.log('while', years);
      console.log('wrong answer');
      countdown++;
    }
  }
}

questionSix();

function questionSeven() {
  for(var i = 0; i < 6; i++) {
    var animals = ['cat', 'dog', 'fish', 'bird', 'horse', 'cow',];
    //this is the inital loop to prompt the user
    var userAnswer = prompt((i + 1) + 'of 6 questions \n Name an animal Joshua has owned?').toLowerCase();
    console.log(userAnswer);
    if(animals.includes(userAnswer)) {
      console.log('correct animal');
      alert('You are correct! \n Here all of the animals Josh owned: ' + animals.toString());
      score++;
      break;
    } else {
      console.log('wrong answer7');
    }
  }
}

questionSeven();


alert('Congratulations!  \n ' + userName + ', you had ' + score + ' correct anwsers out of 7 questions.');
