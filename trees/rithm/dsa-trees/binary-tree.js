/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;
    let level = 1;
    let currentLevelQueue = [this.root];
    let nextLevelQueue = [];
    while (true) {
      while (currentLevelQueue.length > 0) {
        let currentNode = currentLevelQueue.shift();
        if (!currentNode.left && !currentNode.right) return level;
        if (currentNode.left) nextLevelQueue.push(currentNode.left);
        if (currentNode.right) nextLevelQueue.push(currentNode.right);
      }
      currentLevelQueue = nextLevelQueue;
      nextLevelQueue = [];
      level++;
    }
    // return level;

    // if (!this.root) return 0;
    // function _minDepth(node) {
    //   if (!node.left && !node.right) return 1;
    //   return Math.min(
    //     _minDepth(node.left),
    //     _minDepth(node.right)
    //   ) + 1;
    // }
    // return _minDepth(this.root);

  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    // BFS
    if (!this.root) return 0;
    let level = 0;
    let queue = [this.root];
    while (queue.length > 0) {
      let nodesOnCurrentLevel = queue.length;
      for (let i = 0; i < nodesOnCurrentLevel; i++) {
        let currentNode = queue.shift();
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
      }
      level++;
    }
    return level;


    // Recursive
    // if (!this.root) return 0;
    // function _minDepth(node) {
    //   if (!node.left && !node.right) return 1;
    //   return Math.max(
    //     _minDepth(node.left),
    //     _minDepth(node.right)
    //   ) + 1;
    // }
    // return _minDepth(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    // No negatives
    // let bestMaxYet = 0;
    // function _maxSum(node) {
    //   if (node === null) return 0;
    //   let sumLeft = _maxSum(node.left);
    //   let sumRight = _maxSum(node.right);
    //   bestMaxYet = Math.max(bestMaxYet, node.val + sumLeft + sumRight);
    //   return Math.max(sumLeft, sumRight) + node.val;
    // }
    // _maxSum(this.root);
    // return bestMaxYet;

    // Pure Recursion
    // function _maxSum(node) {
    //   if (node === null) return [0, 0];
    //   // if (!node.left && !node.right) return node.val;
    //   let [sumLeft, bestMaxLeft] = _maxSum(node.left);
    //   let [sumRight, bestMaxRight] = _maxSum(node.right);
    //   let bestMaxYet = Math.max(bestMaxLeft, bestMaxRight, node.val + sumLeft + sumRight);
    //   return [Math.max(sumLeft, sumRight) + node.val, bestMaxYet];
    // }
    // let [_, bestMax] = _maxSum(this.root);
    // return bestMax;

    // Handle Negatives, even all negatives
    if (!this.root) return 0; //...
    let bestMaxYet = -Infinity;
    function _maxSum(node) {
      if (node === null) return 0;
      let sumLeft = _maxSum(node.left);
      let sumRight = _maxSum(node.right);
      // if left/right were all negative, _maxSum would return 0 to ignore them,
      // so we'd effectively be comparing just this node.val with bestMaxYet,
      // potentially replacing a less negative val in node.val for a more
      //  negative val previously in bestMaxYet
      bestMaxYet = Math.max(bestMaxYet, node.val + sumLeft + sumRight);
      // if sumLeft/Right with self is negative, will only make future chains worse,
      // so return 0 instead to effectively ignore from this node down
      return Math.max(0, sumLeft + node.val, sumRight + node.val)
    }
    _maxSum(this.root);
    return bestMaxYet;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    // BFS- Solution's
    if (!this.root) return null;
    let queue = [this.root];
    let closest = null;
    while (queue.length) {
      let currentNode = queue.shift();
      let currentVal = currentNode.val;
      let higherThanLowerBound = currentVal > lowerBound;
      let shouldReassignClosest = currentVal < closest || closest === null;
      if (higherThanLowerBound && shouldReassignClosest) {
        closest = currentVal;
      }
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return closest;

    // BFS- Mine
    // if (!this.root) return null;
    // let queue = [this.root];
    // let closest = Infinity;
    // while (queue.length > 0) {
    //   let currentNode = queue.shift();
    //   let currentVal = currentNode.val;
    //   if (currentVal > lowerBound && currentVal < closest) {
    //     closest = currentVal;
    //   }
    //   currentNode.left && queue.push(currentNode.left);
    //   currentNode.right && queue.push(currentNode.right);
    // }
    // return closest < Infinity ? closest : null;


    // function _nextLarger(node, lowerBound) {
    //   if (node === null) return null;

    //   let leftResult = _nextLarger(node.left, lowerBound);
    //   let rightResult = _nextLarger(node.right, lowerBound);
    //   let selfResult = node.val > lowerBound ? node.val : null;

    //   let validResults = [];
    //   if (leftResult !== null) validResults.push(leftResult);
    //   if (rightResult !== null) validResults.push(rightResult);
    //   if (selfResult !== null) validResults.push(selfResult);

    //   if (validResults.length === 0) return null;
    //   return Math.min(...validResults) ;
    // }
    // return _nextLarger(this.root, lowerBound);
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) 
   *          5
   *      2       7
   *    1   3   4   6
   * */

  areCousins(node1, node2) {
    if (!this.root) return false;
    let currentLevel = [this.root];
    let nextLevel = [];
    let node1Parent = null;
    let node2Parent = null;
    while (currentLevel.length > 0) {
      // Create nextLevel list && add parents if find node1 / node2
      for (let currentNode of currentLevel) {
        let left = currentNode.left;
        let right = currentNode.right;
        if (left === node1 || right === node1) {  //node1Parent = n2
          node1Parent = currentNode;
        }
        if (left === node2 || right === node2) { //node2 Parent = n3
          node2Parent = currentNode;
        }
        left && nextLevel.push(left);
        right && nextLevel.push(right);
      }
      // check node parents for potential success / fail
      let notSiblingsOrCousins = (node1Parent && !node2Parent) || (!node1Parent && node2Parent);
      if (notSiblingsOrCousins) return false;
      let siblingsOrCousins = (node1Parent && node2Parent);
      if (siblingsOrCousins) {
        let siblings = node1Parent === node2Parent;
        let cousins = node1Parent !== node2Parent;
        if (siblings) return false;
        if (cousins) return true;
      }
      // If neither pass nor fail yet, make nextLevel list the currentLevel list
      currentLevel = nextLevel;
      nextLevel = [];
    }
    return false;

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. 
   * 'rootVal; firstLevelVals, ...; secondLevelVals, ...;' 
   * */

  static serialize(tree) {
    let currentLevel = [tree.root]
    let nextLevel = [];
    let resultString = '';
    while (currentLevel.length > 0) {
      for (let i = 0; i < currentLevel.length; i++) {
        let nodeOrNull = currentLevel[i]
        resultString += (nodeOrNull ? String(nodeOrNull.val) : 'null');
        if (i === currentLevel.length - 1) {
          resultString += ';';
        } else {
          resultString += ',';
        }
      }
      // assign next level list from 
      for (let nodeOrNull of currentLevel) {
        if (nodeOrNull !== null) {
          nextLevel.push(nodeOrNull.left);
          nextLevel.push(nodeOrNull.right);
        }
      }

      currentLevel = nextLevel;
      nextLevel = [];
    }
    return resultString;
  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize(stringTree) {
    let levelsStrings = stringTree.split(';'); // [1;2,3;4,5,6,7;null,null,null,null,null,null...;]
    let levelsNodesOrNulls = [];
    // convert each to a node with a value
    for (let level of levelsStrings) {
      let valuesOrNulls = level.split(',');
      let nodesOrNulls = []
      for (let element of valuesOrNulls) {
        if (element !== 'null') {
          nodesOrNulls.push(new BinaryTreeNode(+element))
        } else {
          nodesOrNulls.push(null);
        }
      }
      levelsNodesOrNulls.push(nodesOrNulls);
    }
    //go through each level til - 1, if node !== null, add to l/r from next list...
    for (let i = 0; i < levelsNodesOrNulls.length - 2; i++) {
      let nextLevelElementCounter = 0;
      for (let element of levelsNodesOrNulls[i]) {
        if (element) {
          element.left = levelsNodesOrNulls[i+1][nextLevelElementCounter++];
          element.right = levelsNodesOrNulls[i+1][nextLevelElementCounter++];
        }
      }
    }

    return new BinaryTree(levelsNodesOrNulls[0][0]);

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */
  // returns lowest common ancestor of node1 and node2 given that currentNode
  // is the root of the tree and that either both node1 and node2 are in the tree
  // or neither are
  lowestCommonAncestor(node1, node2, currentNode = this.root) {
    // special base case of currentNode === null
    if (currentNode === null) return null;
    // base case of currentNode === node1 or 2
    if (currentNode === node1 || currentNode === node2) return currentNode;
    // Find if found lca in either/both child sides
    // If both, then currentNode is the true LCA
    let leftSideLCA = this.lowestCommonAncestor(node1,node2,currentNode.left);
    let rightSideLCA = this.lowestCommonAncestor(node1,node2,currentNode.right);
    if (leftSideLCA && rightSideLCA) return currentNode;
    // If only one lca was found on a side, return that as the presumed lca
    // If both are null, then return null
    // This implementation effectively returns either the single truthy one or null if both null
    if (leftSideLCA) {
      return leftSideLCA;
    } else {
      return rightSideLCA;
    }
    
    // Cleaner solution way to do last part:
    // // if one node is not null, return it
    // if (left !== null || right !== null) return left || right;

    // // left and right are both null, return null
    // if (left === null && right === null) return null;
  }

  // lowestCommonAncestor(node1, node2) {
  //   let lca = null;
  //   // Weird helper function
  //   // Returns true if either node1 or node2 found as or below provided node
  //   // side effect: when both found- store the lca then
  //   function _lowestCommonAncestor(rootNode) {
  //     if (rootNode === null) return false;
  //     let foundInLeft = _lowestCommonAncestor(rootNode.left);
  //     let foundInRight = _lowestCommonAncestor(rootNode.right);
  //     let foundAsSelf = rootNode === node1 || rootNode === node2;
  //     if ((foundInLeft && foundInRight)
  //         || (foundAsSelf && foundInLeft) 
  //         || (foundAsSelf && foundInRight)) {
  //           lca = rootNode;
  //         }
  //     if (foundInLeft || foundInRight || foundAsSelf) return true;
  //   }
  //   _lowestCommonAncestor(this.root);
  //   return lca;
  // }
}

module.exports = { BinaryTree, BinaryTreeNode };
