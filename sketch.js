const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var image1,people;
var engine, world;
var thunder1,thunder2,thunder3,thunderImg1,thunderImg2,thunderImg3
var  raindrops=[];
function preload(){
    image1=loadImage("oldpeople.png")
    bg=loadImage("bg.jpg")
    thunder1=loadImage("lightning1.png")
    thunder2=loadImage("lightning2.png")
    thunder3=loadImage("lightning3.png")
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world; 
    umb1=new Umbrella(690,370)
    umb2=new Umbrella(790,370);
   
    people=createSprite(770,400,100,100)
    people.addImage(image1)
    people.scale=(0.37)
    thunder10=createSprite(300,100,50,70)
    thunder11=createSprite(500,100,50,70)
    thunder12=createSprite(900,100,50,70)
  drop=new Drops(700,0)
    
   
}
    

function draw(){
    background(bg)
    Engine.update(engine);
    umb1.display();
 umb2.display();
    
    drop.display();
    if(frameCount % 1 === 0){
        var raindrop = new Drops(random(0, windowWidth), -100,);
        raindrops.push(raindrop);
      }
  
  
      for(var i = 0; i < raindrops.length; i++){
        raindrops[i].fall(20);
        raindrops[i].display();
      } 
      if(frameCount % 1 === 0){
        var raindrop1 = new Drops(random(700,800), -100,);
        raindrops.push(raindrop1);
      }
  
  
      for(var j = 0; j < raindrops.length; j++){
        raindrops[j].fall(20);
        raindrops[j].display();
      } 
    
        if(frameCount % 10 === 0) {
          var rand = Math.round(random(1,2,3));
            switch(rand) {
              case 1:thunder10.addImage(thunder1);
                      break;
              case 2: thunder10.addImage(thunder2);
                      break;
              case 3:thunder10.addImage(thunder3);
                      break;
              
              default: break;
            }}
            if(frameCount % 10 === 0) {
              var rand = Math.round(random(1,2,3));
                switch(rand) {
                  case 1:thunder11.addImage(thunder1);
                          break;
                  case 2: thunder11.addImage(thunder2);
                          break;
                  case 3:thunder11.addImage(thunder3);
                          break;
                  
                  default: break;
                }}
                if(frameCount % 10 === 0) {
                  var rand = Math.round(random(1,2,3));
                    switch(rand) {
                      case 1:thunder12.addImage(thunder1);
                              break;
                      case 2: thunder12.addImage(thunder2);
                              break;
                      case 3:thunder12.addImage(thunder3);
                              break;
                      
                      default: break;
                    }
          }   
    
     
     
    drawSprites();
        }

