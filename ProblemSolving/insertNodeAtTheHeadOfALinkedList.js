// Link: https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list/problem

function insertNodeAtHead(head, data) {
  const newNode = new SinglyLinkedListNode(data);
  if(!head) return newNode;
  newNode.next = head;
  return newNode;
}
