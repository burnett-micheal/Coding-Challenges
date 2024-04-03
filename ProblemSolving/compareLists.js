// Link: https://www.hackerrank.com/challenges/compare-two-linked-lists/problem

function CompareLists(head1, head2) {
  let curNode1 = head1;
  let curNode2 = head2;
  let isEqual = true;
  
  for(let i = 0; i < 1; i+=0) {
    if(curNode1.next?.data !== curNode2.next?.data || curNode1.data !== curNode2.data) {
      isEqual = false;
      break;
    } else
    if(curNode1.next === null && curNode2.next === null) {
      break;
    }
    
    curNode1 = curNode1.next;
    curNode2 = curNode2.next;
  }
  
  return isEqual ? 1 : 0;
}
