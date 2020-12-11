//Create variables here
var  dog, happyDog, database, foodS, foodStock,dogImg1,dogImg2;
function preload()
{
  //load images here
  dogImg1=loadImage("images/dogImg.png")
  dogImg2=loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  
  dog=createSprite(250,250,20,20)
  dog.addImage(dogImg2)
  dog.scale=0.3
  
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(dogImg1)
}
  drawSprites();
  //add styles here
  textSize(20)
  fill(0)
  stroke("black")
text("Food Remaining:"+foodS,250,50)
}
function readStock(data){
foodS=data.val()
}


function writeStock(x){
  if(x<=0){
    x=0
  } else {
    x=x-1
  }
database.ref('/').update({
  Food:x
})
}