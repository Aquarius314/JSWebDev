function chooseLevel(level) {
  switch(level) {
    case 1:
      level1();
      break;
    case 2:
      level2();
      break;
    case 3:
      level3();
      break;
  }
}

function level1() {
  choosePlanetType(1, 100, 100);
  choosePlanetType(1, 200, 200);
  choosePlanetType(1, 300, 300);
  choosePlanetType(1, 400, 400);
  choosePlanetType(1, 500, 500);
}

function level2() {
  choosePlanetType(1, 100, 200);
  choosePlanetType(2, 300, 400);
  choosePlanetType(3, 500, 200);
  choosePlanetType(4, 800, 400);
}

function level3() {
  choosePlanetType(4, 100, 100);
  choosePlanetType(4, canvas.width-100, 100);
  choosePlanetType(4, 100, canvas.height-100);
  choosePlanetType(4, canvas.width-100, canvas.height-100);
  choosePlanetType(4, canvas.width/2, canvas.height/2);
  choosePlanetType(1, 230, canvas.height/2);
  choosePlanetType(1, canvas.width-230, canvas.height/2);
}
