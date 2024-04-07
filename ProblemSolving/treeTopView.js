// Link: https://www.hackerrank.com/challenges/tree-top-view/problem

// This JS problem appears to be broken on hackerrank, I had to do a bit of work outside the function to get it running properly. So I just copied the whole file into here, but the actual problem solving function is topView.
// I might add an explanation on the solution soon. Need a break for a bit for now, this problem took a while to figure out.

class Node {
    constructor(data) {
        this.data = data
        this.left = null;
        this.right = null;
    }
}

function insertNode(root, data) {
    if (!root) {
        return new Node(data);
    }

    if (root.data < data) {
        const node = insertNode(root.right, data);
        root.right = node;
    }
    else {
        const node = insertNode(root.left, data);
        root.left = node;
    }
    return root;
}


function topView(root) {
  
  /* 
    So in this challenge we want to get the top view of a binary tree.
    
      1
       \
        2
         \
          5
         / \
        3   6
         \
          4
          
    In this case the top-view is 1, 2, 5, 6. Explained below.
    
    The top view is essentially an array of the lowest heights, at each distance from the root, going from left to right.
    
    The distance from the root is -1 if its 1 to the left, 1 if its 1 to the right, and 0 if it is the root.
    
    The height is the amount of times we had to travel from the root to get to the current node. 
    So in our current example: 2, would be 1 height, bcz we travelled from the root: 1, to 2. So 1 times travelled.
    On the other hand 4 would be 4 height, bcz we travelled 4 times from the root: 1 to 2, 2 to 5, 5 to 3, and 3 to 4.
    
    So what I did to get the answer was traverse all the nodes in the tree, storing there data in a 2d object.
    Object [nodeDistance] [nodeHeight] = nodeData;
    
    After that I iterated over each nodeDistance, from lowest to highest, and got the lowest node height available, 
    starting from the lowest possible (Math.abs(nodeDistance)), and pushed the data to the array.
    
    And finally, I printed the array.
  */
  
  let curNode = root;
  const unrightedNodes = [];
  const nodesDis = {"0": { "0": root.data }};
  let curHeight = 0;
  let curDis = 0;
  let minDis = 0;

  const goLeft = () => {
    curNode = curNode.left;
    curDis--;
    curHeight++;
    if(!(`${curDis}` in nodesDis)) nodesDis[`${curDis}`] = {};
    if(!(`${curHeight}` in nodesDis[`${curDis}`])) nodesDis[`${curDis}`][`${curHeight}`] = {};
    nodesDis[`${curDis}`][`${curHeight}`] = curNode.data;
    if(curDis < minDis) minDis = curDis;
  }
  
  const goRight = () => {
    curNode = curNode.right;
    curDis++;
    curHeight++;
    if(!(`${curDis}` in nodesDis)) nodesDis[`${curDis}`] = {};
    if(!(`${curHeight}` in nodesDis[`${curDis}`])) nodesDis[`${curDis}`][`${curHeight}`] = {};
    nodesDis[`${curDis}`][`${curHeight}`] = curNode.data;
  }

  const reset = (newDis, newHeight) => {
    curDis = newDis; 
    curHeight = newHeight;
  }

  const newUnrighted = (node) => {
    unrightedNodes.unshift({
      node, 
      dis: curDis,
      height: curHeight,
    }); 
  }

  for(let i = 0; i < 1; i+=0) {
    if(curNode.left) {
      if(curNode.right) newUnrighted(curNode);
      goLeft();
    } else 
    if(curNode.right) {
      goRight();
    }
    else {
      if(unrightedNodes.length === 0) break;
      const urDis = unrightedNodes[0].dis;
      const urHeight = unrightedNodes[0].height;
      curNode = unrightedNodes[0].node;
      reset(urDis, urHeight);
      goRight();
      unrightedNodes.shift();
    }
  }
  
  const topDown = [];
  for(let i = minDis; i <= 500; i++) {
    if(!(`${i}` in nodesDis)) break;
    const nodesAtDis = nodesDis[`${i}`];
    const lowestPossibleHeight = Math.abs(i);
    if(nodesAtDis[`${lowestPossibleHeight}`]) {
      topDown.push(nodesAtDis[`${lowestPossibleHeight}`]);
    } else {
      for(let curHeight = lowestPossibleHeight + 1; curHeight <= 500; curHeight++) {
        if(nodesAtDis[`${curHeight}`]) {
          topDown.push(nodesAtDis[`${curHeight}`]);
          break;
        }
      }
    }
  }
  
  console.log(topDown.join(" "));
}

function processData(input) {
  const numArray = input.split("\n")[1].split(" ").map(x => Number(x));

  let root;

  numArray.forEach(num => {
    root = insertNode(root, num);
  });

  topView(root);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

