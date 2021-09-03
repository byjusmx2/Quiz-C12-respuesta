var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;


var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var score;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
 
  
}

function setup() {
  background(220)
  
  //crear sprite de Trex
  trex = createSprite(50,380,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //crear sprite de suelo
  ground = createSprite(200,380,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //crear sprite de suelo invisible
invisibleGround = createSprite(200,390,400,10);
 invisibleGround.visible = false;
  

}

function draw() {
  //establecer color de fondo
  background(220);
  
  score = score + Math.round(getFrameRate()/60);
  
  //hacer que el Trex salte al presionar la barra espaciadora
  if(keyDown("space")&& trex.y >= 362) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //evitar que el Trex caiga
  trex.collide(ground);
  
  drawSprites();
}




