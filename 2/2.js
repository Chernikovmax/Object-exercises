class CylinderVolume {
  constructor(r, h) {
    this.radiusSquare = r*r;
    this.height = h;
  }
  getCylinderV() {
    return (Math.PI * this.radiusSquare *this.height).toFixed(4)
  }
}
const someCylinder = new CylinderVolume(4, 12);
console.log(someCylinder.getCylinderV());
