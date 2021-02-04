const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var plane;
var stone;
var rubber;

function setup() {
	 createCanvas(1000, 700);

   engine = Engine.create();
	 world = engine.world;

   hammer = new Hammer(100,100,width,height);
   
   stone = new Stone(200,0,60,80);

   rubber=new Rubber(900,0,60)
   
   plane = new Plane(500,height,1000,20);

   Engine.run(engine);
}


function draw() {
 
  rectMode(CENTER);
  background(100);
  hammer.display();
  stone.display();
  rubber.display();
  plane.display();
  drawSprites()
} 



