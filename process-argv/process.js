console.log('---------');
// console.log(process);
console.log('---------');
console.log(process.argv);
console.log('---------');
console.log(process.argv[0]);
console.log('---------');
console.log(process.argv[1]);
console.log('---------');
console.log(process.argv[2]);
console.log('---------');
console.log(process.argv[3]);
console.log('---------');
console.log(process.argv[4]);
console.log('---------');
console.log(process.argv[5]);
console.log('---------');


// if (process.argv[2] === hi) {
//     console.log('hi, ich bin deneme');
// }


let sum = 0;

for (let i = 2; i < process.argv.length; i++) {
    console.log(process.argv[i], +process.argv[i]);
    sum += +process.argv[i];
};

console.log({sum});