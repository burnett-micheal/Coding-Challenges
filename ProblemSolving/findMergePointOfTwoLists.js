// Link: https://www.hackerrank.com/challenges/find-the-merge-point-of-two-joined-linked-lists/problem

function findMergeNode(headA, headB) {
  let result = undefined;
  
  let curNode1 = headA;
  let curNode2 = headB;
  for(let i = 0; i < 1; i+=0) {
    if(curNode1 === null) break;
    
    curNode2 = headB.next;
    for(let j = 0; j < 1; j+=0) {
      if(curNode2 === null) break;
      if(curNode2 === curNode1) {
        result = curNode2.data;
        break;
      }
      curNode2 = curNode2.next;
    }
    
    if(result) break;
    curNode1 = curNode1.next;
  }
  
  return result;
}
