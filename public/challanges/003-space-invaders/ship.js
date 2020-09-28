class Ship {
    constructor(x, y, w, h, speed = 4) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h; 
        this.speed = speed;
        this.barrelWidth = this.w / 5;
        this. barrelHeight = this.h;
    }

    draw() {
        // ship color
        fill(255);
        
        // move if key is pressed
        this.keyIsDown();
        // keep ship in screen border
        this.vlidation();
        
        // ship body
        rect(this.x, this.y, this.w, this.h);
        // ship barrel
        rect(this.x + (this.w  - this.barrelWidth)/ 2 ,this.y - this.barrelHeight, this.barrelWidth, this.barrelHeight); 
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