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

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
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