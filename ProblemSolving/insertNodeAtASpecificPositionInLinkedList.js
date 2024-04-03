// Link: https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem

function insertNodeAtPosition(head, data, position) {
  const newNode = new SinglyLinkedListNode(data);
  let prevNode = head;
  for(let i = 1; i < position; i++) { prevNode = prevNode.next; }
  newNode.next = prevNode.next;
  prevNode.next = newNode;
  return head;
}
