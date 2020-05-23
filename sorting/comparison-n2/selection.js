/*
  O(n^2)

  Only way it's better than bubble sort is that it doesn't "swap" as often-
    so if concerned about memory writing...not commonly a concern
  (Bubble's better though in being capable of exiting early if inner loop didn't
  need to swap)

  One Liner: "Loop in loop- compare each element to SELECT lowest, swap with first element of outer loop..."

  Typically thought of as moving lower items left, but could just as well select
  for higher items right.


*/

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let lowestElementInd = i;
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[lowestElementInd]) {
        lowestElementInd = j;
      }
    }
    if (lowestElementInd !== i) {
      //swap
      let temp = arr[lowestElementInd];
      arr[lowestElementInd] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

module.exports.selectionSort = selectionSort;