/* https://leetcode.com/problems/maximum-binary-tree/description/ */

const getMaxData = array => {
  return {
    value: array.reduce((a, b) => Math.max(a, b)),
    index: array.indexOf(array.reduce((a, b) => Math.max(a, b)))
  }
}

class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class Tree {
  constructor(nums) {
    if (!nums.length) {
      return null
    }

    let max = getMaxData(nums)

    const node = new Node(max.value)
    node.left = new Tree(nums.slice(0, max.index))
    node.right = new Tree(nums.slice(max.index + 1, nums.length))

    return node    
  }
}

const constructMaximumBinaryTree = nums => {
  return new Tree(nums)
}



console.log(constructMaximumBinaryTree([3,2,1,6,0,5]))
