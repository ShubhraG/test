
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var dustbin1,dustbin2,dustbin3;
var dusti,dustbin;
var paperi,paper;

function preload()
{
	dusti=loadImage("dustbin.png");
	paperi=loadImage("paper.png");
}

function setup() {
	createCanvas(1400, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  ball=new Paper(200,300);

	  ground=new Ground(700,550,1400,30);

	  dustbin1=new Dustbin(1100,495,150,15);
	  dustbin2=new Dustbin(1185,420,15,170);
	  dustbin3=new Dustbin(1015,420,15,170);
	 

	  //dustbin=createSprite(990,500);
	  //dustbin.addImage(dusti);
	  //dustbin.scale=0.6

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);


  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  image(dusti,1000,330,200,200);
  ball.display();
  
  drawSprites();
 
}
function keyPressed()	{
	if(keyCode===UP_ARROW)	{
		Matter.Body.applyForce(ball.body,ball.body.position,{x:110,y:-110});

	}
}

