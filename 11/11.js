function allKeys_values(obj) {
  if (typeof obj === "object") {
    let keys = [];
    for (let key in obj) {
      keys.push(new Array(key, obj[key]));
    } return keys;
  } else return console.error("You should push an object to print it's keys!");
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

console.log(allKeys_values(sara));
