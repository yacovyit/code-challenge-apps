let ship;
let objects = [];
function setup() {
  let canvas = createCanvas(800, 600);

  ship = new Ship(width  / 2 , height - 40, 40, 20);
  objects.push(ship);
}
function keyPressed() {
  ship.move(keyCode);
}

function draw() {
  background(0);

  objects.forEach(element => {
    element.draw();
  });
  
 
}