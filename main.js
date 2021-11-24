noseX=0;
noseY=0;
diffrence = 0;
function setup() {
video = createCapture(VIDEO);
video.size(550, 500);

canvas = createCanvas(550, 500);
canvas.position(560, 150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded() {
console.log('PoseNet Is Initialized');
}

function draw() {
background('#2d87d6');

document.getElementById("square_side").innerHTML = "Width and Height of a Square will be = " + diffrence +"px";
fill('#b5a44e');
stroke('#9661ba');
square(noseX, noseY, diffrence);
}

function gotPoses(results)
{
if (results.length > 0)
{
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("noseX = " +noseX +" noseY = " + noseY);

leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
diffrence = floor(leftWristX - rightWristX);
console.log("leftWristX =" + leftWristX + " rightWristX = "+ rightWristX + "diffrence = " + diffrence);
}
}






