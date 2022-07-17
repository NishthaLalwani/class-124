rightWristX=0;
leftWristY=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,550);
    canvas = createCanvas(550,550);
    canvas.position(560,160);
    posenet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}

function modelLoaded(){
    console.log('Posenet is Initialized');
}

function gotPoses(results){
    if(results.length > 0);
    {
        console.log(results);
    }
}

function draw(){
    background('#87CEEBx');
}

 
