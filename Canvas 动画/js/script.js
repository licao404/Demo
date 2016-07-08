var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;
var RADUIS = 5;
var MARGIN_LEFT = 250;
var MARGIN_TOP = 100;

var curTime = new Date();

window.onload = function() {
	var canvas = document.getElementById('myCanvas');
	canvas.width = WINDOW_WIDTH;
	canvas.height = WINDOW_HEIGHT;

	var context = canvas.getContext('2d');

	setInterval(function(){
		update(context);
	},50)
};

function update(context) {
	var d1 = new Date();
	if (d1.getSeconds() !== curTime.getSeconds()) {
		curTime = d1;
		render(context);
	}
}
function render(ctx) {
	
	var hours = curTime.getHours();
	var minutes = curTime.getMinutes();
	var seconds = curTime.getSeconds();
	console.log(hours);

	ctx.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);

	randerDigit(MARGIN_LEFT,MARGIN_TOP,Math.floor(hours/10),ctx);
	randerDigit(MARGIN_LEFT + 15*(RADUIS+1),MARGIN_TOP,Math.floor(hours%10),ctx);
	randerDigit(MARGIN_LEFT + 30*(RADUIS+1),MARGIN_TOP,10,ctx);
	randerDigit(MARGIN_LEFT + 39*(RADUIS+1),MARGIN_TOP,Math.floor(minutes/10),ctx);
	randerDigit(MARGIN_LEFT + 54*(RADUIS+1),MARGIN_TOP,Math.floor(minutes%10),ctx);
	randerDigit(MARGIN_LEFT + 69*(RADUIS+1),MARGIN_TOP,10,ctx);
	randerDigit(MARGIN_LEFT + 78*(RADUIS+1),MARGIN_TOP,Math.floor(seconds/10),ctx);
	randerDigit(MARGIN_LEFT + 93*(RADUIS+1),MARGIN_TOP,Math.floor(seconds%10),ctx);

}

function randerDigit(x,y,num,ctx) {

	var arr = digit[num];
	for (var i=0;i<arr.length;i++) {
		for (var j=0;j<arr[i].length;j++) {
			if (arr[i][j] === 1) {
				centerX = x + j*2*(RADUIS+1)+(RADUIS+1);
				centerY = y + i*2*(RADUIS+1)+(RADUIS+1);
				ctx.beginPath();
				ctx.arc(centerX,centerY,RADUIS,0,2*Math.PI);

				ctx.fill();
			}
		}
	}
}
