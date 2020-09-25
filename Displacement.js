class Displacement {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
    }

    update() {
        //this.pos.x += this.vel.x;
        //this.pos.y += this.vel.y;
        // Static function
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(-5, 5));
        //Instance add
        this.pos.add(this.vel);
        // Static add
        // var v = p5.Vector.add(pos,vel)
    }

    show() {
        stroke(255);
        strokeWeight(2);
        fill(255, 100);
        ellipse(this.pos.x, this.pos.y, 32);
    }

}
