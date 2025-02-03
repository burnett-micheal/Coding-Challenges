// Link: https://leetcode.com/problems/swap-nodes-in-pairs

var swapPairs = function(head) {
    if(!head) return head;
    if(!head.next) return head;

    let n0 = undefined;
    let n1 = head;
    let n2 = n1.next;

    n1.next = n2.next;
    n2.next = n1;

    const newHead = n2;

    n0 = n1;
    while(n0?.next?.next) {
        n1 = n0.next;
        n2 = n1.next;
        
        n1.next = n2.next;
        n2.next = n1;
        n0.next = n2;

        n0 = n1;
    }

    return newHead;
};
