//This game was created throughout the 'Code Your First Arcade Game' course in Udemy 
var canvas;
var canvasContext;
var ballX = 50;
var ballY = 50;
var ballSpeedX = 10;
var ballSpeedY = 4;


var player1Score = 0;
var player2Score = 0;
const WINNING_SCORE = 5;

var showingWinScreen = false;

var paddle1Y = 250;
var paddle2Y = 250;
const PADDLE_HEIGHT = 100;
const PADDLE_THICKNESS = 10;


window.onload = function() {
  $('.p1ScoreText').text("Player 1:");
  $('.p2ScoreText').text("Player 2:");
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');
  var framesPerSecond = 30;
  setInterval(function(){moveEverything();drawEverything();}, 1000/framesPerSecond );

  canvas.addEventListener('mousedown',handleMouseClick);

  canvas.addEventListener('mousemove',
      function(evt){
        var mousePos = calculateMousePos(evt);
        paddle1Y = mousePos.y - (PADDLE_HEIGHT/2);
      });
};

$('.score').css(
  {
    "font-size":"32px",
    "text-align":"center"
  });

function calculateMousePos(evt){
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;
  var mouseX = evt.clientX - rect.left - root.scrollLeft;
  var mouseY = evt.clientY - rect.top - root.scrollTop;
  return{
    x:mouseX,
    y:mouseY
  };
}

function handleMouseClick(evt){
  if(showingWinScreen){
    player1Score = 0;
    player2Score = 0;
    showingWinScreen = false;
  }
}

function ballReset(){
  if(
    player1Score >= WINNING_SCORE ||
    player2Score >= WINNING_SCORE){
      showingWinScreen = true;
    }
  ballSpeedX = -ballSpeedX;
  ballX = canvas.width/2;
  ballY = canvas.height/2;
}

function computerMovement(){
  var paddle2Ycenter = paddle2Y + (PADDLE_HEIGHT/2);
  if(paddle2Ycenter < ballY-35){
    paddle2Y += 7;
  } else if(paddle2Ycenter > ballY+35){
    paddle2Y -= 7;
  }
}

function moveEverything(){
  computerMovement();
  ballX += ballSpeedX;
  ballY += ballSpeedY;
  if(ballX < (PADDLE_THICKNESS + 5)) {
    if(ballY > paddle1Y &&
       ballY < paddle1Y + PADDLE_HEIGHT){
         ballSpeedX = -ballSpeedX;
         var deltaY = ballY - (paddle1Y+PADDLE_HEIGHT/2);
         ballSpeedY = deltaY * '.35';
       }
    else if(ballX = 1){
    player2Score++;
    updateScore();
    ballReset();
    }
  }
  if(ballX > canvas.width-(PADDLE_THICKNESS + 5)) {
    if(ballY > paddle2Y &&
       ballY < paddle2Y + PADDLE_HEIGHT){
         ballSpeedX = -ballSpeedX;
         var deltaY = ballY - (paddle2Y+PADDLE_HEIGHT/2);
         ballSpeedY = deltaY * .35;
       }
    else if(ballx = canvas.width){
    player1Score++;
    updateScore();
    ballReset();
    }
  }
  if(ballY < 5) {
    ballSpeedY = -ballSpeedY;
  }
  if(ballY > canvas.height - 5) {
    ballSpeedY = -ballSpeedY;
  }
}

function drawNet(){
  for(var i=0;i<canvas.height; i+=40){
    colorRect(canvas.width/2-1,i,2,20,'white');
  }
}

function drawEverything() {
  // Draws on Canvas
  colorRect(0,0,canvas.width,canvas.height,'#0daa15');
  if(showingWinScreen){
    canvasContext.fillStyle = "white";
    if (player1Score >= WINNING_SCORE && player2Score < WINNING_SCORE){
      canvasContext.fillText("Player 1 Won!",400,100);
      $('.p1ScoreText').text("Player 1:");
      $('.p2ScoreText').text("Player 2:");
    }
    else if (player2Score >= WINNING_SCORE && player1Score < WINNING_SCORE){
      canvasContext.fillText("Player 2 Won! Try Again!",400,100);
      $('.p1ScoreText').text("Player 1:");
      $('.p2ScoreText').text("Player 2:");
    }
    canvasContext.fillText("Click to Continue",400,125);
      $('.p1ScoreText').text("Player 1:");
      $('.p2ScoreText').text("Player 2:");
    return;
  }

  // Player Paddle
  colorRect(0,paddle1Y,PADDLE_THICKNESS,PADDLE_HEIGHT,'white');
  colorRect(canvas.width-PADDLE_THICKNESS,paddle2Y,PADDLE_THICKNESS,PADDLE_HEIGHT,'white');
  drawNet();
  colorCircle(ballX,ballY,10,'white');
}

function colorCircle(centerX,centerY,radius,drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX,centerY,radius,0,Math.PI*2,true);
  canvasContext.fill();
}

function colorRect(leftX,topY,width,height,drawColor){
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect(leftX,topY,width,height);
}

function updateScore(){
  $('.p1ScoreText').text("");
  $('.p2ScoreText').text("");
  $('.p1ScoreText').append("Player 1: " + player1Score);
  $('.p2ScoreText').append("Player 2: " + player2Score);
}
