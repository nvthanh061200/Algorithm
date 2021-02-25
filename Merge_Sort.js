function _mergeArrays(a, b) {
    const c = []

    while (a.length && b.length) {
        c.push(a[0] > b[0] ? b.shift() : a.shift())
    }

    while (a.length) {
        c.push(a.shift())
    }
    while (b.length) {
        c.push(b.shift())
    }

    return c
}

function mergeSort(a) {
    if (a.length < 2) return a
    const middle = Math.floor(a.length / 2) // tim middle
    const a_l = a.slice(0, middle)
    const a_r = a.slice(middle, a.length)
    const sorted_l = mergeSort(a_l)
    const sorted_r = mergeSort(a_r)
    return _mergeArrays(sorted_l, sorted_r)
}
let mr=mergeSort([10,6,3,2,5,11,9]);
 
console.log(mr)