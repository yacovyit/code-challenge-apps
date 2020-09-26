class Box {
  constructor(x, y, z, r) {
    this.pos = createVector(x, y, z);
    this.r = r;
  }
  split() {
    let newBoxes = [];
    for(let x = -1; x < 2; x++) {
      for(let y = -1; y < 2; y++) {
        for(let z = -1; z < 2; z++) {
          
          const locationSum = abs(x) + abs(y) + abs(z);
          if (locationSum > 1) {
            const newR = this.r/3;
            const newX = this.pos.x + x * newR;
            const newY = this.pos.y + y * newR;
            const newZ = this.pos.z + z * newR;
          
            newBoxes.push(new Box(newX, newY, newZ, newR));
          }
        
        }
      }
    }
    return newBoxes;
  }
  
  draw() {
    push();  
    translate(this.pos.x, this.pos.y, this.pos.z);
    box(this.r);
    pop();
  }
}