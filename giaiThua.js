// Nguyễn Văn THành - KTPM - K17A

console.time();

function giaiThua(n) {
    if (n < 2)
        return n;
    return n * giaiThua(n - 1);
}
console.log(giaiThua(170));

console.timeEnd();

console.time();

function giaiThua(n) {
    if (n < 2) return n;

    var sum = 1;
    for (let i = 1; i < n; i++) {
        sum *= i
    }
    return sum;
}
console.log(giaiThua(170));

console.timeEnd();


