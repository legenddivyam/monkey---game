var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
  createCanvas(400,400)
  obstacleGroup=new Group()
  bananaGroup=new Group()
  
  monkey=createSprite(60,340,30,30);
  monkey.addAnimation("running_monkey",monkey_running);
  monkey.scale=0.1;
  ground=createSprite(100,370,600,7)
  ground.x=ground.width/2
  console.log(ground.x)

}
   


  



function draw() {
background("green")
drawSprites();
spawnFood();
spawnObstacle();
spawnMonkey();
if(keyDown("space")){
monkey.velocityY=-12  
}
  monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground)
}
function spawnFood(){
  if(frameCount%60===0) {
    banana=createSprite(400,random(150,220))
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.velocityX=-6
    
  }
}
function spawnObstacle(){
  if(frameCount%200===0) {
    obstacle=createSprite(600,(380,360))
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.08
    obstacle.velocityX=-6}
    
}
 function spawnMonkey(){
  
 {} 
 
}