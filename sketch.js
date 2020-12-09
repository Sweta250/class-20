function setup() {
  createCanvas(400,400);
  fixed = createSprite(100,100,50,50);
  fixed.shapeColor="red";
  fixed.debug=true;
  fixed.velocityX=1;

  moving=createSprite(200,100,50,50);
  moving.shapeColor="green";
  moving.debug=true;
  moving.velocityX=-1;

}

function draw() {
  background("pink"); 
  //moving.x=mouseX;
  //moving.y=mouseY; 
  console.log(moving.x-fixed.x);

  if(moving.x-fixed.x<moving.width/2+fixed.width/2&&
    fixed.x-moving.x<moving.width/2+fixed.width/2){
      fixed.velocityX=fixed.velocityX*(-1);
      moving.velocityX=moving.velocityX*(-1);
      moving.shapeColor="yellow";
  fixed.shapeColor="yellow";
    }
    if(moving.y-fixed.y<moving.height/2+fixed.height/2&&
      fixed.y-moving.y<moving.height/2+fixed.height/2){
        fixed.velocityY=fixed.velocityY*(-1);
      moving.velocityY=moving.velocityY*(-1);
      moving.shapeColor="yellow";
  fixed.shapeColor="yellow";
      }

if(moving.x-fixed.x<moving.width/2+fixed.width/2&&
  fixed.x-moving.x<moving.width/2+fixed.width/2&&
  moving.y-fixed.y<moving.height/2+fixed.height/2&&
  fixed.y-moving.y<moving.height/2+fixed.height/2){
  moving.shapeColor="yellow";
  fixed.shapeColor="yellow";
}

  drawSprites();
}