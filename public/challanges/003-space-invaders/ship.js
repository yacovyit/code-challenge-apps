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
        this.vlidation();
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
    vlidation() {
        if (this.x >= width - this.w)  {
            this.x = width - this.w; 
        } else if (this.x <= 0) {
            this.x = 0;
        }
    }
}