
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var paper
var rect1, rect2, rect3 
var dustbinImage
function preload()
{
	dustbinImage=loadImage("dustbingreen (1).png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    
	paper=new Paper (100,200,25);
 ground=new Ground (400,650,800,7);
 rect1=Bodies.rectangle(400,640,10,50,{isStatic:false})
 rect2=Bodies.rectangle(540, 640, 10,50,{isStatic:false})
 rect3=Bodies.rectangle(470,655,130,10,{isStatic:false})
World.add(world,rect1)
World.add(world,rect2)
World.add(world,rect3)


   
	Engine.run(engine);
  
}







function draw() {
  rectMode(CENTER);
  background(255);
  

image(dustbinImage,540,500,100,150)



  ground.display();
  paper.display();
  drawSprites();
 
}
function keyPressed(){
if(keyCode===UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{ x:85,y:-85})





}


}







