const array=[1,2,3,4,5];

let counterA= 0;
let counterB= 0;
let counterC= 0;
function functionA(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            const a = array[j];
            const b = array[j + 1];
            if (a > b) {
                array[j] = b;
                array[j + 1] = a;
              
            }
            counterA++;
        }
    }
    return array;
}
console.log(functionA(array))



function functionB(array) {
    let x;
    for (let i = 0; i < array.length; i++) {
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
        counterB++;
    }
    return array;
}

console.log(functionB(array))

function functionC(array) {
    let x;

    for (let i = 1; i < array.length; i++) {
        let j = i;
        x = array[i];
        while (j > 0 && array[j - 1] < x) {
            array[j] = array[j - 1];
            j--;
        }
        counterC++;
        array[j] = x;
    }
   
    return array;
}

console.log(functionC(array))

console.log(`Array length: ${array.length}, FunctionC-Counter: ${counterA}`);
console.log(`Array length: ${array.length}, FunctionC-Counter: ${counterB}`);
console.log(`Array length: ${array.length}, FunctionC-Counter: ${counterC}`);