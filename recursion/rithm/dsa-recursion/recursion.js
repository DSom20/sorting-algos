/** product: calculate the product of an array of numbers. */

function product(nums) {
  // Recursive 2: helper with altered signature tracking index
  if (nums.length === 0) return 0;
  function _product(nums, index) {
    if (index === nums.length - 1) return nums[index]
    return nums[index] * _product(nums, index + 1);
  }
  return _product(nums, 0);

  // Recursive 1: making lots of arrays
  // if (nums.length === 0) return 0;
  // if (nums.length === 1) return nums[0];
  // return nums[0] * product(nums.slice(1));

  // Non recursive
  // return nums.reduce((acc, num) => acc * num);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  function _longest(words, index=0) {
    if (index === words.length) return 0;
    return Math.max(words[index].length, _longest(words, index + 1))
  }
  return _longest(words)
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  function _everyOther(str, index=0, result='') {
    if (index >= str.length) return result;
    result += str[index];
    return _everyOther(str, index + 2, result);
  }
  return _everyOther(str,0,'');

  // // Iterative
  // let result = '';
  // for (let i = 0; i < str.length; i+=2) {
  //   result += str[i];
  // }
  // return result;
}

/** everyOtherReverse: return a string with every other letter, reversed. 
 * Note: my function. wanted to see difference from above- bottom up vs top down...
*/
function everyOtherReverse(str) {
  function _everyOtherReverse(str, index = 0) {
    if (index >= str.length) return '';
    return _everyOtherReverse(str,index+2) + str[index];
  }
  return _everyOtherReverse(str);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  //Recursive
  function _isPalindrome(str, left, right) {
    if (left >= right) return true;
    return (str[left] === str[right]) && _isPalindrome(str, left + 1, right - 1);
  }
  return _isPalindrome(str, 0, str.length - 1);


  // // Iterative
  // let left = 0;
  // let right = str.length - 1;
  // while (left < right) {
  //   if (str[left] !== str[right]) {
  //     return false;
  //   }
  //   left++;
  //   right--;
  // }
  // return true;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  function _findIndex(arr, val, index = 0) {
    if (index === arr.length) return -1;
    if (arr[index] === val) return index;
    return _findIndex(arr, val, index + 1);
  }
  return _findIndex(arr, val, 0);

  // // Iterative
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === val) return i;
  // }
  // return -1;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  function _revString(str, index) {
    if (index === str.length) return '';
    return _revString(str, index + 1) + str[index];
  }
  return _revString(str,0);

  // Built in methods
  // return str.split('').reverse().join('');
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];
  function _gatherStrings(obj) {
    for (let key in obj) {
      let val = obj[key];
      if (typeof val === 'string') {
        strings.push(val);
      } else if (val && typeof val === 'object') {
        _gatherStrings(val);
      }
    }
  }
  _gatherStrings(obj);
  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  function _binarySearch(arr, val, left, right) {
    if (left > right) return -1;
    // let mid = Math.floor((right - left) / 2) + left;
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] === val) return mid;
    if (val < arr[mid]) {
      return _binarySearch(arr, val, left, mid - 1);
    } else {
      return _binarySearch(arr, val, mid + 1, right);
    }
  }
  return _binarySearch(arr, val, 0, arr.length - 1);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  everyOtherReverse
};
