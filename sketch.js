//this creates the sprites and images
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var arm1, arm2, base;

//this creates engine, world, and bodies
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,35);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	
	//two arms and one base
	arm1 = new Box(350,630,10,30);
	arm2 = new Box(450,630,10,30);
	base = new Box(400,640,90,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  arm1.display();
  arm2.display();
  base.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
	helicopterSprite.setVelocity(5,0)
  }
}



