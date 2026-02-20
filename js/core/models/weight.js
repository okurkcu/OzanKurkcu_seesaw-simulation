export class Weight {
  constructor(weight, color, x, y) {
    this.weight = weight;
    this.color = color;
    this.x = x;
    this.y = y;
  }

  getSize() {
    // Base weight is 34kg. Every kg is adding 4 kg more.
    return 34 + (this.weight - 1) * 4;
  }
}
