class Drops{
    constructor(x,y){
var options ={
    
    restitution:0.6,
    friction:0.1,
    mass:0.2

}
    

    this.body = Bodies.circle(x, y,10,  options);
    
    this.image = loadImage("raindrop.png");
    World.add(world, this.body);
}
fall(speed){
    this.y +=speed;
}
    
display(){
    var angle = 360;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
   
    imageMode(CENTER)
    image(this.image,0,0,20,20)
    pop();
    
  };
}