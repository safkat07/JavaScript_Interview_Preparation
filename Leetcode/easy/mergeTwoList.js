/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */


// ==============================|| BRUTEFORCE APPROACH ||============================== //

var mergeTwoLists = function (list1, list2) {
    const linkedListToArray = (list) => {
        let arr = [];
        let current = list
        while (current) {
            arr.push(current.val)
            current = current.next
        }
        return arr;
    }

    let arr1 = linkedListToArray(list1)
    let arr2 = linkedListToArray(list2)

    let finalArray = arr1.concat(arr2)
    let sortedArray = finalArray.sort()

    let arrayToLinedList = (arr) => {
        let clone = new ListNode()
        let current = clone

        for (let value of arr) {
            current.next = new ListNode(value)
            current = current.next
        }
        return clone.next

    }

    return arrayToLinedList(sortedArray)

};

// ==============================|| This code passed 27 tescases among 273 testcases||============================== //



// ==============================|| Efficient Approach ||============================== //

var mergeTwoLists = function (list1, list2) {

    let dummy = new ListNode()
    let current = dummy

    while (list1 && list2) {
        if (list1.val > list2.val) {
            current.next = list2
            list2 = list2.next
        }
        else {
            current.next = list1
            list1 = list1.next
        }
        current = current.next
    }
    current.next = list1 || list2;

    return dummy.next

};