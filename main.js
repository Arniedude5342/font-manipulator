
difference = 0;
right_wristX = 0;
left_wristX = 0;


function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw () {
    background('#969A97');

    document.getElementById("font_size").innerHTML = "font size of the text will be "+ difference + " px";
    textSize(difference);
    fill('#FFE787');
    text('Arnav Malhotra', 50, 400);
}

function modelLoaded() {
    console.log('poseNet is Initialized');

}
 function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        left_wristX = results[0].pose.leftWrist.x;
        right_wristX = results[0].pose.rightWrist.x;
        difference = floor(left_wristX - right_wristX);
        console.log("Left Wrist X = "+left_wristX + "Right Wrist X = "+right_wristX)
    }
 }