const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  head = null;

  root() {
    return this.head;
  }

  add( data ) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let nodeForInserting = this.head;

    while (true) {
      if (data > nodeForInserting.data && nodeForInserting.right) {
        nodeForInserting = nodeForInserting.right;
        continue;
      }

      if (data < nodeForInserting.data && nodeForInserting.left) {
        nodeForInserting = nodeForInserting.left;
        continue;
      }
      break;
    }

    nodeForInserting[data > nodeForInserting.data ? 'right' : 'left'] = newNode;
  }

  has( data ) {
    return !!this.find(data);
  }

  find( data ) {
    let node = this.head;

    while (node) {
      const currentNodeData = node.data;

      if (currentNodeData === data) {
        return node;
      }

      node = data > currentNodeData ? node.right : node.left;
    }

    return node;
  }

  remove( data ) {
    let parentNode = this.head;
    let node = this.head;
    let stepTo;

    while (node.data !== data) {
      stepTo = data > node.data ? 'right' : 'left';

      if (!node[stepTo]) {
        return;
      }

      parentNode = node;
      node = node[stepTo];
    }

    if (!node.left && !node.right) {
      parentNode[stepTo] = null;
      return;
    }

    if (node.left && !node.right) {
      parentNode[stepTo] = node.left;
      return;
    }

    if (node.right && !node.left) {
      parentNode[stepTo] = node.right;
      return;
    }

    let parentOfMinNode = node;
    let minNode = parentOfMinNode.right;

    while (minNode.left) {
      parentOfMinNode = minNode;
      minNode = minNode.left;
    }

    parentNode.data = minNode.data;
    parentOfMinNode[parentOfMinNode.left === minNode ? 'left' : 'right'] = minNode.right;
  }

  min() {
    let min = this.head;
    let leftNode = min.left;

    while (leftNode?.data) {
      min = leftNode;
      leftNode = leftNode.left;
    }

    return min?.data || null;
  }

  max() {
    let max = this.head;
    let rightNode = max.right;

    while (rightNode?.data) {
      max = rightNode;
      rightNode = rightNode.right;
    }

    return max?.data || null;
  }
}

module.exports = {
  BinarySearchTree
};