var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //creating division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //3rd row of plinko objects
  for (var j = 25; j <=width-20; j=j+50){
    plinkos.push(new Plinko(j,275));
  }
  
  //4th row of plinko objects
  for (var j = 13; j <=width-30; j=j+50){
    plinkos.push(new Plinko(j,375));
  }

    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //displaying plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //displaying divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //particles using frameCount
  if(frameCount%60 === 0){
    particles.push(new Particles(random(0,800),0))
  }

  //displaying particles 
  for(var p=0; p< particles.length; p++){
    particles[p].display();
  }

}