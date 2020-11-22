
var canvas = document.getElementById("screen");
var ctx = canvas.getContext("2d");

//settings
var backgroundColor = "#000000";

//space for global variables. You may need some :)
//@TODO: add some variables

//implement your drawing here.
function draw(){
    //@TODO: implement your drawing here
}

//calculate, sort, or do whatever you want here
function update(){
    //@TODO: implement your calculations here
}

//clear the canvas
function clear(){
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