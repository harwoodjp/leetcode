class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }

  log() {
    console.log(`${this.val}, L: ${this.left.val}, R: ${this.right.val}`)    
  }
}

module.exports = Node
