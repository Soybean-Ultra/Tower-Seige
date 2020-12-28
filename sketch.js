const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
let polygon_img;
function preload(){
    polygon_img = loadImage("polygon.png");

}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
groundthing = new Ground(600,395,1200,20)
block1 = new Box(330,235,30,40);
block2 = new Box(360,235,30,40);
block3 = new Box(390,235,30,40);
block4 = new Box(420,235,30,40);
block5 = new Box(450,235,30,40);
//row 1
block6 = new Box(360,195,30,40);
block7 = new Box(390,195,30,40);
block8 = new Box(420,195,30,40);
//row2
block9 = new Box(390,155,30,40);
//row3
polygon = Bodies.circle(500,50,20)
World.add(world,polygon);
imageMode(CENTER)
//image(polygon_img,0,0);
}
function draw(){
Engine.update(engine)
background("blue")
groundthing.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
image(polygon_img,polygon.position.x,polygon.position.y,40,40);

}