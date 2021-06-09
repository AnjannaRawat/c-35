var ball,database,position;
var ballPosition;
function setup(){

    database=firebase.database();

    createCanvas(500,500);

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    ballPosition=database.ref('ball/position')
    ballPosition.on("value",readPosition)

}

function draw(){
    background("white");

    if (keyDown("left")){
        
        writeposition(-1,0)
    }

if (keyDown("right")){
  
    writeposition(1,0)
}

if (keyDown("up")){
  writeposition(0,-1)
}

if (keyDown("down")){
   writeposition(0,1)
}
drawSprites();
}

function readPosition(data){
position=data.val();
ball.x=position.x
ball.y=position.y
}

function writeposition(x,y){
    database.ref('ball/position').set({
        'x':position.x+x,
        'y':position.y+y
    })

}
