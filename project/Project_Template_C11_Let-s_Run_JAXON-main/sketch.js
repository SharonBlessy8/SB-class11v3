var runner , runnerImg;
var leftB, rightB;
var path, pathImg;

function preload(){
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg =loadImage("path.png");
}

function setup(){

path=createSprite(200,200);
path.addImage("road",pathImg);
path.scale=1.2;
path.velocityY = 4;

runner = createSprite(100,300,10,10);
runner.scale = 0.08;
runner.addAnimation("Jake running", runnerImg)

leftB = createSprite(0,0,100,800);
leftB.visible=false;

rightB = createSprite(410,0,100,800);
rightB.visible =false

}


function draw(){
  background(0);
  runner.x= World.mouseX;

edges= createEdgeSprites();
runner.collide(edges[3]);
  runner.collide(rightB);
  runner.collide(leftB);

  if(path.y>400){
  path.y = height/2;
  }
 
  drawSprites();
}