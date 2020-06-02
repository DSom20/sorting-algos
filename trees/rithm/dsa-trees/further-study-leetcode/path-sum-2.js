/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
// 2nd method, with accumulator
var pathSum = function(root, sum) {
  function _pathSum(node, pathSoFar, sumSoFar, paths = []) {
      if (!node) return paths;
      let updatedPathSoFar = [...pathSoFar, node.val];
      let updatedSumSoFar = sumSoFar + node.val;
      if (!node.left && !node.right) {
          if (updatedSumSoFar === sum) {
              paths.push(updatedPathSoFar);
          }
      }
      _pathSum(node.left, updatedPathSoFar, updatedSumSoFar, paths);
      _pathSum(node.right, updatedPathSoFar, updatedSumSoFar, paths);
      return paths;
  }
  return _pathSum(root, [], 0);
  
};

// Initial Method: impure
var pathSum = function(root, sum) {
  let paths = [];
  function _pathSum(node, pathSoFar, sumSoFar) {
      if (!node) return;
      let updatedPathSoFar = [...pathSoFar, node.val];
      let updatedSumSoFar = sumSoFar + node.val;
      if (!node.left && !node.right) {
          if (updatedSumSoFar === sum) {
              paths.push(updatedPathSoFar);
          }
      }
      _pathSum(node.left, updatedPathSoFar, updatedSumSoFar);
      _pathSum(node.right, updatedPathSoFar, updatedSumSoFar);
  }
  _pathSum(root, [], 0);
  return paths;
}