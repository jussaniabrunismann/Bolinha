const speed = 12;
const size = 64;

let ball = document.getElementById('ball');
ball.style.width = size +"px";
ball.style.height = size + "px";

let direction = "up-left";

setBallPosition(0, 0);

function onInterval() {
  changeDirection();
  moveBall();
}
    

function moveBall(){
  const ballPosition = getBallPosition();
  
  switch(direction){
    case "up-right":
      setBallPosition(
        ballPosition.top - speed,
        ballPosition.left + speed,
      );
      break;
    case "up-left":
      setBallPosition(
        ballPosition.top - speed,
        ballPosition.left - speed,
      );
      break;
    case "down-right":
      setBallPosition(
        ballPosition.top + speed,
        ballPosition.left + speed,
      );
      break;
    case "down-left":
      setBallPosition(
        ballPosition.top + speed,
        ballPosition.left - speed,
      );
      break;
  }
}

function changeDirection(){
  const screenEdges = getScreenEdges();
  const ballPosition = getBallPosition();

  if(ballPosition.top <= screenEdges.up){
    if(direction === "up-left") {
      direction ="down-right";
    }else if(direction === "up-right") {
      direction = "down-right";
    }    
  }else if (ballPosition.top >= screenEdges.down) {
    if(direction === "down-left") {
      direction = "up-left";
    }else if (direction === "down-right"){
      direction = "up-right";
    }
  }else if (ballPosition.left >= screenEdges.right) {
    if(direction === "down-right") {
      direction = "down-left";
    } else if (direction === "up-right"){
      direction = "up-left";
    }
  }else if (ballPosition.left <= screenEdges.left) {
    if(direction === "down-left") {
      direction = "down-right";
    } else if (direction === "up-left"){
      direction = "up-right";
    }
  }
}

function getScreenEdges(){
  return{
    up:0,
    right: window.innerWidth - size,
    down: window.innerHeight - size,
    left:0,
  }
}

function setBallPosition(top,left){
  ball.style.top = top + "px";
  ball.style.left = left + "px";
}

function getBallPosition(){
  return{
    top: parseInt(ball.style.top),
    left: parseInt(ball.style.left),
  };
}

setInterval(onInterval, 100);
