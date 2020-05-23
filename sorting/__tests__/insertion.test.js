const {insertionSort} = require('../comparison-n2/insertion');

xdescribe('insertionSort', () => {
  test('returns same array as was inputed (same reference, but potentially mutated)', () => {
    let input = [];
    expect(insertionSort(input)).toBe(input);
  });
  
  test('returns empty array for empty array', () => {
    expect(insertionSort([])).toEqual([]);
  })
  
  test('handles array of length 1', () => {
    expect(insertionSort([1])).toEqual([1]);
  })
  
  test('handles array of length 2', () => {
    expect(insertionSort([2,1])).toEqual([1,2]);
  })
  
  test('sorts [1,2,3,4,5] to be [1,2,3,4,5]', () => {
    expect(insertionSort([1,2,3,4,5])).toEqual([1,2,3,4,5]);
  })
  
  test('sorts [5,4,3,2,1] to be [1,2,3,4,5]', () => {
    expect(insertionSort([5,4,3,2,1])).toEqual([1,2,3,4,5])
  ;})
  
  test('sorts [5,1,3,4,2] to be [1,2,3,4,5]', () => {
    expect(insertionSort([5,1,3,4,2])).toEqual([1,2,3,4,5]);
  })
  
  test('sorts [100,10,1,2000,200,20,2] to be [1,2,10,20,100,200,2000]', () => {
    expect(insertionSort([100,10,1,2000,200,20,2])).toEqual([1,2,10,20,100,200,2000]);
  })
})