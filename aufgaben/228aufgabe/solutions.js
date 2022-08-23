function functionB(array) {
    let x;
    for (let i = 0; i < array.length - 1; i++) {
        x = i;
        for (let j = i; j < array.length; j++) {
            if (array[x] > array[j]) {
                x = j;
            }
        }
        if (i !== x) {
            const a = array[i];
            const b = array[x];
            array[i] = b;
            array[x] = a;
        }
    }
    return array;
}

console.log(functionB([3, 6, 8, 1]));