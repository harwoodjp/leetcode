/* https://leetcode.com/problems/invert-binary-tree/description/ */

const BST = require("../../ds/BST")

const invert = (node, parent) => {
  let currentNode = node.root ? node.root : node
  currentNode.log()
}


invert(new BST([4, 2, 7, 1, 3, 6, 9]), null)
