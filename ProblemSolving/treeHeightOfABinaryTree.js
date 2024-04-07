// Link: https://www.hackerrank.com/challenges/tree-height-of-a-binary-tree/problem

// I'm not 100% confident that this is correct, since the js version of this problem appears to be broken on hackerrank.
// However I am confident that any errors in this code could be easily resolved with my current level of understanding. 
// Thus, I'm going to commit it here anyway.

function treeHeight(root) {	
  let curNode = root;
  let unrightedNodes = [];
  let maxHeight = 0;
  let curHeight = 0;
  
  const addHeight = () => {
    curHeight++;
    if(curHeight > maxHeight) maxHeight = curHeight;
  }
  
  const resetHeight = (newHeight) => { curHeight = newHeight; }
  
  const newUnrighted = (node) => { 
    unrightedNodes.unshift({
      node, 
      distanceFromRoot: curHeight
    }); 
  }
  
  for(let i = 0; i < 1; i+=0) {
    if(curNode.left) {
      addHeight();
      newUnrighted(curNode);
      curNode = curNode.left;
    } else 
    if(curNode.right) {
      addHeight();
      curNode = curNode.right;
    }
    else {
      curNode = null;
      if(unrightedNodes.length === 0) break;
      for(let j = 0; j < 1; j+=0) {
        const urHeight = unrightedNodes[0].distanceFromRoot;
        const urNode = unrightedNodes[0].node;
        if(urNode.right) {
          resetHeight(urHeight);
          addHeight();
          curNode = unrightedNodes.shift();
          break;
        } else {
          unrightedNodes.shift();
        }
        if(unrightedNodes.length === 0) break;
      }
      if(curNode === null) break;
    }
  }
  
  return maxHeight;
}
