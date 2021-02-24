// Nguyễn Văn THành - KTPM - K17A

console.time();
const quickSort = (arr) => {

    if(arr.length < 2) return arr;

    const pivotIndex = arr.length - 1; // lấy phần tử cuối arr làm pivot
    const pivot = arr[pivotIndex];

    const left = [];
    const right = [];
    
    for(let i = 0; i < pivotIndex; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];

}
console.log(quickSort([10,3,13,2,0,9]));
console.timeEnd();