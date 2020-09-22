var car1, car2,car3,car4,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car1=createSprite(50,200,50,50);
  car2=createSprite(50,250,50,50);
  car3=createSprite(50,300,50,50);
  car4=createSprite(50,350,50,50);
  wall=createSprite(150,200,60,height/2);
  car.velocityX = speed;
}

function draw() {
  background(255,255,255); 
  if(wall.x-car1.x < (car1.width+wall.width/2))
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if (deformation>180)
    {
      car1.shapecolor=color(255,0,0);
    }
    if (deformation<180 && deformation>100)
    {
      car2.shapecolor=color(230,230,0);
    }
    if (deformation<100)
    {
      car,shapecolor=color(0,255,0);
    }
  }
  drawSprites();
}