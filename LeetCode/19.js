// Link: https://leetcode.com/problems/remove-nth-node-from-end-of-list

var removeNthFromEnd = function(head, n) {
    // handle 0 and 1 length LL
    if(head === null || head.next === null) return null;

    // handle 2 length LL
    if(head.next.next === null) {
        if(n === 1) { head.next = null; }
        if(n === 2) { head = head.next; }
        return head;
    }

    let curNode = head;
    const prevNodes = [curNode];
    while(curNode !== null) {
        curNode = curNode.next;
        prevNodes.push(curNode);
    }
    
    if(n === prevNodes.length - 1) return head.next;
    
    prevNodes.reverse();
    const lNode = prevNodes[n+1];
    const rNode = prevNodes[n-1];
    lNode.next = rNode;

    return head;
};
