
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof;
var bobD = 20;
function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400, 100, 200, 20);

	bob1 = new Bob(320, 300, 20);
	bob2 = new Bob(360, 300, 20);
	bob3 = new Bob(400, 300, 20);
	bob4 = new Bob(440, 300, 20);
	bob5 = new Bob(480, 300, 20);

	rope1 = new Rope(roof.body, bob1.body, bobD*4*(-1));
	rope2 = new Rope(roof.body, bob2.body, bobD*2*(-1));
	rope3 = new Rope(roof.body, bob3.body, bobD*0);
	rope4 = new Rope(roof.body, bob4.body, bobD*2*(1));
	rope5 = new Rope(roof.body, bob5.body, bobD*4*(1));

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-45, y:-45});
	}
}


