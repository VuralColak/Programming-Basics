/////////////////////////////////

console.log(' ');
console.log('-------Aufgabe-1-------');
console.log(' ');


// const money = [50, 20, 10, 5, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
// function calculateChange(price, amountPaid) {
//     const wechselgeld = amountPaid - price;
//     const angemessenesWechselgeld = [];
//     for (let i = 0; i < money.length; i++) {
        
//         angemessenesWechselgeld.push(wechselgeld % money[i]);

//     }

//     return angemessenesWechselgeld;
// }


// console.log(calculateChange(9, 50));


//// Lösung-1----------


// function calculateChange(price, amountPaid) {
//     const money = [
//       20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1,
//     ];
//     let change = (amountPaid - price) * 100;
  
//     return money.reduce((prev, curr) => {
//       const numOfTimesCurrAmountFitInChange = parseInt(change / curr);
  
//       if (numOfTimesCurrAmountFitInChange !== 0) {
//         prev += `${numOfTimesCurrAmountFitInChange} x ${curr / 100}` + " | ";
  
//         change = change % curr;
//       }
  
//       return prev;
//     }, "");
//   }
  
// console.log(calculateChange(4.5, 20));
// console.log('-----------');
// console.log(calculateChange(7.6, 50));




//// Lösung-2----------



function calculateChange(price, amountpaid) {
    let changeback = (amountpaid - price) * 100;
    var change = {};
    let types = [
      "500",
      "200",
      "100",
      "50",
      "20",
      "10",
      "5",
      "2",
      "1",
      "0.5",
      "0.2",
      "0.1",
      "0.05",
      "0.02",
      "0.01",
    ];
    let values = [
      50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1,
    ];
    var amount;
    for (let i = 0; i < values.length; i++) {
      amount = Math.floor(changeback / values[i]);
      if (amount > 0) {
        change[types[i]] = amount;
        changeback = changeback - values[i] * amount;
      }
    }
    return change;
  }
  
console.log(calculateChange(3.75, 50));
console.log('-----------');
console.log(calculateChange(4.5, 20));
console.log('-----------');
console.log(calculateChange(7.6, 50));

