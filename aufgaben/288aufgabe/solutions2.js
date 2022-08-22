function functionC(array) {
    let x;
    for (let i = 1; i < array.length; i++) {
        let j = i;
        x = array[i];
        while (j > 0 && array[j - 1] < x) {
            array[j] = array[j - 1];
            j--;
        }
        array[j] = x;
    }
    return array;
}

console.log(functionC([3, 6, 8, 1]));