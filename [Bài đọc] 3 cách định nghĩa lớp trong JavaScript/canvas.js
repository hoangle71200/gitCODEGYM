// Đường thẳng
// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.moveTo(0,0);
// ctx.lineTo(200,100);
// ctx.stroke();

// Đường tròn
// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.arc(95,50,40,0,2*Math.PI);
// ctx.stroke();

// Viết chữ
// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.font = "30px Arial";
// ctx.fillText("Hello World",10,50);
// Hoặc
// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.font = "30px Arial";
// ctx.strokeText("Hello World",10,50);

// Hiệu ứng Gradient
// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");

// // Create gradient
// var grd = ctx.createLinearGradient(0,0,200,0);
// grd.addColorStop(0,"red");
// grd.addColorStop(1,"white");

// // Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(10,10,150,80);

// Hiệu ứng gradient tròn
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);