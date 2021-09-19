class PlayerArrow {
  constructor(x, y, width, height, archerAngle) {
    var options = {
      isStatic: true,
      density: 0.1
    };
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("./assets/arrow.png");
    this.archerAngle = archerAngle;
    this.velocity = 0;
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    
    //add the code to move arrow up and down
    if(keyIsDown(DOWN_ARROW) && angle < -73){
      angle += 1;
      Matter.Body.setAngle(this.body,angle);
    }

    if(keyIsDown(UP_ARROW) && angle > -103){
      angle -= 1;
      Matter.Body.setAngle(this.body,angle);
    }

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}

