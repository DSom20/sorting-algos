/*
  Learnings: 
    Could also do two queues: one tracking node, other tracking corresponding sum so far
      Enque and deque both at same time
*/

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
 * @return {boolean}
 */

 // Recursion Method 1: with helper
var hasPathSum = function(root, sumTarget) {
  function _hasPathSum(node, sumFromTrueRoot) {
      // base case 1
      if (!node) {
          return false;
      }
      //base case 2
      let updatedSum =  sumFromTrueRoot + node.val;
      if (!node.left && !node.right) {
          return sumTarget === updatedSum;
      }
      // combinator
      return _hasPathSum(node.left, updatedSum) ||  _hasPathSum(node.right, updatedSum)
  }
  return _hasPathSum(root, 0)
};

// Recursion Method 2: no helper
var hasPathSum = function(root, sumTarget) {
  // base case 1
  if (!root) {
      return false;
  }
  //base case 2
  let updatedSum =  sumTarget - root.val;
  if (!root.left && !root.right && updatedSum === 0) {
      return true;;
  }
  // combinator
  return hasPathSum(root.left, updatedSum) ||  hasPathSum(root.right, updatedSum);
}