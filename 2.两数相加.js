/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addLink = function (obj = {}, val) {
	if (obj.val == null) {
		obj.val = val;
		obj.next = null;
	} else {
		let lastLink = obj;
		while (lastLink.next) {
			lastLink = lastLink.next;
		}
		lastLink.next = {val, next: null};
	}
}

var addTwoNumbers = function(l1, l2) {
	let index = 0, carry = 0;
	const result = new ListNode();
	while (l1 || l2) {
		const v1 = l1 ? l1.val || 0 : 0, v2 = l2 ? l2.val || 0 : 0;
		if (v1 + v2 + carry <= 9) {
			addLink(result, v1 + v2 + carry)
			carry = 0;
		} else {
			addLink(result, v1 + v2 + carry - 10)
			carry = 1;
		}
		l1 = l1 ? l1.next : null;
		l2 = l2 ? l2.next : null;
	}
	if (carry) addLink(result, carry);
	return result;
};
