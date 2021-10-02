var trex, trexAnimation;
var ground, groundimg;
var IVground;
var clouds;

function preload(){
  trexAnimation = loadAnimation("trex1.png","trex3.png","trex4.png")
  groundimg = loadImage("ground2.png")
}

function setup() 
{
  createCanvas(600,200);
  trex = createSprite(50,170,20,30);
  trex.addAnimation("1234",trexAnimation);
  trex.scale = 0.5;
  //trex.velocityX = 2;

  ground = createSprite(300,180,600,10)
  ground.addImage("abcd",groundimg)
  ground.velocityX = -4;

  IVground = createSprite(300,190,600,3)
  IVground.visible = false
}

function draw() 
{
  background("skyblue");

  console.log(trex.y);

  if(ground.x < 0 ){
    ground.x = ground.width/2;
  }

  if(keyDown("space") && trex.y > 155){
    trex.velocityY = -12
  }

  trex.velocityY += 0.5;
    
  trex.collide(IVground)
  drawSprites();
}





