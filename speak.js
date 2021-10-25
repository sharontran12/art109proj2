let count = 0;
let code;

let bgColor = ['#92b6b1', '#b2c9ab', '#e8ddb5', '#788aa3', '#666a86'];
let myVoice = new p5.Speech(); // new P5.Speech object


let myRec = new p5.SpeechRec(); // speech recognition object (will prompt for mic access)
myRec.interimResults = true; // allow partial recognition (faster, less accurate)
myRec.continuous = true; // do continuous recognition
 
let size;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  resizeCanvas(windowWidth, windowHeight);
  myRec.start();
  myRec.onResult = showResult; // bind callback function to trigger when speech is recognized

    myVoice.speak("How are you feeling?");

}

let userWords;

function showResult() {
  if (myRec.resultValue == true) {
    fill(255);
    textRec = myRec.resultString;
    print('textRec', textRec);
    text(textRec, width / 5, height / 3, width * 3 / 5, height * 2 / 3);
    //form an array of words 
    userWords = textRec.split(" ");
    count = userWords.length;
    print('userWords', userWords);
    wordstoLetters(userWords);
    print('code', code);

  }else {
    color(255);
    textFont('Libre Baskerville',30);
    textAlign(CENTER);
    let prompt="How are you feeling?"
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

  //find out the keycode 
  let ChartoKeyCode = character.toUpperCase().charCodeAt(0);

  code = ChartoKeyCode;

  return ChartoKeyCode;
}


function draw() {
  modes();

}

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



let intro,branding, details;

function instruction() {
  background('#92b6b1');

}


function afterInstruction() {
  background(bgColor[count % 5]);
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



