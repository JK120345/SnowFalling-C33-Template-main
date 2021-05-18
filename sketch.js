const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var fall = [];
var engine,world;

function setup() {
  bk = loadImage("snow1.jpg");

  engine = Engine.create();
  world = engine.world;
  
  createCanvas(800,400);
  
}

function draw() {
  background(bk);  
  Engine.update(engine);

if(frameCount%8===0){
    var p = new  Snowl(random (0,800),10,10);
   fall.push(p);
}
for (var pa =1; pa < fall.length; pa++){
  fall[pa].display();
} 
  drawSprites();
}