class CylinderVolume {
  constructor(r, h) {
    this.Pi = Math.Pi;
    this.radiusSquare = r*r;
    this.higth = h;
  }
  get CylVolume() {
    return V = (this.Pi * this.radiusSquare *this.higth).toFixed(4)
  }
  set CylVolume(value) {

  }
}
const someCylinder = new CylinderVolume(4, 12);
console.log(someCylinder.Pi);
