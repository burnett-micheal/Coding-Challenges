// Link: https://leetcode.com/problems/merge-two-sorted-lists/

var mergeTwoLists = function(list1, list2) {
    let head = undefined;
    let n1 = list1;
    let n2 = list2;

    if(n1 === null && n2 === null) return n1;

    if(n1 === null || n2 === null) {
        if(n1 === null) {
            head = n2;
            n2 = n2.next;
        } else {
            head = n1;
            n1 = n1.next;
        }
    } else 
    
    if(n1.val < n2.val){
        head = n1;
        n1 = n1.next;
    } else {
        head = n2;
        n2 = n2.next;
    }

    let curNode = head;
    while(n1 !== null || n2 !== null) {
        if(n2 === null){
            curNode.next = n1;
            n1 = n1.next;
        } else
        
        if(n1 === null){
            curNode.next = n2;
            n2 = n2.next;
        } else

        if(n1.val < n2.val) {
            curNode.next = n1;
            n1 = n1.next;
        } else {
            curNode.next = n2;
            n2 = n2.next;
        }

        curNode = curNode.next;
    }

    return head;
};
