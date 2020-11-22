var canvas = document.getElementById("screen");
var ctx = canvas.getContext("2d");

//settings
var backgroundColor = "#000000";

//space for global variables. You may need some :)
var angle = document.getElementById("angle").value;
var lenght = document.getElementById("length").value;
var recursion = document.getElementById("recursion").value;

//implement your drawing here.
function draw(){

    //draw some stats and the title to the canvas
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText("JavaScript Canvas V-Tree", 0, 15); 
    ctx.font = "10px Arial";
    ctx.fillText("Depth: " + recursion, 0, 40); 
    ctx.fillText("Angle: " + angle, 0, 30); 
    ctx.fillText("Lenght: " + lenght, 0, 50); 

    //set the new center
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.beginPath();
    ctx.strokeStyle = '#FFFFFF';

    //draw the tree
    drawTree(recursion,angle,lenght);

    ctx.closePath();
    ctx.stroke();
}

function drawTree(j, angle, lenght){
    
    if(j <= 0){
        return;
    }

    ctx.save();
    ctx.rotate((angle - (j * document.getElementById("angle-change").value)) * (Math.PI / 180));
    ctx.moveTo(0, 0);
    ctx.translate(0, -lenght - (j * document.getElementById("length-change").value));
    ctx.lineTo(0, 0);

    drawTree(j - 1,angle, lenght);
    ctx.restore();

    ctx.save();
    ctx.rotate((-angle + (j * document.getElementById("angle-change").value)) * (Math.PI / 180));
    ctx.moveTo(0, 0);
    ctx.translate(0, -lenght  - (j * document.getElementById("length-change").value));
    ctx.lineTo(0, 0);

    drawTree(j - 1,angle, lenght);
    ctx.restore();
}

//calculate, sort, or do whatever you want here
function update(){
    angle = document.getElementById("angle").value;
    lenght = document.getElementById("length").value;
    recursion = document.getElementById("recursion").value;
}

//clear the canvas
function clear(){
    ctx.resetTransform();
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

//if the user changes the size of the window we have do recalculate
function resizeCanvas(){
    canvas.width = window.innerWidth - 20;
    //let us keep this sixteen by nine
    canvas.height = ((window.innerWidth) / 16) * 9;
}

//let us call the function once at the start to get the user's canvas size
resizeCanvas();

window.addEventListener('resize', resizeCanvas);

//this block will call the function clear, update, and draw all the time
window.setInterval(function(){
    clear();
    update();
    draw();
  }, 1);