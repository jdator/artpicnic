function setup() {
  createCanvas(600, 600);
    background(220, 50, 133);

    strokeWeight(15);
}

function draw() {

  if (mouseIsPressed){
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

}
