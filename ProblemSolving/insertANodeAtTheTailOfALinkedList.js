// Link: https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem

function insertNodeAtTail(head, data) {
  const newNode = new SinglyLinkedListNode(data);
  if(!head) return newNode;
  
  let curNode = head;
  while(curNode.next) { curNode = curNode.next; }
  curNode.next = newNode;
  
  return head;
}
