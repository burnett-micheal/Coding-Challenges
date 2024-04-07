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
  let curNode = root;
  const unrightedNodes = [];
  const nodesDis = {"0": { "0": [root.data] }};
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
