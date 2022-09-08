// const pointsOfLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// console.log(pointsOfLetters.indexOf("F"));
// console.log(pointsOfLetters.indexOf("O"));
// console.log(pointsOfLetters.indexOf("X"));

// function wordRank(text) {
//     const arrayText = text.toUpperCase().split(" ");
//     for (let i = 0; i < arrayText.length; i++) {
        
//         const arrayTextWord = arrayText[i].split("");
//         let arrayTextWordPoint = 0;
//         console.log(arrayTextWord);

//         for (let j = 0; j < arrayTextWord.length; j++) {
//             arrayTextWordPoint += pointsOfLetters.indexOf(arrayTextWord[j])+1;
            
//         }
//         console.log(arrayTextWordPoint);
        
//     }
// };


// wordRank("The quick brown fox.");



const rankOfLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  
  function wordRank(myStr) {
    const mySentence = myStr.toLowerCase().split(" ");
  
    const arrOfWordPoints = mySentence.map((word) => {
      let pointOfMyWord = 0;
      const pointOfWord = word.split("").reduce((prev, letter) => {
        prev += rankOfLetters.indexOf(letter) + 1;
        return prev;
      }, 0);
      pointOfMyWord += pointOfWord;
      return pointOfMyWord;
    });
  
    return mySentence[arrOfWordPoints.indexOf(Math.max(...arrOfWordPoints))];
  }
  
  console.log(wordRank("The quick brown fox."));
  console.log(wordRank("Nancy is very pretty."));
  console.log(wordRank("Check back tomorrow, man!"));
  console.log(wordRank("Wednesday is hump day."));