const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg,snow,snowfall,snowman=[];
function preload(){
  bg=loadImage("snow3.jpg");
  snow=loadImage("snow5.jpg");
}
function setup() {
  
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
if(frameCount%50===0){
for(i=0;i<400;i++){
snowman.push(new createSnowman(random(0,800),random(0,800)))
}
}
 
}

function draw() {
  background(bg);
  Engine.update(engine);
  for(var i=0;i<400;i++){
    snowman[i].updateY();
    snowman[i].showDrop();
  }
  drawSprites();
}