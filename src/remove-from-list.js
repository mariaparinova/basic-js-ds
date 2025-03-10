const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} list
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList( list, k ) {
  let head = list;

  while (head) {
    if (head.next?.value === k && !head.next.next) {
      head.next = null;
      return list;
    }

    if (head.value === k) {
      head.value = head.next?.value;
      head.next = head.next?.next || null;
      continue;
    }

    head = head.next;
  }

  return list;
}

module.exports = {
  removeKFromList
};
