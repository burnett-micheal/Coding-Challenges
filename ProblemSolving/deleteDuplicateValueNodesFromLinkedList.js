// Link: https://www.hackerrank.com/challenges/delete-duplicate-value-nodes-from-a-sorted-linked-list/problem

function removeDuplicates(head) {
  let valueToRemove = head.data;
  let prevNode = head;
  let curNode = head.next;
  for(let i = 0; i < 1; i+=0) {
    
    if(curNode?.data === valueToRemove) {
      for(let j = 0; j < 1; j+=0) {
        if(curNode?.data === valueToRemove) {
          curNode = curNode.next;
        } else {
          break;
        }
      }
      prevNode.next = curNode;
    }
    
    if(curNode === null) break;
    valueToRemove = curNode.data;
    prevNode = curNode;
    curNode = prevNode.next;
  }

  return head;
}
