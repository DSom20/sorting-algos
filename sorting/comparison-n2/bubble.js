/*
Properties:
  Comparison
  O(n^2) time
  In Place (O(n) space)

One liner: "largest numbers 'bubble' to the top/right"

PseudoCode:

  Visualgo:
    indexOfLastUnsortedElement = arr.length
    do
      swapped = false
      for i = 1 to indexOfLastUnsortedElement-1
        if leftElement > rightElement
          swap(leftElement, rightElement)
          swapped = true
      indexOfLastUnsortedElement--
    while swapped   // quick out if iterate without swapping- know its sorted!
  
    Rithm:
      - Loop with i from end of array towards beginning
        - Loop with j from the beginning until i - 1
          (- swapped = false)
          - If arr[j] is greater than arr[j+1], swap those two values!
            -(swapped = true)
        (- if swapped === false, return sorted array)
      Return the sorted array

*/

function bubbleSort(arr) {
  for(let i = arr.length - 1; i > 0; i--) {
    let swapped = false;
    for(let j = 0; j < i; j++) {
      if(arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        swapped = true;
      }
    }
    if(!swapped) return arr;
  }
  return arr;
}

function bubbleSort2(arr) {
  let indexOfRightmostUnsortedElement = arr.length - 1;
  let swapped;

  do {
    swapped = false;
    for(let i = 0; i < indexOfRightmostUnsortedElement; i++) {
      if(arr[i] > arr[i+1]) {
        [arr[i],arr[i+1]] = [arr[i+1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped)

  return arr;
}

// export {bubbleSort, bubbleSort2};
module.exports.bubbleSort = bubbleSort;
module.exports.bubbleSort2 = bubbleSort2;