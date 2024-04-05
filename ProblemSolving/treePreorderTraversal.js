// Link: https://www.hackerrank.com/challenges/tree-preorder-traversal/problem

function preOrder(root) {
  /*
        1
         \
          2
           \
            5
           / \
          3   6
          \
           4
           
    So in this example we go 1,2,5,3,4,6. Explained below:
    
    Our result array is [1]
    
    Starting from 1, we have  
     left: null   right: 2
    There is no left, so we go right.
    
    Our result array is [1,2]
    
    Now at 2, we have
     left: null  right:5
    There is no left, so we go right.
    
    Our result array is [1,2,5]
    
    Now at 5, we have
     left: 3  right: 6
    There is a left, so we go left.
    We store the 5 node to check to go right later tho.
    
    Our result array is [1,2,5,3]
    
    Now at 3, we have
    left: null  right: 4
    There is no left, so we go right.
    
    Our result array is [1,2,5,3,4]
    
    Now at 4, we have
    left: null  right: null
    There is no direction we can go from this node, so we look at our unrightedNodes,
    and check each one for a right nodein the order of most recently traversed, 
    in this case we check if 5 has a right, which it does, so we go to 6.
    
    Our result array is [1,2,5,3,4,6]
    
    Now at 6 we have
    left: null  right: null
    Again, no direction to go from this node, so look at our unrightedNodes.
    unrightedNodes is empty, which means we've traversed every node, so
    break out of the loop and console log the result.

  */
	
  const arr = [];
  let curNode = root;
  let unrightedNodes = [];
  for(let i = 0; i < 1; i+=0) {
    arr.push(curNode.data);
    unrightedNodes.unshift(curNode);
    
    if(curNode.left) {
      // Traverse left if possible from curNode
      curNode = curNode.left;
    } else {
      // If no left, traverse right from most recently travelled unrightedNode
      curNode = null;
      for(let j = 0; j < 1; j+=0) {
        if(unrightedNodes[0].right) {
          curNode = unrightedNodes[0].right;
          unrightedNodes.shift();
          break;
        } else {
          unrightedNodes.shift();
          if(unrightedNodes.length === 0) break;
        }
      }
    }
    
    // If curNode is null, it means all nodes have been traversed, so break out of loop
    if(curNode === null) break;
  }
  
  console.log(arr.join(" "));
}
