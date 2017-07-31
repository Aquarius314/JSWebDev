class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 10.0;
    this.angle = Math.PI;
    this.absoluteSpeed = 1.6;
    this.angularSpeed = 0.04;
    this.color = "#FF0000";
    this.tail = [new Point(this.x, this.y)];
    this.tailCounter = 0;
  }

  move() {

    if(this.tailCounter == 7) {
      this.tailCounter = 0;
      var rx = 0;
      var ry = 0;
      // rx = Math.floor(Math.random()*7 - 4);
      // ry = Math.floor(Math.random()*7 - 4);
      this.tail.push(new Point(this.x+rx, this.y+ry));
      if(this.tail.length >= 10) {
        this.tail.shift();
      }
    }
    this.tailCounter++;

    this.x += Math.sin(this.angle)*this.absoluteSpeed;
    this.y += Math.cos(this.angle)*this.absoluteSpeed;
  }

  turnLeft() {
    this.angle += this.angularSpeed;
  }

  turnRight() {
    this.angle -= this.angularSpeed;
  }

  drawTail() {

    ctx.fillStyle = "#404040";
    for(var i = 0; i < this.tail.length; i++) {
      ctx.beginPath();
      var t = this.tail[i]
      ctx.arc(t.x, t.y, 4, 0, Math.PI*2, false);
      ctx.fill();
      ctx.closePath();
    }

  }

  draw() {
    ctx.beginPath();

    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    ctx.fillStyle = this.color;
    ctx.fill();

    ctx.closePath();

    this.drawTail();

  }

};
