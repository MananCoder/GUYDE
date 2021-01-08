const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1, box1, box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1= new Box(200,290,70,90);
    ground1= new Ground(200,400,400,50);
    box2= new Box(230,200,100,60);
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
    ground1.display();
}