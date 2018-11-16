class Properties {
  constructor(obj) {
    this.object = obj;
  }
  getAllProperties() {
    return Object.getOwnPropertyNames(this.object);
  }
}

class Methods {
  constructor(obj) {
    this.object = obj;
  }
  getAllMethods() {
    return Object.getOwnPropertyNames(this.object).filter((property) =>
      typeof this.object[property] == "function")
  }
}


const arr = new Properties(Array);
const arr2 = new Methods(Array);

console.log(arr.getAllProperties());
console.log(arr2.getAllMethods());
