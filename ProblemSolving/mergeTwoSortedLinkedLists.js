// Link: https://www.hackerrank.com/challenges/merge-two-sorted-linked-lists/problem

function mergeLists(head1, head2) {
  let sortedHead = undefined;
  let curNode1 = undefined;
  let curNode2 = undefined;
  
  if(head1.data < head2.data) {
    sortedHead = head1;
    curNode1 = head1.next;
    curNode2 = head2;
  } else {
    sortedHead = head2;
    curNode1 = head1;
    curNode2 = head2.next;
  }
  
  let curNode3 = sortedHead;
  
  for(let i = 0; i < 1; i+= 0) {
    if(curNode1 !== null && curNode2 !== null) {
      if(curNode1.data < curNode2.data) {
        curNode3.next = curNode1;
        curNode1 = curNode1.next;
        curNode3 = curNode3.next;
      } else {
        curNode3.next = curNode2;
        curNode2 = curNode2.next;
        curNode3 = curNode3.next;
      }
    } else {
      curNode3.next = curNode1 === null ? curNode2 : curNode1;
      break;
    }
  }
  
  return sortedHead;
}
