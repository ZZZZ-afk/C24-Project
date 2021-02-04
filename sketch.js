const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var plane;
var stone;
var rubber;
var sand1,sand2,sand3,sand4;
var iron;

function setup() {
	 createCanvas(1000, 700);

   engine = Engine.create();
	 world = engine.world;

   hammer = new Hammer(100,100,width,height);
   
   stone = new Stone(200,0,60,80);

   rubber=new Rubber(900,0,40);
   
   sand1=new Sand(500,0,12);
   sand2=new Sand(450,0,12);
   sand3=new Sand(550,0,12);
   sand4=new Sand(200,0,12);

   iron=new Iron(200,0,75,50);

   plane = new Plane(500,height,1000,20);

   Engine.run(engine);
}


function draw() {
 
  rectMode(CENTER);
  background(rgb(mouseX,mouseY,200));
  hammer.display();
  stone.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  iron.display();
  plane.display();
  drawSprites();
} 



