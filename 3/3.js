function bubbleSort(arr) {
  for (let i = 0; i < arr.length-1; i++) {
    for (let j = 0; j < arr.length -1 -i; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([-2, 0, 1, 3, 4, 6, 2, 8, 17, -50, 9]));
