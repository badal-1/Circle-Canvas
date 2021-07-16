var mouseEvent = "none";
canvas = document.getElementById('n');
gc = canvas.getContext("2d");
color = "black";
we = 2;
canvas.addEventListener("mousedown", me);
function me(e)
{
color = document.getElementById("c").value;
we = document.getElementById("w").value;
radius = document.getElementById("r").value;
mouseEvent = "mouseDown";
}
canvas.addEventListener("mousemove", a);
function a(e)
{
cx = e.clientX - canvas.offsetLeft;
cy = e.clientY - canvas.offsetTop;
if (mouseEvent == "mouseDown") {
console.log("Current position of x and y are ");
console.log("x  = " + cx + "y = " + cy);
gc.beginPath();
gc.strokeStyle = color;
gc.lineWidth = we;
gc.arc(cx, cy, radius ,0 , 2 * Math.PI);
gc.stroke();
}
}
canvas.addEventListener("mouseup",muop);
function muop(e)
{
mouseEvent = "mouseUP";
}
canvas.addEventListener("mouseleave", lopp);
function lopp(e)
{
mouseEvent = "mouseleave";
}
function nu() {
gc.clearRect(0, 0, gc.canvas.width, gc.canvas.height);
}
