class Player {
  constructor() {
    this.x = 50;
    this.y = height - 50;
    this.velocitY = 0;
    this.size = 50;
    this.gravity = 2;
  }
  show() {
    image(playerImg, this.x, this.y, this.size, this.size);
  }
  jump() {
    if (this.y == height - this.size) {
      this.velocitY = -25;
    }
  }
  move() {
    this.velocitY = this.velocitY + this.gravity;
    this.y = this.y + this.velocitY;
    this.y = constrain(this.y, 0, height - this.size);
  }
  collided(currentObs) {
    let isColliding = collideRectRect(
      this.x,
      this.y,
      this.size,
      this.size,

      currentObs.x,
      currentObs.y,
      currentObs.size,
      currentObs.size
    );
    return isColliding;
  }
}
