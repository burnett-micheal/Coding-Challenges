// Link: https://www.hackerrank.com/challenges/reverse-a-doubly-linked-list/problem

function reverse(head) {
  // Handle no head or only head in llist
  if(head === null) return head;
  if(head.next === null) return head;
  
  // Handle a 2 node llist
  if(head.next.next === null) {
    const aNode = head;
    const bNode = head.next;
    aNode.next = null;
    aNode.prev = bNode;
    bNode.next = aNode;
    bNode.prev = null;
    return bNode;
  }
  
  // Handle a 3 node or greater llist
  let prevNode = head;
  let curNode = head.next;
  let nextNode = head.next.next;
  
  prevNode.prev = curNode;
  prevNode.next = null;
  
  for(let i = 0; i < 1; i+=0) {
    curNode.next = prevNode;
    curNode.prev = nextNode;
    
    if(nextNode === null) { break; }
    
    prevNode = curNode;
    curNode = nextNode;
    nextNode = nextNode.next;
  }
  
  return curNode;
}
