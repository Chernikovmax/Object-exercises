class BubbleSort {
  constructor(arr) {
    this.array = arr;
  }
  numericSort() {
    for (let i = 0; i < this.array.length-1; i++) {
      for (let j = 0; j < this.array.length -1 -i; j++) {
        if (this.array[j] > this.array[j+1]) {
          let temp = this.array[j];
          this.array[j] = this.array[j+1];
          this.array[j+1] = temp;
        }
      }
    }
    return this.array;
  }
}



let array = new BubbleSort([-2, 0, 1, 3, 4, 6, 2, 8, 17, -50, 9, 13, 13, 16, 12]);
console.log(array.numericSort());



// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length-1; i++) {
//     for (let j = 0; j < arr.length -1 -i; j++) {
//       if (arr[j] > arr[j+1]) {
//         let temp = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp;
//       }
//     }
//   }
//   return arr;
// }
