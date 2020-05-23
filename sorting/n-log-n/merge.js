function mergeTwoArrays(arr1, arr2) {
  let result = [];
  let arr1Pointer = 0;
  let arr2Pointer = 0;

  while (arr1Pointer < arr1.length && arr2Pointer < arr2.length) {
    let arr1Value = arr1[arr1Pointer];
    let arr2Value = arr2[arr2Pointer];
    if (arr1Value < arr2Value) {
      result.push(arr1Value);
      arr1Pointer++;
    } else {
      result.push(arr2Value);
      arr2Pointer++;
    }
  }

  // Put rest of the remaining array (whichever one it is) at end of result
  while (arr1Pointer < arr1.length) {
    result.push(arr1[arr1Pointer]);
    arr1Pointer++;
  }
  while (arr2Pointer < arr2.length) {
    result.push(arr2[arr2Pointer]);
    arr2Pointer++;
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let midpoint = Math.floor(arr.length / 2);
  let leftSubArray = mergeSort(arr.slice(0,midpoint));
  let rightSubArray = mergeSort(arr.slice(midpoint));
  return mergeTwoArrays(leftSubArray, rightSubArray);
}

module.exports = {
  mergeTwoArrays,
  mergeSort
}