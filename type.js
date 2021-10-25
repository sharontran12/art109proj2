let count = 0;
let code=0;
let chosenColor='#FFB5E8';
// let input, button;

// mouse position changes the background color or just the time? 
//pastel color as bg: https://www.schemecolor.com/pastel-color-tones.php
let bgColor = ['#666a86', '#788aa3', '#92b6b1', '#b2c9ab', '#e8ddb5'];

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let input;

function setup() {
createCanvas(displayWidth, displayHeight);
  input =createInput();
  input.position(630, 550);
  input.id('textbox');
  input.placeholder="Type your thoughts.";

}



let userWords;

//the words that are printed during typing
function showResult() {
  if (input.value() !="") {
    fill(255);
    textRec =input.value();
    userWordsArr = textRec.split(" ");
    userWords = userWordsArr;
        print('userWords',userWords);
    count = userWords.length;
    print('count',count);
    text(textRec, width / 5, height / 3, width * 3 / 5, height * 2 / 3);
    print('textRec', textRec);
    wordstoLetters(userWords);

  }else {
    color(255);
    textFont('Georgia',30);
    textAlign(CENTER);
    let prompt="Type something."
    text(prompt,width/2,height/2);
  }

}

function wordstoLetters(arr) {
  for (let i = 0; i < arr.length; i++) {
    lastLettertoKeyCode(arr[i]);
  }

}

function lastLettertoKeyCode(letter) {

    //find out the last char in the word 
  let character = letter.charAt(letter.length - 1);
  print('character',character);


  if(character!=""){//find out the keycode 
  let ChartoKeyCode = character.toUpperCase().charCodeAt(0);

  code = ChartoKeyCode;
  print('code',code);
  
  return ChartoKeyCode;
    }
}


function draw() {
  modes();
  

}

let button;
let timer = 60; //60 seconds as the timer 
let delayTimer = 3;

let mode = "instruction";

function modes() {

  if (mode == "instruction") {
    instruction();
    if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
      timer--;

    }
    if (timer == 60 - delayTimer) {
      mode = "afterInstruction";
    }
  } else if (mode == "afterInstruction") {
   
    afterInstruction();
  }


}



let opening, branding, details;

function instruction() {
  background('#666a86');
}


function afterInstruction() {
  background(bgColor[count % 10]);
  showResult();
  footerInstuction();
}

function footerInstuction() {
  if (windowWidth <= 800) {
    textSize(15);
  } 
  textAlign(CENTER);
  textFont('Georgia');

}




