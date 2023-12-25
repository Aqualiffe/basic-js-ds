const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(data) {
    let node = new Node(data);
    if(!this.rootTree){
      this.rootTree = node;
      return;
    }
    let current = this.rootTree;
    while(current) {
      if(node.data < current.data) {
        if (!current.left) {
          current.left = node;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          return;
        }
        current = current.right;
      }
    }
  }


  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    let node = this.rootTree;
    while(node !== null) {
      if(data === node.data) {
        return node;
      } else if (data < node.data) {
        node = node.left
      } else {
        node = node.right;
      }
    }
    return null;
  }

  remove(data) {
    this.rootTree = removeNode(this.rootTree, data);
    function removeNode(node, data) {
      if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        if (!node.left && !node.right) return null;
        if (!node.left) {
          return node.right;
        }
        if (!node.right) {
          return node.left;
        }
        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.rootTree) {
      return null;
    }
    let node = this.rootTree;
    while(node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rootTree) {
      return null;
    }
    let node = this.rootTree;
    while(node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};