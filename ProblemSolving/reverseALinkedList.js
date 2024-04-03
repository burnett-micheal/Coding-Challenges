// Link: https://www.hackerrank.com/challenges/reverse-a-linked-list/problem

function reverse(head) {
  let prevNode = head;
  let curNode = head.next;
  prevNode.next = null;

  while(curNode.next) {
    const nextNode = curNode.next;
    curNode.next = prevNode;
    prevNode = curNode;
    curNode = nextNode;
  }
  curNode.next = prevNode;
  
  return curNode;
}
