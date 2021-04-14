function setup() {
  createCanvas(1350,1080);

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
