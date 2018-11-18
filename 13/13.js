// function hasKey(key, obj) {
//   for (let name in obj) {
//     if (name === key) {
//       return `This object has an "${key}" key inside and it's value: ${obj[key]}.`;
//     } else continue;
//   }
//   if ("undefined") {
//     return `This object has no "${key}" property.`;
//   }
// }

function hasKey(key, obj) {
  return (obj.hasOwnProperty.call(obj, key))?
    `This object has an "${key}" key inside and it's value: ${obj[key]}.`
    :
    `This object has no "${key}" property.`
  }

class User {
  constructor(firstName, lastName, birthday, sex, email, facebookID) {
    this.fullName = `${firstName} ${lastName}`;
    this.age = `${((str) => {
        const currentDate = new Date();
        let age = 0;
        if ((currentDate.getMonth() + 1) > str.split(".")[0] ||
          ((currentDate.getMonth() + 1) === str.split(".")[0]) &&
          currentDate.getDate() > str.split(".")[1]) {
          return  age = currentDate.getFullYear() - str.split(".")[2];
        } else return age = (currentDate.getFullYear() - 1) - (str.split(".")[2]);
      })(birthday)} years (birthday: ${birthday})`;
    this.sex = sex;
    this.email = email;
    this.facebookID = facebookID;
  }
}

const user = new User("Maxim", "Chernikov", "04.07.1993", "Male",
 "chernikovmax@outlook.com", "https://www.facebook.com/chernik.max");

console.log(hasKey("age", user));
console.log(hasKey("facebookID", user));
console.log(hasKey("fullName", user));
console.log(hasKey("cocaine", user));
console.log(hasKey("email", user));
console.log(hasKey("Batman", user));
console.log(hasKey("Sex, drugs and Rock'n'Roll", user));
