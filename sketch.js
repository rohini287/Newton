
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint

var bob1,bob2,bob3,bob4,bob5,bob6;
var rope1;
var ground
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
    var startBobPositionY=height/4+500
	bob1= new bob(220,480,28);
	bob2 = new bob(275,480,28);
	bob3= new bob(329,480,28);
	bob4 = new bob(382,480,28);
	bob5 = new bob(435,480,28);
	bob6= new bob(485,480,28);


	ground=new Ground(350,200,300,20)
	
	rope1=new rope(bob1.body,ground.body,-135,0);
	rope2=new rope(bob2.body,ground.body,-85,0);
	rope3=new rope(bob3.body,ground.body,-35,0);
	rope4=new rope(bob4.body,ground.body,15,0);
	rope5=new rope(bob5.body,ground.body,65,0);
	rope6=new rope(bob6.body,ground.body,115,0);	


	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 
  drawSprites();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 bob6.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 rope6.display();
 ground.display();

 if (keyPressed("up")){
	 bob1.isStatic=false;
 }
}



