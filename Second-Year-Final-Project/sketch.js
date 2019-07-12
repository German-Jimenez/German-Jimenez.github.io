var img;
function setup(){
	createCanvas(1000,550);
	img = loadImage('usa-map.png');
}
function draw(){
  image(img, 0, 0);
  //LA Circle
  Circle(50,300);
  //BayArea Circle
  Circle(40,250);
  //New York Circle
  Circle(810, 190);
  //Miami Circle
} 

 function Circle(x,y){
 	stroke('black');
 	ellipse(x,y,20,20);
 }
