
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var SURVIVALTIME;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
//   DISPLAYING CANVAS
  createCanvas(630, 555);
  
//   CREATING GROUND
  ground = createSprite(100,500,1500,13);
 
  
//   MONKEY SETUP
   monkey = createSprite(100,500,0,0);
  monkey.addAnimation("moving" ,monkey_running);
  monkey.scale=0.1;

  
  SURVIVALTIME=0;
//   creating GROUPS
  bananaGroup = new Group();
  obstaclesGroup = new Group();
}


function draw() {
//   CHECKING MONKEYY POSITION TO FIX BUG
// console.log("monkey.y = " + monkey.y)
  background(180);
//   VELOCITY OF GROUND
  ground.velocityX=-5;
   if (ground.x < 0){
      ground.x = ground.width/2;
     console.log("GROUND IS MOVING");
    }
//   COLLIDING MONKEY TO GROUND
 monkey.collide(ground);
  monkey.bounce(ground);
//   SPACE 
  if(keyWentDown("space") && monkey.y>=460){
     monkey.velocityY=-12;
     }
      monkey.velocityY = monkey.velocityY + 0.2
fruit_banana();
obstacles();
//   SURVIVAL TIME
  SURVIVALTIME=SURVIVALTIME+Math.round(getFrameRate()/60.5);
  drawSprites();
fill("white");
  stroke("white")
  textSize(20)
  
  stroke("black");
  fill("black")
  text("SURVIVALTIME:"+SURVIVALTIME,100,50)
}
function fruit_banana(){
  //   BANANA
 if (frameCount%80===0){
  banana = createSprite(600,Math.round(random(120,200)),0,0);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-10;
  banana.lifetime=59;

   //    CHECKING BANANA'S Y POSITION
   console.log("BANANA:"+banana.y);

  bananaGroup.add(banana);
 }
 }
function obstacles(){
  if(frameCount % 300 ===0){
    obstacle = createSprite(600,480,0,0);
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-10;
    obstacle.lifetime=60;
    obstaclesGroup.add(obstacle);
  }
}




