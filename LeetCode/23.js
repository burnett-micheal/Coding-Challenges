// Link: https://leetcode.com/problems/merge-k-sorted-lists

var mergeKLists = function(lists) {
    const nodeArr = [];
    for(let i = 0; i < lists.length; i++) {
        let curNode = lists[i];
        while(curNode !== null) {
            nodeArr.push([curNode.val, curNode]);
            curNode = curNode.next;
        }
    }

    const sortedNodeArr = nodeArr.sort((a,b) => a[0] - b[0]);

    if(sortedNodeArr.length === 0) return null;

    const head = sortedNodeArr[0][1];
    let curNode = head;
    for(let i = 1; i < sortedNodeArr.length; i++) {
        curNode.next = sortedNodeArr[i][1];
        curNode = curNode.next;
    }

    return head;
};
