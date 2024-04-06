// Link: https://www.hackerrank.com/challenges/tree-postorder-traversal/problem

function postOrder(root) {
  
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
           
    So in this example we go 4,3,6,5,2,1. Explained below:
    
    Our priorities are to start at the bottom left, 
    then make our way up thru most recently traversed nodes, 
    continuing to traverse as low as possible along those nodes.
    
    The pseudo-code looks something like this:
    
    loop {
      If(left is possible) {
        save node to node chain, and say it wasnt traversed right
        go left; 
      } else
      if(right is possible) {
        save node to node chain, and say it was traversed right
        go right; 
      } else {
        add node data to result array, we are at the bottom  
        loop {
          if(no more node links) break out of loop;
          if(nodeLink right is possible) {
            if(nodeLink is traversed) {
              add nodeLink data to result array, its been traversed
              remove nodeLink from node chain
            } else {
              set current node to nodeLink.right
              set nodeLink traversed to true
              break out of loop
            }
          } else {
            add nodeLink data to result array, its been traversed
            remove nodeLink from node chain
          }
        }
        if(no more node links) break out of loop;
      }
    }
    
    Print result array;
    
    So we start from 1, we cant go left, so we go right to 2. 
    We store 1 in the nodeChain, saying it been traversed.
    
    curNode: 2
    nodeChain: [ {node: 1, traversed: true} ]
    resultArray: []
    
    Now at 2, we cant go left, so we go right to 5.
    We store 2 in the the nodeChain, saying its been traversed.
    
    curNode: 5
    nodeChain: [
      {node: 2, traversed: true},
      {node: 1, traversed: true},
    ]
    resultArray: []
    
    Now at 5, we can go left, so we go left to 3.
    We store 5 in the nodeChain, saying it has not been traversed.
    
    curNode: 3
    nodeChain: [
      {node: 5, traversed: false},
      {node: 2, traversed: true},
      {node: 1, traversed: true},
    ]
    resultArray: []
    
    Now at 3, we cant go left, so we go right to 4.
    We store 3 in the nodeChain, saying its been traversed.
    
    curNode: 4
    nodeChain: [
      {node: 3, traversed: true},
      {node: 5, traversed: false},
      {node: 2, traversed: true},
      {node: 1, traversed: true},
    ]
    resultArray: []
    
    Now at 4, we cant go left, we cant go right, so we know were at the bottom of the tree.
    Add 4 to the result array, and begin to search the node chain.
    Our first nodeLink 3, can go right, and has been traversed, so add it to the result array and remove it from the nodeChain.
    Our next nodeLink 5, can go right, and has not been traversed, so set traversed to true, and go right to 6.
    
    curNode: 6
    nodeChain: [
      {node: 5, traversed: true},
      {node: 2, traversed: true},
      {node: 1, traversed: true},
    ]
    resultArray: [4,3]
    
    Now at 6, we cant go left, we cant go right, so again, were at the bottom of this tree branch.
    Add 6 to the result array, and begin to search the node chain.
    Our first nodeLink is 5, can go right, and has been traversed, so add it to the result array and remove it from the nodeChain.
    our next nodeLink is 2, can go right, and has been traversed, so add it to the result array and remove it from the nodeChain.
    our next nodeLink is 1, can go right, and has been traversed, so add it to the result array and remove it from the nodeChain.
    Were out of nodeLinks, so break out of the loop.
    
    curNode: null
    nodeChain: []
    resultArray: [4,3,6,5,2,1]
    
    print the result array
  */
  
  const arr = [];
  let curNode = root;
  const nodeChain = [];
  const newNodeLink = (node, traversed) => { nodeChain.unshift({ node, traversed }); }
  for(let i = 0; i < 1; i+=0) {
    if(curNode.left) {
      // console.log(`Adding ${curNode.data} to nodeChain, and traversing left to: ${curNode.left.data}`);
      newNodeLink(curNode, false);
      curNode = curNode.left;
    } else
    if(curNode.right) {
      // console.log(`Adding ${curNode.data} to nodeChain, and traversing right to: ${curNode.right.data}`);
      newNodeLink(curNode, true);
      curNode = curNode.right;
    } else 
    if(nodeChain.length > 0) {
      // console.log(`Adding ${curNode.data} to result array, and searching node chain`);
      arr.push(curNode.data);
      curNode = null;
      for(let j = 0; j < 1; j+=0) {
        if(nodeChain[0].node.right) {
          if(nodeChain[0].traversed) {
            // console.log(`Node link: ${nodeChain[0].node.data} has been traversed, removing from node chain and adding to result array`);
            arr.push(nodeChain[0].node.data);
            nodeChain.shift();
          } else {
            // console.log(`Node link: ${nodeChain[0].node.data} has not been traversed, going right to ${nodeChain[0].node.right.data}, and setting traversed to true.`);
            curNode = nodeChain[0].node.right;
            nodeChain[0].traversed = true;
            break;
          }
        } else {
          // console.log(`Node link: ${nodeChain[0].node.data} cant go right, so adding to result array.`);
          arr.push(nodeChain[0].node.data);
          nodeChain.shift();
        }
        if(nodeChain.length === 0) break;
      }
      // console.log("Node chain searched.");
      if(curNode === null) break;
    }
  }

  console.log(arr.join(" "));
}
