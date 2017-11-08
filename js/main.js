var cloud  = document.getElementById('cloud');

var i = 0;

function moveCloud() {
  cloud.style.marginLeft = i + "px";
  if(i < screen.width) {
    i++;
    console.log("Working");
  } else {
    i = -2000;
  }
}

setInterval(moveCloud, 1);
