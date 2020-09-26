let boxes = [];
var a = 0;
function setup() {
  createCanvas(400, 400, WEBGL);
  boxes.push(new Box(0, 0, 0, 200));
  normalMaterial();
}

function mouseClicked() {
  let newBoxes = [];
  for(let box of boxes) {   
    newBoxes = newBoxes.concat(box.split());
  }
  boxes = newBoxes;
}
function draw() {
  background(51);
  
  rotateX(a);
  rotateY(a * 0.4);
  rotateZ(a * 0.1);
  
  for(let box of boxes) {
    box.draw();
  }

  a += 0.01;
}