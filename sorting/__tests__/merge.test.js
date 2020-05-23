const { mergeTwoArrays, mergeSort } = require('../n-log-n/merge');

describe('mergeTwoArrays', () => {
  it('should handle empty arrays', () => {
    expect(mergeTwoArrays([],[])).toEqual([]);
  });

  it('should handle one empty, one filled array', () => {
    expect(mergeTwoArrays([],[1])).toEqual([1]);
  });

  it('should handle two single value arrays', () => {
    expect(mergeTwoArrays([3],[2])).toEqual([2,3]);
  });

  it('should handle two multi-value sorted arrays, equal length', () => {
    expect(mergeTwoArrays([1,3,7], [1,2,5])).toEqual([1,1,2,3,5,7]);
  });

  it('should handle first array shorter than second', () => {
    expect(mergeTwoArrays([1,5],[2,3,7,8])).toEqual([1,2,3,5,7,8]);
  });

  it('should handle first array shorter than second', () => {
    expect(mergeTwoArrays([2,3,7,8],[1,5])).toEqual([1,2,3,5,7,8]);
  });
});

describe('mergeSort', () => {
  it('should handle empty array', () => {
    expect(mergeSort([])).toEqual([]);
  });

  it('should handle single value array', () => {
    expect(mergeSort([1])).toEqual([1]);
  });

  it('should sort two value array', () => {
    expect(mergeSort([2,1])).toEqual([1,2]);
  });

  it('should sort multi-value array', () => {
    expect(mergeSort([5,3,4,9,4,1])).toEqual([1,3,4,4,5,9]);
  });
})