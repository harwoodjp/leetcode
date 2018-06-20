const Node = require("./Node")

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

module.exports = BST