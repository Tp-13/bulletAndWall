var wall,thickness;
var bullet,speed,weight;
var damage

function setup() {
  createCanvas(1600,400);
  
  speed = random(223,331);
  weight = random(30,52)
  thickness = random(22,83)

  bullet = createSprite(50,200,75,40)
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  wall = createSprite(1200,200,thickness,height/2)
}

function draw() {
  background("black");

  if (wall.x-bullet.x < bullet.width/2+wall.width/2){
    damage = ((weight)*(speed)*(speed))/((thickness)*(thickness)*(thickness))
    
    if(damage < 10){
      wall.shapeColor = "green";
    }
    
    if(damage > 10){
      wall.shapeColor = "red";
    }
    

    bullet.velocityX = 0;
    bullet.collide(wall);
} 



  drawSprites();
}