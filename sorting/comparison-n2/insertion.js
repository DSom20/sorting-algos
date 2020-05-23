/*
  O(n^2)

  One Liner: Poker Sort. 
  Treat lefmost elements as sort. Pick one element at a time,
  from just right of sorted elements, compare to each- if sorted element is >= selected element, assign sorted element's value to spot above it to potentially
  make room for selected element to take its spot; if sorted element  is <selected
  element, assign selected element to spot in front of sorted element (that spot
    will either be the selected element itself already or a duplicate/legacy 
    position of the next element)

*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j = i - 1;
    for (; j >= 0 && arr[j] > currentValue; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = currentValue;
  }
  return arr;
}

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = i; j > 0; j--) {
//       let left = j - 1;
//       if (arr[left] > arr[j]) {
//         let temp = arr[left];
//         arr[left] = arr[j];
//         arr[j] = temp;
//       } else {
//         break;
//       }
//     }
//   }
//   return arr;
// }

module.exports.insertionSort = insertionSort;