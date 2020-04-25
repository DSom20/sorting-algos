const { bubbleSort, bubbleSort2 } = require('../comparison-n2/bubble');
// import { bubbleSort, bubbleSort2 } from '../comparison-n2/bubble';

describe('bubbleSort', () => {
  test('returns same array as was inputed (same reference, but potentially mutated)', () => {
    let input = [];
    expect(bubbleSort(input)).toBe(input);
  });
  
  test('returns empty array for empty array', () => {
    expect(bubbleSort([])).toEqual([]);
  })
  
  test('handles array of length 1', () => {
    expect(bubbleSort([1])).toEqual([1]);
  })
  
  test('handles array of length 2', () => {
    expect(bubbleSort([2,1])).toEqual([1,2]);
  })
  
  test('sorts [1,2,3,4,5] to be [1,2,3,4,5]', () => {
    expect(bubbleSort([1,2,3,4,5])).toEqual([1,2,3,4,5]);
  })
  
  test('sorts [5,4,3,2,1] to be [1,2,3,4,5]', () => {
    expect(bubbleSort([5,4,3,2,1])).toEqual([1,2,3,4,5])
  ;})
  
  test('sorts [5,1,3,4,2] to be [1,2,3,4,5]', () => {
    expect(bubbleSort([5,1,3,4,2])).toEqual([1,2,3,4,5]);
  })
  
  test('sorts [100,10,1,2000,200,20,2] to be [1,2,10,20,100,200,2000]', () => {
    expect(bubbleSort([100,10,1,2000,200,20,2])).toEqual([1,2,10,20,100,200,2000]);
  })
})

describe('bubbleSort2', () => {
  test('returns same array as was inputed (same reference, but potentially mutated)', () => {
    let input = [];
    expect(bubbleSort2(input)).toBe(input);
  });
  
  test('returns empty array for empty array', () => {
    expect(bubbleSort2([])).toEqual([]);
  })
  
  test('handles array of length 1', () => {
    expect(bubbleSort2([1])).toEqual([1]);
  })
  
  test('handles array of length 2', () => {
    expect(bubbleSort2([2,1])).toEqual([1,2]);
  })
  
  test('sorts [1,2,3,4,5] to be [1,2,3,4,5]', () => {
    expect(bubbleSort2([1,2,3,4,5])).toEqual([1,2,3,4,5]);
  })
  
  test('sorts [5,4,3,2,1] to be [1,2,3,4,5]', () => {
    expect(bubbleSort2([5,4,3,2,1])).toEqual([1,2,3,4,5])
  ;})
  
  test('sorts [5,1,3,4,2] to be [1,2,3,4,5]', () => {
    expect(bubbleSort2([5,1,3,4,2])).toEqual([1,2,3,4,5]);
  })
  
  test('sorts [100,10,1,2000,200,20,2] to be [1,2,10,20,100,200,2000]', () => {
    expect(bubbleSort2([100,10,1,2000,200,20,2])).toEqual([1,2,10,20,100,200,2000]);
  })
})
