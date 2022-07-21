const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var player;
var ground, backgroundImg;
var ledge1, ledge2, ledge3, ledge4, ledge5;
var exit;
var gameState = "PLAY";

function preload() {
  backgroundImg = loadImage("Images/cave-background.jpg");
}

function setup() {
    var canvas = createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(500,height,1200,20);
    player = new Player(20,550,20,20);


    ledge1 = createSprite(650,600,100,15);
    ledge1.shapeColor = ("red");

    ledge2 = createSprite(550,500,100,15);
    ledge2.shapeColor = ("red");

    ledge3 = createSprite(750,500,100,15);
    ledge3.shapeColor = ("red");

    ledge4 = createSprite(650,500,30,20);
    ledge4.shapeColor = ("red");

    ledge5 = createSprite(300,300,25,25);
    ledge5.shapeColor = ("red");


    exit = createSprite(300,301,25,40);
    exit.shapeColor = ("lightgreen");

}

function draw() {
  background(backgroundImg);

  Engine.update(engine);

  

  ground.display();
  player.display();
 

  drawSprites();
}


