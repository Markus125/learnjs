//lipp
const canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
ctx.rect(150, 10, 100, 30); 
ctx.fillStyle = "#0072CE";
ctx.fillRect(150, 10, 100, 30)
ctx.rect(150, 40, 100, 30);
ctx.fillStyle = "#000000";
ctx.fillRect(150, 40, 100, 30)
ctx.rect(150, 70, 100, 30);
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(150, 70, 100, 30)

ctx.rect(150, 10, 100, 90);
ctx.stroke();

//täheke

ctx.beginPath();
ctx.moveTo(300, 300); 
ctx.lineTo(320, 315);
ctx.lineTo(310, 295);
ctx.lineTo(300, 315);
ctx.lineTo(318, 300);
ctx.lineTo(280, 50);
ctx.stroke();

//Rõngas
ctx.beginPath();
ctx.arc(80, 70, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(80, 70, 50, 5, 20);
ctx.fillStyle
ctx.stroke();

