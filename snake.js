let bg;
let s;
let food;

function setup() {
  s = new Snakegame();
  createCanvas(1352,655);//height,width
  bg = loadImage('Background.png');
  frameRate(10);
pickLocation();
}
function pickLocation(){
  let cols = floor(width/20);
  let rows = floor(height/20);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(20);
}


function keyPressed(){
  if(keyCode === UP_ARROW){
    s.dir(0,-1);
  }
    if(keyCode === DOWN_ARROW){
    s.dir(0,1);
  }
    if(keyCode === LEFT_ARROW){
    s.dir(-1,0);
  }
    if(keyCode === RIGHT_ARROW){
    s.dir(1,0);
  }
  

}

function draw() {
   background(bg);
if(s.eats(food)){
    pickLocation();
  }
  s.death();
  s.update();
  s.show();
  fill(0,0,255);
  rect(food.x,food.y,20,20);
}
