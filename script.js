function fibs(num) {
    let array = [0, 1];
    let suma;
    for (let i = 0; i < num - 2; i++) {
        suma = array[array.length - 2] + array[array.length - 1];
        array.push(suma);
    }

    return array;
}

function fibsrec(num) {
    if (num === 1) {
        return [0];
    }

    if (num === 2) {
        return [0, 1];
    }

    let prev = fibsrec(num - 1);
    let suma = prev[prev.length - 2] + prev[prev.length - 1];

    return prev.concat(suma);
}

console.log(fibsrec(5));
console.log(fibs(5));

function mergeSort() {}
