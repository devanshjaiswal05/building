var man,man_image;
var building1
var door
var ground
var roof1
var gun,gun_image
var bullet


function preload() {
  
  gun_image = loadAnimation("assets/gun.png")
}

function setup() {
  createCanvas(windowWidth,1000)
building1 = createSprite(600,300,300,500)


man = createSprite(200,500,100,10)
  man.setCollider("rectangle",0,0,30,50)

ground = createSprite(200,555,200,10)
//roofs
roof1 = createSprite(600,470,300,5)
 gun = createSprite(225,525,20,10)
 gun.addAnimation("image",gun_image)
 gun.scale = 0.1
 roof = createSprite(60,470,900,5)
}

function draw() {
  background(255)
 
  
 //collides
 man.collide(roof1)
  man.collide(ground)
man.collide(roof)

  man.debug = true
  //if conditions
  if(keyIsDown(RIGHT_ARROW)){
    building1.velocityX = -2
    
    roof1.velocityX = -2
      }
    if (keyWentUp(RIGHT_ARROW)){
        building1.velocityX = 0
      
        roof1.velocityX = 0
      }
    if(keyIsDown(LEFT_ARROW)){
        building1.velocityX = 2
        
        roof1.velocityX = 2
      }
     if (keyWentUp(LEFT_ARROW)){
        building1.velocityX = 0
        
        roof1.velocityX = 0
      }
    if(keyIsDown(UP_ARROW)){
    man.velocityY = -6
    }
    if (keyCode === 32 && frameCount % 60 === 0){
      bullets()
    }
    
    
      
    
    
    
      man.velocityY = man.velocityY + 0.8
      
      
     ground.visible = false
     roof.visible = false
  
  drawSprites()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function bullets(){
  bullet = createSprite(200,200,10,10)
  bullet.velocityX = -3
}
