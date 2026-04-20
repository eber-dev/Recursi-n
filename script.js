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

function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }

    const mitad = Math.floor(array.length / 2);
    const primeramitad = array.slice(0, mitad);
    const segundamitad = array.slice(mitad);

    return merge(primeramitad, segundamitad);
}

function merge(a, b) {
    let resultado = [];
    let i = 0;
    let j = 0;

    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            resultado.push(a[i]);
            i++;
        } else {
            resultado.push(b[j]);
            j++;
        }
    }

    return resultado.concat(a.slice(i)).concat(b.slice(j));
}
