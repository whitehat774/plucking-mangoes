const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, boy 
function preload(){
  tree = loadImage("sprites/tree.png");
  boy = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);
    tree = createSprite(400, 350)
	boy = createSprite(200, 350)
	
	mango1 = new Mango(600, 450)
    mango2 = new Mango(650, 500)
    mango3 = new Mango(700, 450)
	mango4 = new Mango(550, 500)
	mango5 = new Mango(600, 500)
    
	rock = new Rock(235, 420, 30)
	ground = new Ground(600, height, 800, 20)
	launcher = new Launcher(rock.body, {x:235, y:420})
	
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
  rock.display();
  ground.display();
  launcher.display();
  detectCollision(rock, mango1)
  detectCollision(rock, mango2)
  detectCollision(rock, mango3)
  detectCollision(rock, mango4)
  detectCollision(rock, mango5)
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(rock.body,{x:mouseX, y:mouseY})
 }
 function mouseReleased(){
	launcher.fly();
 }
function keyPressed() {
	if (keyCode === 32) {
	   Matter,body.setPosition(rock.body, {x:235, y:420})
	   boy.attatch(stone.body);
	}
}
function detectCollision(stone, rock) {
	mangoBodyPosition = mango.body.position
	rockBodyPosition = rock.body.position

    var distance = dist(rockBodyPosition.x, rockBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y,)
	if (distance<= mango.r+rock.r) {
	   Matter,body.setStatic(mango.body.false)
	}
}
