class Ship {
    constructor(x, y, w, h, speed = 4) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h; 
        this.speed = speed; 
    }

    draw() {
        fill(255);
        this.keyIsDown();
        rect(this.x, this.y, this.w, this.h); 
    }

    move(keyCode) {
        if (keyCode === LEFT_ARROW) {
            this.x -= this.speed;
        } else if (keyCode === RIGHT_ARROW) {
            this.x += this.speed;
        }
    }
    keyIsDown() {
        if (keyIsDown(LEFT_ARROW)) {
            this.x -= this.speed;
        } else if (keyIsDown(RIGHT_ARROW)) {
            this.x += this.speed;
        } 
    }
}