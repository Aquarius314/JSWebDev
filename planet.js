class Planet {
  constructor(x, y, radius, radiusAmplitude, freq, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.radiusAmplitude = radiusAmplitude;
    this.freq = freq;
    this.color = color;
    this.drawHelp = false;
  }

  getCurrentRadius() {
    var curR = 0;
    var d = new Date();
    curR = this.radius + this.radiusAmplitude*Math.sin(d.getTime()*this.freq/Math.PI/1000);
    return curR;
  }

  circle(x, y, r, col) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2, false);
    ctx.strokeStyle = col;
    ctx.stroke();
    ctx.closePath();
  }

  draw() {
    ctx.beginPath();

    ctx.arc(this.x, this.y, this.getCurrentRadius(), 0, Math.PI*2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();

    if(this.drawHelp) {
      // Amplitude (smaller-bigger radius values)
      this.circle(this.x, this.y, this.radius-this.radiusAmplitude, "#000000");
      this.circle(this.x, this.y, this.radius+this.radiusAmplitude, "#000000");
      // middle
      this.circle(this.x, this.y, 1, "#000000");
    }

    ctx.closePath();
  }

}
