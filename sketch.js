var raindrops = [];

function setup() {
  createCanvas(800,400);
  for(var i = 0; i <500; i++){
    raindrops[i] = new RainDrop();
  }
}

function draw() {
  background(230,230,250);  
  for (var i = 0; i < raindrops.length; i++) {
    raindrops[i].fall();
    raindrops[i].display();
  }
}