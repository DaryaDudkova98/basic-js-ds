//const { NotImplementedError } = require('../lib');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }
  root() {
    return this.tree;
  }

  add(data) {
    if (this.tree === null) {
      this.tree = new Node(data);
      return;
    }
    let current = this.tree;

  while (true) {
    if (data < current.data) {
      if (current.left === null) {
        current.left = new Node(data);
        return;
      }
      current = current.left;
    } else if (data > current.data) {
      if (current.right === null) {
        current.right = new Node(data);
        return;
      }
      current = current.right;
    } else {
      return;
    }
  }
}

  find(data) {
    if (this.tree === null) {
      return null;
    }

    let current = this.tree;

    while (current !== null) {
      if (data === current.data) {
        return current;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  has(data) {
    return this.find(data) !== null;
  }

  remove(data) {
  let parent = null;
  let current = this.tree;

  while (current !== null && current.data !== data) {
    parent = current;
    if (data < current.data) current = current.left;
    else current = current.right;
  }
  if (current === null) return;

  if (current.left !== null && current.right !== null) {
    let succParent = current;
    let succ = current.right;
    while (succ.left !== null) {
      succParent = succ;
      succ = succ.left;
    }
    current.data = succ.data;
    current = succ;
    parent = succParent;
  }

  let child = current.left !== null ? current.left : current.right;

  if (parent === null) {
    this.tree = child;
  } else if (parent.left === current) {
    parent.left = child;
  } else {
    parent.right = child;
  }
}

  min() {
    let current = this.tree;

    while (current !== null && current.left !== null) {
      current = current.left;
    }

    return current === null ? null : current.data;
}

  max() {
  let current = this.tree;

  while (current !== null && current.right !== null) {
    current = current.right;
  }

  return current === null ? null : current.data;
}
}

module.exports = {
  BinarySearchTree
};
