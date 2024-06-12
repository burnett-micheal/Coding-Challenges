// Link: https://leetcode.com/problems/add-two-numbers/

var addTwoNumbers = function(l1, l2) {
    const isDefined = (x) => x !== null && x !== undefined;
    const isntDefined = (x) => x === null || x === undefined;

    // This handles if the linked lists are both only 1 long
    if(isntDefined(l1.next) && isntDefined(l2.next)) {
        const sum = l1.val + l2.val;
        const l3 = sum >= 10 ? new ListNode(sum - 10, new ListNode(1, undefined)) : new ListNode(sum, undefined);
        return l3;
    }

    // Set up the resulting list head
    let n1 = l1;
    let n2 = l2;
    let overflow = n1.val + n2.val >= 10;

    const l3 = overflow ? new ListNode(n1.val + n2.val - 10, undefined) : new ListNode(n1.val + n2.val, undefined);
    let n3 = l3;

    n1 = n1.next;
    n2 = n2.next;

    // Iterate over the lists, adding to the resulting list (l3) as you go
    // Use the overflow variable to indicate whether the previous sum was over 10
    while(isDefined(n1) || isDefined(n2)) {
        let val = undefined;

        if(isntDefined(n1)) {
            val = n2.val;
            n2 = n2.next;
        } else
        if(isntDefined(n2)) {
            val = n1.val;
            n1 = n1.next;
        } else {
            val = n1.val + n2.val;
            n1 = n1.next;
            n2 = n2.next;
        }
        
        if(overflow) val++;
        if(val >= 10) {
            overflow = true;
            val -= 10;
        } else {
            overflow = false;
        }

        n3.next = new ListNode(val, undefined);
        n3 = n3.next;
    }

    if(overflow) n3.next = new ListNode(1, undefined);

    return l3;
};
