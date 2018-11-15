class CustomLibrary {
  constructor(array) {
    this.arr = array;
  }
  sortByKey(key) {
    if (typeof this.arr[0][key] === "number") {
      return this.arr.sort((a, b) => b[key] - a[key]);
    }
    if (typeof this.arr[0][key] === "string") {
      return this.arr.sort(function compareObjects(a, b) {
          const valueA = a[key].toLowerCase();
          const valueB = b[key].toLowerCase();
          let comparison = 0;
          if (valueA > valueB) {
            comparison = 1;
          } else if (valueA < valueB) {
            comparison = -1;
          }
          return comparison;
        });
    }
  }
}

let library = new CustomLibrary ([
   {
       title: 'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Steve Jobs',
       author: 'Walter Isaacson',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }]);

console.log(library.sortByKey("title"));
