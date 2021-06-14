var king,kingimg,king2
var s1,s2,s3,s4,s5,s6
var s1img, s2img,s3img, s4img, s5img,s6img
var bg;
var invsground
var w1,w1img,w2,w2img
var PLAY = 1
var END = 0
var gameState = PLAY
var life=15
var bar=5
var bar2=14
var bar3=24
var w3,w3img,w32
var level=1
var w4,w4img
var wd,wdimg
var edge1,edge2




function preload(){
  kingimg = loadImage("g.png")
 
  resetimg = loadImage("reset.png")
  king2=loadImage("f.png")
  s1img = loadImage("a.png")
  s2img = loadImage("e.png")
  s3img = loadImage("d.png")
  bg = loadImage("bg.png")
 w1img = loadImage("w1/w2/b3.png")
 
 w2img = loadImage("w1.png")
  w3img = loadImage("w1.png")
  w4img = loadAnimation("w4/a1.png","w4/a2.png","w4/a3.png","w4/a5.png","w4/a6.png","w4/a7.png")
  
  wdimg = loadAnimation("wd/wd6.png")
  
}

function setup(){
  createCanvas(1200,500);
  
  
  king = createSprite(150,380)
  king.addImage(kingimg)
  king.scale = 1
  king.setCollider("rectangle",0,0,80,110)
  invsground = createSprite(600,380,1200,10)
  //king.debug=true

  s1 = createSprite(1400,310)
  s1.addImage(s1img)
  s1.velocityX=-4
  //s1.debug=true
  s1.setCollider("rectangle",0,0,170,170)

  edge1 = createSprite(40,250,10,500)
  edge1.visible = false
  edge2 = createSprite(1160,250,10,500)
  edge2.visible = false

  w4 = createSprite(1080,340)
  w4.addAnimation("axe",w4img)
  w4.velocityX=0
  w4.scale=0.17
  w4.visible =false


  w1 = createSprite(200,310)
  w1.addImage("weapon",w1img)
  w1.scale = 0.4
  w1.velocityX = 0
  w1.visible=false
 // w1.debug=true
  w1.setCollider("rectangle",0,0,400,80)

  w2 = createSprite(1080,340)
  w2.addImage(w2img)
  w2.scale = 0.4
  w2.velocityX = 0
  w2.visible=false

  w3 = createSprite(1080,340)
  w3.addImage(w3img)
  w3.scale = 0.4
  w3.velocityX = 0
  w3.visible=false

  wd = createSprite(1080,340)
  wd.addAnimation("spear",wdimg)
  wd.velocityX =0
  wd.scale = 0.4
  wd.visible = false
 
  s2 = createSprite(1400,310)
  s2.velocityX = 0
  s2.addImage(s2img)
  //s2.debug = true
  s2.setCollider("rectangle",0,0,170,170)

  s3 = createSprite(1400,310)
  s3.velocityX = 0
  s3.addImage(s3img)
  //s3.debug = true
  s3.setCollider("rectangle",0,0,170,170)

 
}

