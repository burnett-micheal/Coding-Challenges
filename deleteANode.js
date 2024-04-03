// Link: https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list/problem

function deleteNode(head, position) {
  if(position === 0) return head.next;
  
  let prevNode = undefined;
  let curNode = head;
  let postNode = null;
  for(let i = 0; i <= position + 1; i++) {
    if(i === position - 1) prevNode = curNode;
    if(i === position && !curNode.next) break; 
    if(i === position + 1) postNode = curNode;
    curNode = curNode.next;
  }
  prevNode.next = postNode;
  return head;
}
