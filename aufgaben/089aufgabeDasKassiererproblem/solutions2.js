// Find the minimum dollar bill's count to represent some value based on the availables bills.

// You will recieve the value and an array as input (the array contains the available bills).

// For instance:

// minimumBillCount(100, [10, 50, 20]) should return 2; (2x$50)

// minimumBillCount(500, [100, 50, 20]) should return 5; (5x$100)

// minimumBillCount(40, [1, 10, 20]) should return 2; (2x$20)

// minimumBillCount(5, [1, 10, 20]) should return 5; (5x$1)

// It is guaranteed that the value can always be divided into given bills, and there are no "tricky" edge cases.

function minimumBillCount(value, availables) {
    let bills = 0;
    availables
      .sort((a, b) => b - a)
      .forEach((bill) => {
        bills += parseInt(value / bill);
        value %= bill;
      });
    return bills;
  }
  
  console.log(minimumBillCount(100, [10, 50, 20])); // should return 2; (2x$50)
  
  console.log(minimumBillCount(500, [100, 50, 20])); // should return 5; (5x$100)
  
  console.log(minimumBillCount(40, [1, 10, 20])); // should return 2; (2x$20)
  
  console.log(minimumBillCount(5, [1, 10, 20])); // should return 5; (5x$1)
  
  console.log(minimumBillCount(1234567, [1, 10, 20]));
  console.log(minimumBillCount(1010, [50, 1, 20]));
  console.log(minimumBillCount(913045, [1, 10, 20, 50, 100]));