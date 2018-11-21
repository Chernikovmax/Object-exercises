function allKeyValues(obj) {
  if (typeof obj === "object") {
    let values = [];
    for (let key in obj) {
      values.push(obj[key]);
    } return values;
  } else return console.error("You should push an object to print it's key values!");
}

class Someone {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = firstName + " " + lastName;
    this.age = age;
  }
}

const sara = new Someone("Sarah", "Paulson", 22)

console.log(allKeyValues(sara));
