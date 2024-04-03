// Link: https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list-in-reverse/problem

function reversePrint(head) {
  const arr = [];
  let curNode = head;
  while(curNode.next) {
    arr.unshift(curNode.data);
    curNode = curNode.next;
  }
  arr.unshift(curNode.data);
  for(let i = 0; i < arr.length; i++) console.log(arr[i]);
}
