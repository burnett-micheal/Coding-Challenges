// Link: https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/problem

function printLinkedList(head) {
  let curVal = head;
  while(curVal.next) {
    curVal = curVal.next;
    console.log(curVal.data);
  }
}
