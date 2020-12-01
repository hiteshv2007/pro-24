
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperball1




function setup() {
	createCanvas(1000, 685);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	paperball1=new Paperball(50,100,40,40)
	groundSprite=createSprite(width/2, height-15, width,50);
	groundSprite.shapeColor=color("green")
	


	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	 var ball_options = {
		restitution : 1
	  }
	 ball = Bodies.circle(200,100,20,ball_options);
   World.add(world,ball);
   

   box1 = new Dustbin(600,20,20,120)
   box2=new Dustbin(760,30,300,20)
   box3=new Dustbin(870,20,20,120)
  
}



function draw() {
  
  background(0);
  
 
 paperball1.display();

box1.display();
box2.display();
box3.display();
groundSprite.display();
drawSprites();
}

function keyPressed() {
if (keyCode===UP_ARROW)  {

Matter.Body.applyForce(paperball1.body,paperball1.body.position,{x:80,y:-84})


}


}




