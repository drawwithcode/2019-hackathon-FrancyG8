//--Hackaton Vintage Bundle - Mentana Surprise

//--defining my variables
var mySong;
var analyzer;

var backimage;
var mentana;


function preload() {
  //--loading my external material
  mySong = loadSound("./assets/TG1_bumper.mp3");
  backimage = loadImage("./assets/backimage.jpg");
  mentana = loadImage("./assets/mentana.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background('black'); //--just in case the background fails to load

  //--analysing my song
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);
  fft = new p5.FFT();
  mySong.amp(2);
}


function draw() {
  //--calling my background
  backgroundImage();

  //--Instructions
  push();
  var myText = "Press to Play or Pause the opening song";
  drawingContext.font = "40px VT323";
  drawingContext.textAlign = "center";
  fill('white');
  text(myText, windowWidth / 2, windowHeight - (windowHeight / 6));
  pop()

  let waveform = fft.waveform();
  noFill();
  beginShape();
  stroke('white'); // waveform is red
  strokeWeight(1);
  for (var i = 0; i< waveform.length; i++){
    let x = map(i, 0, waveform.length, 0, width);
    let y = map( waveform[i], -1, 1, 0, height);
    vertex(x,y);
  }
  endShape();
}


// function keyTyped() {
//
//   //--This function changes my cardboards and songs
//   if (key === 'p') {
//     //--Show first cardboard after clicking 'a'
//     image(board01, (windowWidth / 2) - (board01.width / 2), (windowHeight / 2) - (board01.height / 2), board01.width, board01.height);
//     //--Text
//     push();
//     var myText = "Your favourite party crasher";
//     drawingContext.font = "60px Righteous";
//     drawingContext.textAlign = "center";
//     fill('RoyalBlue');
//     text(myText, windowWidth / 2, windowHeight - (windowHeight / 4));
//     pop();
//     //--Play soundtrack
//     if (mySong02.isPlaying() == false) {
//       mySong02.play();
//     }
// }

function mousePressed() {
  //--mySong plays and pauses with the pressure of my mouse
  if (mySong.isPlaying()) {
    mySong.pause();
  } else {
    mySong.play();
  }
}


function backgroundImage() {
  //--defining my background image adapted to my screen
  push();
  translate(width / 2, height / 2);
  imageMode(CENTER);
  let scale = Math.max(width / backimage.width, height / backimage.height);
  image(backimage, 0, 0, backimage.width * scale, backimage.height * scale);
  pop();
}


function windowResized() {
  //--function to resize my project
  resizeCanvas(windowWidth, windowHeight);
}
