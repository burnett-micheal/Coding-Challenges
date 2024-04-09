// Link: https://www.hackerrank.com/challenges/tree-level-order-traversal/problem

function levelOrder(root){
  let curLevel = [root];
  const arr = [];
  for (let i = 0; i < 1; i+=0) {
    if(curLevel.length === 0) break;
    const nextLevel = [];
    for(let j = 0; j < curLevel.length; j++) {
      const node = curLevel[j];
      if(node.left) nextLevel.push(node.left);
      if(node.right) nextLevel.push(node.right);
      arr.push(node.data);
    }
    curLevel = nextLevel;
  }
  console.log(arr.join(" "));
}
