// Link: https://www.hackerrank.com/challenges/tree-inorder-traversal/problem

function inOrder(root) {
	/*
         1
          \
          2
          \
          5
         / \
        3  6
        \
        4
           
    So in this example we go 1,2,3,4,5,6. Explained below:
    
    If the node is an unrightedNode, 
      If it can go right, add to result array, and go right, and remove from unrightedNodes
      If it cant go right, add to result array, and go to next unrightedNode, and remove from unrightedNodes
    
    So the priorities are to go left. Add to unrightedNodes.
    Then to go right if we cant go left. Add to result array.
    Then to go back to the unrightedNode. Add to result array.
    
    [1]
    [1,2]
    [1,2,3]
    [1,2,3,4]
    [1,2,3,4,5]
    [1,2,3,4,5,6]
  */
  
  const arr = [];
  let curNode = root;
  const unrightedNodes = [];
  for(let i = 0; i < 1; i+=0) {
    if(curNode.left) {
      //console.log(`Adding ${curNode.data} to unrightedNodes, and traversing left to: ${curNode.left.data}`);
      unrightedNodes.unshift(curNode);
      curNode = curNode.left;
    } else 
    if(curNode.right) {
      //console.log(`Adding ${curNode.data} to resultArray, and traversing right to: ${curNode.right.data}`);
      arr.push(curNode.data);
      curNode = curNode.right;
    } else {
      //console.log(`Adding ${curNode.data} to result array, and searching unrighted nodes`);
      arr.push(curNode.data);
      curNode = null;
      if(unrightedNodes.length === 0) break;
      for(let j = 0; j < 1; j+=0){
        if(unrightedNodes[0].right) {
          //console.log(`Adding ${unrightedNodes[0].data} to result array, removing from unrightedNodes, and traversing right to: ${unrightedNodes[0].right.data}`);
          arr.push(unrightedNodes[0].data);
          curNode = unrightedNodes[0].right;
          unrightedNodes.shift();
          break;
        } else {
          //console.log(`Adding ${unrightedNodes[0].data} to result array, and removing from unrightedNodes`);
          arr.push(unrightedNodes[0].data);
          unrightedNodes.shift();
        }
        if(unrightedNodes.length === 0) break;
      }
      if(curNode === null) break;
    }
  }
  console.log(arr.join(" "));
}
