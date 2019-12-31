//havoc

//creates array to store links of creature
var creature = []; 

var y;
var x;
var xoff = 0.0
var yoff = 0.0
var count = 0

//creates variables for the starting position of the creature
//var positions = [(50, 50), (100, 100), (200,)]
var positionX = 10;
var positionY = 170;

//creates a variable for the size and length of the creature
var linkDiameter = 70;
var numLinks = 20;

var speed = .5

var targetX = 200
var targetY = 200

function setup() {
	createCanvas(710, 300);
	strokeWeight(0);


}

function draw() {
	count += 1
	background(255);





	targetX = targetX*.9 +  .1*mouseX
	targetY = targetY*.9 +.1*mouseY

	// if(round(targetX) == round(positionX) &&
	// 	round(targetY) == round(targetX)){

	// } 


	if(frameCount == 1){
		createLinks();
	}else{
		updateLinks();

	}


	drawCreature();
		
}

function drawCreature(){
	//iterates through every object in creature array
	// print(creature.length)
	for(i = 0; i < creature.length; i++){	
		//var colorA = color(244, 228, 58);
     	var colorB = color(247, 107, 28)
     	var colorA = color(250, 217, 97)
   		fill(lerpColor(colorA, colorB, i/(creature.length)));
		//draws creature
		creature[i].render();
	}	
}

function createLinks(){
	//creates variables for distance between mouse and position of most
	//recent link
	// this.distBetweenMouseAndCreatureX = targetX - positionX;
	// this.distBetweenMouseAndCreatureY = targetY - positionY;

	//creates iterations based on the frameCount
	for(i = 0; i < numLinks; i++){

		this.newLink = new creatureLink(positionX, positionY);
		// //pushes new link into creature array
		creature.push(this.newLink);

		}
	}

function updateLinks(){

	
	this.distBetweenMouseAndCreatureX = targetX - positionX;
	this.distBetweenMouseAndCreatureY = targetY - positionY;

			this.previousPositionX = constrain(positionX, 
			0 + linkDiameter/2 + 8, width - linkDiameter/2 - 8);
		this.previousPositionY = min(positionY, height - linkDiameter/2 - 12);

	this.newLink = new creatureLink(positionX, positionY);

			// //pushes new link into creature array
	creature.push(this.newLink);

		// //removes oldest link from creature array
	
	creature.shift();

	positionX = constrain(map(this.distBetweenMouseAndCreatureX, 0, 
		          width, this.previousPositionX, this.previousPositionX + linkDiameter / speed),
                linkDiameter/2,
                width-(linkDiameter/2));
	positionY = constrain(map(this.distBetweenMouseAndCreatureY, 0, 
		          width, this.previousPositionY, this.previousPositionY + linkDiameter / speed),
                linkDiameter/2,
                height-(linkDiameter/2));	

}


function creatureLink(posX, posY){

	//stores position of link
  	this.x = posX;
  	this.y = posY;

  	this.render = function(){


		ellipse(this.x, this.y, linkDiameter, linkDiameter)


	}
}




