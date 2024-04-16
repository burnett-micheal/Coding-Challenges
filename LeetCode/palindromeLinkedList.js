// Link: https://leetcode.com/problems/palindrome-linked-list/

const getMiddle = (head) => {
    // Returns the node 1 to the right of the median of the LL
    // 1, 2, 3, 4, 5 = 4 --- 1, 2, 3, 4 = 3
    let fastNode = head;
    let slowNode = head;
    while (fastNode.next && fastNode.next.next) {
        fastNode = fastNode.next.next;
        slowNode = slowNode.next;
    }
    return slowNode.next;
}

const reverse = (head) => {
    let prevNode = null;
    let curNode = head;
    let nextNode = null;
    while(curNode) {
        nextNode = curNode.next;
        curNode.next = prevNode;
        prevNode = curNode;
        curNode = nextNode;
    }
    return prevNode;
}

var isPalindrome = function(head) {
    if(!head.next) return true;

    const midNode = getMiddle(head);

    let leftSideNode = head;
    let rightSideNode = reverse(midNode);

    while(rightSideNode.next) {
        if(leftSideNode.val !== rightSideNode.val) return false;
        leftSideNode = leftSideNode.next;
        rightSideNode = rightSideNode.next;
    }

    return leftSideNode.val === rightSideNode.val;
};
