function calculate() {
  controlPlayer();
  // wrapEdges();
  reactEdges();
  checkCollisions();
}

function controlPlayer() {
  if(leftArDown) {
    player.turnLeft();
  }
  if(rightArDown) {
    player.turnRight();
  }
}

function wrapEdges() {
  if(player.x > canvas.width) {
    player.x = 0;
  }
  if(player.x < 0) {
    player.x = canvas.width;
  }
  if(player.y > canvas.height) {
    player.y = 0;
  }
  if(player.y < 0) {
    player.y = canvas.height;
  }
}

function reactEdges() {
  var touched = false;
  if(player.x > canvas.width-player.radius) { // right wall
    touched = true;
    player.angle = Math.PI*2 - player.angle;
  }
  if(player.x < player.radius) {  // left wall
    touched = true;
    player.angle = Math.PI*2 - player.angle;
  }
  if(player.y > canvas.height-player.radius) {  // down wall
    touched = true;
    player.angle = Math.PI - player.angle;
  }
  if(player.y < player.radius) {  // left wall
    touched = true;
    player.angle = Math.PI - player.angle;
  }
  if(touched) {
    // alert("GAME OVER");
  }
}

function distance(ax, ay, bx, by) {
  return Math.sqrt(Math.pow(ax-bx, 2) + Math.pow(ay-by, 2));
}

function checkCollisions() {
  var objects = getColliders();
  for(var i = 0; i < objects.length; i++) {
    var ax = player.x, ay = player.y;
    var bx = objects[i].x, by = objects[i].y;
    var rSum = player.radius + objects[i].getCurrentRadius();
    if(distance(ax, ay, bx, by) < rSum) {
      // alert("COLLISION!");
      leftArDown = false;
      rightArDown = false;
    }
  }
}
