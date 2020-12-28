var hypnoticBall;
var database;




function setup(){
    database = firebase.database();
    createCanvas(400,400);
    hypnoticBallPosition = database.ref("ball/position");
    hypnoticBallPosition.on("value", readPosition);
    
    hypnoticBall = createSprite(200,200,10,10);
    hypnoticBall.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    if(hypnoticBall.x < -14){
hypnoticBall.x = 511;

    } 
    if(hypnoticBall.x > 512){
        hypnoticBall.x = -13;   
    } 
    if(hypnoticBall.y < -13){
hypnoticBall.y = 511;
    }
    if(hypnoticBall.y > 512){
        hypnoticBall.y = -11;
    }
     drawSprites();
}


function readPosition(data){
position = data.val();
hypnoticBall.x = position.x;
hypnoticBall.y = position.y;

}
function writePosition(x,y){
    database.ref('ball/position').set(
        {
            x:position.x + x,
            y:position.y + y
        }
    );
}