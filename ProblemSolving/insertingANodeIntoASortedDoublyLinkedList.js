// Link: https://www.hackerrank.com/challenges/insert-a-node-into-a-sorted-doubly-linked-list/problem

function sortedInsert(head, data) {
  const newNode = new DoublyLinkedListNode(data);
  
  // If there is no head then newNode would be the only node in the llist
  if(head === null) return newNode;
  
  // If the head is larger than the newNode, than newNode is the first in the list
  if(head.data > newNode.data) {
    newNode.next = head;
    head.prev = newNode;
    return newNode;
  }
  
  // If the head is the only in the list, and is smaller or equal to newNode, then return head -> newNode
  if(head.next === null) {
    head.next = newNode;
    newNode.prev = head;
    return head;
  }
  
  let prevNode = head;
  let curNode = head.next;
  for(let i = 0; i < 1; i+=0) {
    // Were at the end of the list, set newNode here
    if(curNode === null) {
      prevNode.next = newNode;
      newNode.prev = prevNode;
      break;
    }
    
    // prevNode <= newNode and newNode <= curNode, were at a sorted position, set newNode here 
    if(newNode.data >= prevNode.data && newNode.data <= curNode.data) {
      prevNode.next = newNode;
      newNode.prev = prevNode;
      newNode.next = curNode;
      curNode.prev = newNode;
      break;
    }
    
    // update nodes to the next position
    prevNode = curNode;
    curNode = curNode.next;
  }
  
  return head;
}
