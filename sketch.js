var canvas, bg;
var together;
var cat, catimg1, catimg2, catimg3, catimg4, mouse, mouseimg1, mouseimg2, mouseimg3, mouseimg4; 
function preload() {
    //load the images here
    bg= loadImage("images/garden.png");
    catimg1= loadImage("images/cat1.png");
    catimg2= loadImage("images/cat2.png");
    catimg3= loadImage("images/cat3.png");
    catimg4= loadImage("images/cat4.png");
    mouseimg1= loadImage("images/mouse1.png");
    mouseimg2= loadImage("images/mouse2.png");
    mouseimg3= loadImage("images/mouse3.png");
    mouseimg4= loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870, 600);
    cat.addAnimation("catSleeping", catimg1);
    cat.scale=0.2;

    mouse = createSprite(200, 600);
    mouse.addAnimation("catStanding", mouseimg1);
    mouse.scale=0.15;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("catLastImage", catimg3);
        cat.x=300;
        cat.scale=0.2;
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImage", mouseimg3);
        mouse.scale=0.15;
        mouse.changeAnimation("mouseLastImage");
    }

    drawSprites();
}


function keyPressed(){
  if(keyCode === LEFT_ARROW){
   cat.velocityX= -5;
   cat.addAnimation("catRunning", catimg2);
   cat.changeAnimation("catRunning");

   mouse.addAnimation("mouseTeasing", mouseimg3);
   mouse.frameDelay=21;
   mouse.changeAnimation("mouseTeasing");
  }
  //For moving and changing animation write code here


}
