/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    // BFS
    // if (this.root === null) return 0;
    // let sum = 0;
    // let queue = [this.root];
    // while(queue.length > 0) {
    //   let nextNode = queue.shift();
    //   sum += nextNode.val;
    //   for (let child of nextNode.children) {
    //     queue.push(child);
    //   }
    // }
    // return sum;

    //DFS
    // if (this.root === null) return 0;
    // let sum = 0;
    // let stack = [this.root];
    // while(stack.length > 0) {
    //   let nextNode = stack.pop();
    //   sum += nextNode.val;
    //   for (let child of nextNode.children) {
    //     stack.push(child);
    //   }
    // }
    // return sum;

    // Recursive method 1 (mine)
    if (!this.root) return 0;
    function _sumValues(rootNode) {
      // Method 1a
      // let sum = 0;
      // for (let child of rootNode.children) {
      //   sum += _sumValues(child)
      // }
      // return sum + rootNode.val;

      // Method 1b
      // if (rootNode.children.length === 0) return rootNode.val;   //unnecessary explicit base case
      return rootNode.children.reduce((acc, child) => {
        return acc + _sumValues(child)
      }, rootNode.val);
    }
    return _sumValues(this.root)

    // Recursive Method 2 (solution's)
    // if (!this.root) return 0;

    // let total = this.root.val;

    // function sumHelper(node) {
    //   // go through all the children for a Node
    //   for (let child of node.children) {
    //     // accumulate all values
    //     total += child.val;
    //     // if it has any children
    //     if (child.children.length > 0) {
    //       // recurse with the child as the root
    //       sumHelper(child);
    //     }
    //   }
    // }

    // sumHelper(this.root);
    // return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    // BFS
    // if (!this.root) return 0;
    // let evenCount = 0;
    // let queue = [this.root];
    // while (queue.length > 0) {
    //   let currentNode = queue.shift();
    //   if (currentNode.val % 2 === 0) evenCount++;
    //   for (let child of currentNode.children) {
    //     queue.push(child);
    //   }
    // }
    // return evenCount;

    // DFS
    if (!this.root) return 0;
    let evenCount = 0;
    let stack = [this.root];
    while (stack.length > 0) {
      let currentNode = stack.pop();
      if (currentNode.val % 2 === 0) evenCount++;
      for (let child of currentNode.children) {
        stack.push(child);
      }
    }
    return evenCount;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    // BFS
    if (!this.root) return 0;
    let count = 0;
    let queue = [this.root];
    while (queue.length > 0) {
      let currentNode = queue.shift();
      if (currentNode.val > lowerBound) count++;
      for (let child of currentNode.children) {
        queue.push(child);
      }
    }
    return count;
  }
}

module.exports = { Tree, TreeNode };
