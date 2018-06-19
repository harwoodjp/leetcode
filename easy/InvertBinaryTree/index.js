/* https://leetcode.com/problems/invert-binary-tree/description/ */

class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BST {
  constructor(vals) {
    this.root = null
    if (vals) {
      vals.forEach(val => this.insert(val))
    }
  }

  insert(val) {
    const node = new Node(val)
    this.root
      ? this.searchInsert(this.root, node)
      : this.root = node
  }

  searchInsert(currentNode, newNode) {
    if (currentNode.val >= newNode.val) {
      currentNode.left
        ? this.searchInsert(currentNode.left, newNode)
        : currentNode.left = newNode
    } else {
      currentNode.right
        ? this.searchInsert(currentNode.right, newNode)
        : currentNode.right = newNode
    }
  }
}

const invertTree = bst => {

}


invertTree(new BST([4, 2, 7, 1, 3, 6, 9]))
