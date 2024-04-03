// Link: https://www.hackerrank.com/challenges/get-the-value-of-the-node-at-a-specific-position-from-the-tail/problem

function getNode(head, positionFromTail) {
  const arr = [];
  let curNode = head;
  for(let i = 0; i < 1; i+=0) {
    arr.push(curNode.data);
    if(arr.length > positionFromTail + 1) arr.shift();
    if(curNode.next === null) break;
    curNode = curNode.next;
  }
  return arr.shift();
}
