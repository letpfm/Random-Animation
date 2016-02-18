var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 16;
var x = canvas.width/2;
var y = canvas.height/2;
var dx = 3.5;
var dy = -3.5;
var r = Math.random();
var j = 0;
var touch = false;
var A = [];
A[0] = Math.round(Math.random()*255);
A[1] = Math.round(Math.random()*255);
A[2] = Math.round(Math.random()*255);
A[3] = Math.random() * 3;

function drawBall(A, x, y, ballRadius) {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "rgba("+A[0]+","+A[1]+","+A[2]+","+A[3]+")";
    ctx.fill();
    ctx.closePath();
}

function drawRect(A, x, y, ballRadius) {
	ctx.beginPath();
	ctx.rect(x-ballRadius, y-ballRadius, ballRadius*2, ballRadius*2);
	ctx.fillStyle = "rgba("+A[0]+","+A[1]+","+A[2]+","+A[3]+")";
	ctx.fill();
	ctx.closePath();
}

function random () {
	r = Math.random();
	if(r<0.01){j=1;}else if(r>0.98&&r<0.99){j=0;}
	if(j==1){drawRect(A, x, y, ballRadius);}else{drawBall(A, x, y, ballRadius);}

    if(x+dx>canvas.width-ballRadius||x+dx<ballRadius){dx=-dx*r;}
	if (y+dy<ballRadius||y+dy>canvas.height-ballRadius){dy = -dy*r;}

	if (Math.random()<0.04) {
	A[0]=Math.round(Math.random()*255);
	A[1]=Math.round(Math.random()*255);
	A[2]=Math.round(Math.random()*255);
	A[3]=Math.random()*3;
    }

	if(ballRadius>30){ballRadius--;}else if(ballRadius<17){ballRadius++;}
    
	if(dx>13){dx--;}else if(dx<-13){dx++;}
	if(dy>13){dy--;}else if(dy<-13){dy++;}
	
	x+=dx;y+=dy;
	dx+=r-Math.random();dy+=r-Math.random();
	ballRadius+=r-Math.random();
}
