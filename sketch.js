function setup() {
  createCanvas(600, 600);
    background(220);

    strokeWeight(15);
}

function draw() {

  if (mouseIsPressed){
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

}

function keyTyped(){

  if (key === 's'){

    //save image
    saveCanvas('fileName', 'png');
  }
}
