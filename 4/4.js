class CustomString {
  constructor(str) {
    this.string = str;
  }
  subset() {
    let result = [];
    for (let i = 0; i < this.string.length; i++) {
      for (let j = 1; j <= this.string.length - i; j++) {
        result.push(this.string.substr(i, j));
      }
    }
    return result;
  }
}

const someString = new CustomString('dog');
console.log(someString.subset());
