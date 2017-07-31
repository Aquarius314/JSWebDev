var keyboardInfo = " ";
var leftArDown = false;
var rightArDown = false;

function keyDown(key) {
  keyboardInfo = key.keyCode + " down";
  if(key.keyCode == 37) {
    leftArrowDown();
  } else if(key.keyCode == 39) {
    rightArrowDown();
  }
}
function keyUp(key) {
  keyboardInfo = key.keyCode + " up";
  if(key.keyCode == 37) {
    leftArrowUp();
  } else if(key.keyCode == 39) {
    rightArrowUp();
  }
}

function leftArrowDown() {
  leftArDown = true;
  keyboardInfo = "left arrow down";
}

function rightArrowDown() {
  rightArDown = true;
  keyboardInfo = "right arrow down";
}

function leftArrowUp() {
  leftArDown = false;
  keyboardInfo = "left arrow up";
}

function rightArrowUp() {
  rightArDown = false;
  keyboardInfo = "right arrow up";
}
