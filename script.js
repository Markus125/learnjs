
const canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
//lipp
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
ctx.moveTo(115,70);
ctx.lineTo(135,90);
ctx.lineTo(125,60);
ctx.lineTo(115,90);
ctx.lineTo(135,70);
ctx.lineTo(115,70);
ctx.stroke();


//Rõngas
ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.arc(100, 50, 30, 0, Math.PI/100*360);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100, 50);
ctx.lineTo(85, 15); ctx.lineTo(115, 15);
ctx.lineTo(100, 50);
ctx.fillStyle();

ctx.beginPath();
ctx.lineWidth = 15;
ctx.strokeStyle = 'white';
ctx.arc(100, 50, 40, 0, Math.PI/100*360);
ctx.closePath();
ctx.stroke();


