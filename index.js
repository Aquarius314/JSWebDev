var myButton = document.querySelector('button');
if(myButton === null) {
  console.log("myButton is null");
}
var myHeading = document.querySelector('h1');
var myImage;

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Z local storagu, ' + storedName;
}

document.querySelector('img').onclick = function() {
  console.log("Image clicked");
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/skurwol.png') {
    myImage.setAttribute('src', 'images/dan_icon.jpg');
  } else {
    myImage.setAttribute('src', 'images/skurwol.png');
  }
}

document.querySelector('button').onclick = function() {
  console.log("Button clicked");
  setUserName();
}

document.querySelector('html').onclick = function() {
  // console.log("HTML clicked");
}


function setUserName() {
  console.log("Setting username");
  var myName = prompt('Please enter your name');
  if(myName !== null) {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Chuj chuj chujow sto :), panie ' + myName;
  } else {
    alert("Please type your name!");
    setUserName();
  }
}
