// (Sayi Tahmin Oyunu;
// 1-10 arasi rastgele sayi üretilen bir sayiyi asagi yukari ifadeleri ile buldurmaya calisin.
// Puanlama yapin
// Kullanici kac kerede bilecegini belirtebilsin.)



// Number Guessing Game;

// Try to get to find a random number between 1 and 10 with the expressions up and down.

// Make a rating
// Let the user specify how many times he will find.


var times = Number(prompt('How many times can you find it?'))
var guessRight = times;
var guess;
var counter = 0;
var number = Math.floor((Math.random()*100+1));

console.log(number);


while(guessRight>0){
    guessRight--;
    counter++;
    guess = Number(prompt('Write a number please!'));

    if(number == guess){
        console.log(`Congratulations, your guess is correct! You found it ${counter} times.`);
        console.log(`Your score : ${(100- (100/times)*(counter-1)).toFixed(2)}`);
        break;
    } else if (number > guess){
        console.log('Please up!');
    } else {
        console.log('Please down!');
    };

    if(guessRight == 0){
        console.log('Unfortunately, your guess right is over! The Number is ' + number);
    }




}















