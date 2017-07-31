function render() {
    clear();
    var d = getDrawables();
    for(var i = 0; i < d.length; i++) {
      d[i].draw();
    }
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.fillStyle = "#000000";
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fill();
  ctx.closePath();
}
