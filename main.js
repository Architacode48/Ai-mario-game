function preload() {
	world_start = loadSound("world_start.wav");
    mario_jump= loadSound("jump.wav");
	mario_coin= loadSound("coin.wav");
    mario_gameover= loadSound("gameover.wav");
    mario_die= loadSound("mariodie.wav");
	mario_kick= loadSound("kick.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	v1=createCapture(VIDEO);
	v1.parent('game_console');
    v1.size(800, 400)
	pn= ml5.poseNet(v1, modelLoaded);
	pn.on("pose", gotPoses);
}
function modelLoaded(){
	console.log("model loaded");
}
function gotPoses(results){
	if(results.length>0){
		console.log(results);
		noseX= results[0].pose.nose.x;
		noseY= results[0].pose.nose.y; 
	}
}
function draw() {
	game()
}






