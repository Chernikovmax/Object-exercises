class CircleFormulas {
  constructor(r) {
    this.radius = r;
  }
  getCircleS() {
    return (Math.PI*(this.radius*this.radius)).toFixed(2);
  }
  getCircleP() {
    return ((2*Math.PI)*this.radius).toFixed(2);
  }
}

const someCircle = new CircleFormulas(6);
console.log(someCircle.getCircleS());
console.log(someCircle.getCircleP());
