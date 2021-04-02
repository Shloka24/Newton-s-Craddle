class Bob {
    constructor(x,y){

        var options = {
            isStatic: false,
            friction: 0.4,
            density: 3,
            restitution: 1.2
        }
        
        this.radius = 50;
        this.body = Bodies.circle(x, y, 25 , options);
        World.add(world, this.body)
        
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("black");
        circle(0,0, this.radius, this.radius);
        pop();
    
    }
}