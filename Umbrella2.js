class Umbrella2{
    constructor(x,y){
var options ={
    // giveisStaic true 
    isStatic : true
}
    
// give shape of the body and add image to it
    this.body = Bodies.circle(x, y-100,100,  options);
    
    this.image = loadImage("umbrellla1.png");
    World.add(world, this.body);
}
    // make display function to give the height and width and angle of the body + image
display(){
    var angle = 350;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
   
    imageMode(CENTER)
    image(this.image,25,110,160)
    pop();
    
  };
}