function draw(){
  background(bg);


  fill("black")
  textFont("public secret demo")
  textSize(20)
  text("YOUR LIFE: " , 320,30)

  textFont("caramel sweets")
  text( life +"💖",415,30)
 
 if(gameState === PLAY){
  
  fill("black");
  textFont("CARAMEL SWEETS");
  textSize(15);
  text(" S - TO SHOOT",10,30);
  
  fill("black")
  textFont("arial")
  textSize(10)
  text("(after shooting it takes some time to reload)",110,25)

  fill("black")
  textFont("caramel sweets")
  textSize(18)
  text("(also use arrows to move, jump and escape)",20,75)

  /*fill("black");
  textFont("CARAMEL SWEETS");
  textSize(15);
  text(" SPACE - TO JUMP",10,50);*/

  fill("black");
  textFont("CARAMEL SWEETS");
  textSize(20);
  text("| KILL THE ENEMY TO GET A NEW WEAPON 🏹 and to upgrade your self",420,80);

  /*fill("black")
  textFont("arial")
  textSize(10)
  text("(jump to escape from enemies)",130,50)*/

  fill("red")
  textFont("impact")
  textSize(23)
  text("Weapon Status: ",500,30)

  fill("red")
  textFont("public secret demo")
  textSize(23)
  text("WARNING: ",810,30)

  fill("black")
  textFont("public secret demo")
  textSize(18)
  text("do not go near to the enemies, they may kill you!!!",910,10,290,70)
 
  king.collide(invsground)
  invsground.visible = false
  king.collide(edge1)
  //king.debug = true

  if((keyDown("space") || keyDown("up") ) && king.y >= 300){
    king.velocityY = -15
   
  }
  if ((keyDown("right"))){
    king.x=king.x+10
    
  }
  if ((keyDown("left"))){
    king.x=king.x-10
  
  }

  if(keyDown("s")){
    w1.visible=true
    w1.velocityX=10
  }

  king.velocityY = king.velocityY + 0.8

  

  if(w2.x <= -300){
    w2.x = 1080
  }

  if(w3.x<=-400){
    w3.x = 1080
  }
 
  if(w1.x === 200){
    fill("black")
    textFont("arial")
    textSize(22)
    text(" Reloaded 👍",650,30)

  }
  else {
    fill("black")
    textFont("arial")
    textSize(22)
    text("Not available 👎",650,30)
}
  if(w1.x> 2000){
    w1.velocityX=0
    w1.velocityY=0
    w1.x = 200
    w1.y=310
    w1.visible=false
    
  }
  if(s1.x===1100){
    s1.velocityX = 0
    w2.velocityX = -12
    w2.visible = true
  }
  if (bar!=0){
  fill("black")
    textFont("caramel sweets")
    textSize(22)
    text(bar+"💖",s1.x,s1.y-150)
  }
  if(life === 0||life===-1){
    gameState = END
    life=0
  }
  if(life === -1){
    life = 0
  }

  if(w1.isTouching(s1)&&w1.y>300){
    bar = bar-1
    w1.x=1300
    w1.y=310
  }
  if(bar === 0){
    
    s1.destroy()
    
    w2.destroy()
    w3.destroy() 
    firstlord()
  }

  
  if( bar<=3 && s1.x===1100){
    w3.velocityX = -12
    w3.visible = true
  }
  
 }
 //////////////////////////////////////////////////////////////////////
 if(king.isTouching(w2)&&w2.x<king.x-10){
   life=life-1
   w2.x = 1080
   
 }

 if((king.isTouching(w3)||king.isTouching(s1)||king.isTouching(s2))&& w3.x<king.x-10){
   life=life-1
   w3.x = 1080
 }

 if((king.isTouching(wd)||king.isTouching(s3))){
  life=life-2
  wd.x = 1080
 }
 
 if(gameState === END){
   king.visible=false
   w1.visible=false
   w2.visible=false
   w3.visible=false
   s2.visible=false
   w4.visible=false
   s1.visible=false
   s3.visible=false
   wd.visible=false
   life=0
   background("rgba(0,0,0,0.7)")
   fill("red")
   textSize(50)
   textFont("caramel sweets")
   stroke("black")
   strokeWeight("06")
   text("  GAME OVER  ",400,230)

   fill("gold")
   textSize(30)
   textFont("caramel sweets")
   stroke("black")
   strokeWeight("06")
   text("Reload the page to get Another Chance",300,270)

   /*reset = createSprite(570,320)
   reset.addImage(resetimg)
   reset.scale = 0.5*/

   
 
 }
 
  
  drawSprites()

}

function firstlord(){
level = level+1





s2.velocityX=-4

if(s2.x===1100){
  w4.velocityX=-12
  w4.visible=true
  s2.velocityX=0

}

if (level===2){
  life=life+3
}

if(w4.x<=-300){
  w4.x=1080
}

if(king.isTouching(w4)){
  life=life-1
  w4.x=1080
}

if (bar2!=0){
  fill("black")
    textFont("caramel sweets")
    textSize(22)
    text(bar2+"💖",s2.x,s2.y-150)

}

if(w1.isTouching(s2)&&w1.y>300){
  bar2 = bar2-2
  w1.x=600
  w1.y=600
}
if(bar2 === 0){
  s2.destroy()
  w2.destroy()
  w3.destroy() 
  w4.destroy()
  secondlord()
  
}
}
 
function secondlord(){
  level=level+1
  
  king.setCollider("rectangle",0,0,100,300)
  king.addImage(king2)
  king.scale=0.5

  if((keyDown("space") || keyDown("up") ) && king.y >= 270){
    king.velocityY = -15
   
  }

  s3.velocityX = -4

  if(bar3!=0){
    fill("black")
    textFont("caramel sweets")
    textSize(22)
    text(bar3+"💖",s3.x,s3.y-150) 
  }

  if(wd.x<=-300){
    wd.x = 1080
  }
  
  //wd.debug = true
  wd.setCollider("rectangle",-100,0,460,50)

  if(s3.x===1100){
   wd.velocityX = -12
   wd.visible = true
   s3.velocityX = 0
   
  }
  if(w1.isTouching(s3)&&w1.y>300){
    bar3 = bar3-3
    w1.x=600
    w1.y=600
  }

  if(bar3 === 0){
    s3.destroy()
    wd.destroy()
    
  }


}































































