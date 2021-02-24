
function Insertion_Sort(a) {
    let n = a.length;
    for (let i = 1; i < n; i++) {
        let tam = a[i];
        let pos = i;
        for (let j = pos-1; j >=0; j--) {
            if (a[j]>tam) {
                let temp= a[j];
                a[j]=a[j+1];
                a[j+1]=temp;
            }
        }
    }
    return a;
}
let a = [10, 2, 5, 1, 8];

console.log(Insertion_Sort(a));
