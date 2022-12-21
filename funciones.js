filtrox=0;
filtroy=0;
function preload()
{

}
function setUp()
{
createCanvas(0, 0, 400, 400),
 canvas.center();
 video=createCapture(VIDEO);
 video.size(400,400);
 video.hide();
 poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on('pose' , gotPoses);
}
function modelLoaded()
{
  console.log('poseNet esta inicializado');
}
function gotPoses(results)
{
    if(results.lenght > 0)
    {
        filtrox = results[0].pose.filtro.x;
        filtroy = results[0].pose.filtro.y;
        console.log(results);
        console.log("filtro x = " + results[0].pose.filtro.x);
        console.log("filtro y = " + results[0].pose.filtro.y);
        
    } 
}
function draw()
{
 image(video,0,0,400,400),
}
function save()
{
    save('myFilterImage.png');
}