function setup() {
  createCanvas(800, 600);
  background(200);
  strokeWeight(5);
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
  } else if (key === 'c') {

    //clear image
    clear();
  }
}
