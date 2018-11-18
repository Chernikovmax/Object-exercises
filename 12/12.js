function invert_key_value(obj) {
  if (typeof obj === "object") {
    let newObj = {};
    for (let key in obj) {
      newObj[obj[key]] = key;
    }
    return newObj;
  } else return console.error("You should push an object to replace it's keys/values!");
}

const book = {title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254};
console.log(invert_key_value(book));



class Someone {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = firstName + " " + lastName;
    this.age = age;
  }
}

const sara = new Someone("Sarah", "Paulson", 22)
console.log(invert_key_value(sara));
