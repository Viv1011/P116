mosutacheX=0;
moustacheY=0;

function preload() {
    moustache_image = loadImage('https://i.postimg.cc/3wf6ttHp/moustache-image.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) 
{
    if (results.length > 0)
    {
      console.log(results);
      mosutacheX = results[0].pose.moustache.x;
      moustacheY = results[0].pose.moustache.x;
      console.log("moustache x = " + moustacheX);
      console.log("moustache y = " + moustacheY);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(moustache_image, mosutacheX, moustacheY, )
}

function take_snapshot() {
    save('FilterApp.png');
}