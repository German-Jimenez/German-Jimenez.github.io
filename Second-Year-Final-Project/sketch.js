var img;

//Buttons for the Cities
var button;
var button2;
var button3;
var button4;
var button5;
var button6;
var button7;
var button8;

//Buttons For Directions
var button9;

//Arrays with Information
var Location = ["Los Angeles,CA", "Bay Area,CA", "New York,NY","Portland,OR","Seattle,WA","Dallas,TX","Columbus,OH","Salt Lake City,UT"]
var Quality = ["Good", "Moderate", "USG", "Unhealthy", "Very Unhealthy", "Hazardous"]
var Color = ['Green','Yellow', 'Orange', 'Red', 'Purple', 'Maroon']

function setup(){
	createCanvas(920,550);
	// image source "https://www.google.com/imgres?imgurl=https%3A%2F%2Fdnlzsmybcpo0z.cloudfront.net%2Fgames%2Fimages%2F1446677138_Find_the_US_States&imgrefurl=https%3A%2F%2Fwww.sporcle.com%2Fgames%2FMatt%2Ffind_the_states&docid=xN9_rqBB2P_CzM&tbnid=iseXvg1kWZFIjM%3A&vet=10ahUKEwis1Oq-oJ7jAhVjMn0KHauUB64QMwicASgUMBQ..i&w=920&h=569&safe=strict&bih=561&biw=1280&q=usa%20map&ved=0ahUKEwis1Oq-oJ7jAhVjMn0KHauUB64QMwicASgUMBQ&iact=mrc&uact=8"
	img = loadImage('usa-map.png');
	//Los Angeles Button
	button = createButton('Los Angeles');
	button.position(45,470);
	//Bay Area Button
	button2 = createButton('Bay Area');
	button2.position(30,390);
	//New York Button
	button3 = createButton('New York');
	button3.position(800,340);
	//Portland Button
	button4 = createButton('Portland');
	button4.position(70,225);
	//Seattle Button
	button5 = createButton('Seattle');
	button5.position(80,180);
	//Dallas Button
	button6 = createButton('Dallas');
	button6.position(440,560);
	//Columbus Button
	button7 = createButton('Columbus');
	button7.position(640,370);
	//Salt Lake City Button
	button8 = createButton('Salt Lake City');
	button8.position(190,340);
	//Direction Button
	button9 = createButton('Directions');
	button9.position(853,693);
}

function draw(){
	image(img, 0, 0);
  	mousePressed();
	fill("Salmon");
  	textSize(16);
  	textAlign(CENTER);
  	text("(" + floor(mouseX) + ", " + floor(mouseY) + ")", mouseX, mouseY);
}

function mousePressed(){
	//Los Angeles Button
	if(mouseX > 38 && mouseX < 125 && mouseY > 314 && mouseY < 333){
		test(0,3,3);
	}
	//Bay Area Button
	if(mouseX > 23 && mouseX < 90 && mouseY > 235 && mouseY < 250){
		test(1,0,0);
	}
	// //New York Button
	if(mouseX > 792 && mouseX < 863 && mouseY > 174 && mouseY < 194){
		test(2,0,0);
	}
	//Portland Button
	if(mouseX > 62 && mouseX < 127 && mouseY > 69 && mouseY < 87){
		test(3,0,0);
	}
	//Seattle Button
	if(mouseX > 73 && mouseX < 129 && mouseY > 14 && mouseY < 34){
		test(4,0,0);
	}
	//Dallas Button
	if(mouseX > 432 && mouseX < 484 && mouseY > 394 && mouseY < 414){
		test(5,0,0);
	}
	//Columbus Button
	if(mouseX > 633 && mouseX < 707 && mouseY > 204 && mouseY < 224){
		test(6,0,0);
	}
	//Salt Lake City Button
	if(mouseX > 183 && mouseX < 280 && mouseY > 183 && mouseY < 203){
		test(7,0,0);
	}
	//Direction Buttons
	if(mouseX > 847 && mouseX < 919 & mouseY > 530 && mouseY < 546){
		direction();
	}
} 

//L is equal to Location, Q is equal to Quality, C is equal to Color, Q and C should be same number
function test(L,Q,C){
	fill('white');
	rect(790, 340, 100, 150);
	fill('black');
	text(Location[L], 840,360);
	text("Local Time",840,380);
	fill('red');
	text("Co2 Levels:",840,420);
	fill("black");
	text("N/A", 840,440);
	fill('red');
	text('Air Quality:', 840, 460);
	fill(Color[C]);
	text(Quality[Q],840,480);
}

function direction(){
	fill('black');
	textSize(30);
	text('Directions:', 400, 200);
	text('Hover over one of the cities', 400, 250);
	text('to see information of the local Air Quality', 400, 280);
}
