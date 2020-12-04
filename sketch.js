const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var gameState = "onsling"


var engine, world;

var backgroundImg,platform;
var slingshot;
var bg="bg1.png";

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    stand = new Stand(100,200,300,170);
    ball1 = new Ball(365,240,20,20);

    //level one
    block1 = new Block(310,335,30,40);
    block2 = new Block(360,335,30,40);
    block3 = new Block(360,335,30,40);
    block4 = new Block(420,335,30,40);
    block5 = new Block(450,335,30,40);
    block6 = new Block(470,335,30,40);
    block7 = new Block(480,335,30,40);

    //level two
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);

    //level three
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);

    // top
    block16 = new Block(390,155,30,40)


  
    timetravel();

  

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    block1.display();
    block2.display();
    ground.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    ball1.display();


   
    platform.display();
    //log6.display();
    slingshot.display();    
}



function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(ball.body);
    }
}

async function timetravel(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON=await response.json();
    var datetime=responseJSON.datetime;
    var hour=datetime.slice(11,13)
    console.log(hour)
if(hour>6&&hour<18){
    bg="bg.png"
}
else(
    bg="base.png"
)
backgroundImg=loadImage(bg)
}
