
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;
var bob1
var roof
var rope1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(300,500,57);
	bob2 = new Bob(350,500,57);
	bob3 = new Bob(400,500,57);
	bob4 = new Bob(450,500,57);
	bob5 = new Bob(500,500,57);

	roof = new Roof(400,135,600,20);

	rope1 = new Rope(bob1.body,roof.body,-60*2,0);
	rope2 = new Rope(bob2.body,roof.body,-30*2,0);
	rope3 = new Rope(bob3.body,roof.body,0*2,0);
	rope4 = new Rope(bob4.body,roof.body,30*2,0);
	rope5 = new Rope(bob5.body,roof.body,60*2,0);

	Engine.run(engine);
  
}


function draw() {
	background("skyblue");
	rectMode(CENTER);
	Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}
  function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ 
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-250,y:-250}); 
	} 
} 






