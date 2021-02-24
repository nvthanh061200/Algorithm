function BubbleSort(a) {
    let n = a.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (a[j] > a[j + 1]) {
                let tam = a[j];
                a[j] = a[j + 1];
                a[j + 1] = tam;
            }
        }
    }
    return a;
}
let a = [10, 2, 5, 1, 8];

console.log(BubbleSort(a));
