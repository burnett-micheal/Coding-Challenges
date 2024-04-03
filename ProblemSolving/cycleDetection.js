// Link: https://www.hackerrank.com/challenges/detect-whether-a-linked-list-contains-a-cycle/problem

/*
  This problem was broken due to an assignment to a constant variable, but I'm fairly certain I got the answer right, so I'm committing it here anyway.
*/

function hasCycle(head) {
  if(!head || !head.next) return 0;
  if(head.next === head) return 1;
  let isCycle = false;
  
  let slowNode = head;
  let fastNode = head;
  for(let i = 0; i < 1; i+=0) {
    slowNode = slowNode?.next;
    fastNode = fastNode?.next?.next;
    if(!fastNode || !slowNode) {
      break;
    } else
    if(slowNode === fastNode) {
      isCycle = true;
      break;
    }
  }
  
  return isCycle ? 1 : 0;
}
