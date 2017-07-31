var mouseInfo = " ";

function mouseMoveHandler(e) {
  var relativeX = e.clientX - canvas.offsetLeft;
  var relativeY = e.clientY;
  mouseInfo = "Mouse: x=" + relativeX + " y=" + relativeY;
}
