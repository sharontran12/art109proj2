function setup() {
resizeCanvas(windowWidth, windowHeight);
background('#e8ddb5');textSize(32);
  
}

function draw() {
  colorMode(HSB);
  if(mouseIsPressed){
   noStroke();
    stroke((5*frameCount) % 360, 40, 100);
    fill((5*frameCount) % 360, 100, 100);

    strokeWeight(20);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  }
  
  colorMode(RGB);
}