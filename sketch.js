let img;
function preload(){
  img=loadImage('NY.jpeg');
}
function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  
  camera(10,10,200+sin(frameCount*0.05)* 10,10,10,10,0,10,10);
  plane(100,100);
  
  background(145, 37, 16);
  rotateY(millis()/1000);
  push();
  noStroke();
  ambientLight(0);
  emissiveMaterial(55, 259, 145);
  torus(150,20,20,15);
  pop();
  
  push();
  fill(247, 69, 35);
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(250, 250, 250, -dirX, -dirY, -1);
  noStroke();
  texture(img);
  box(100,250);
  pop();
  
}