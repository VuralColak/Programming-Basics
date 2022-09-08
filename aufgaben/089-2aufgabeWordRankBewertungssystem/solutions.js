const pointsOfLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

console.log(pointsOfLetters.indexOf("F"));
console.log(pointsOfLetters.indexOf("O"));
console.log(pointsOfLetters.indexOf("X"));

function wordRank(text) {
    const arrayText = text.toUpperCase().split(" ");
    for (let i = 0; i < arrayText.length; i++) {
        
        const arrayTextWord = arrayText[i].split("");
        let arrayTextWordPoint = 0;
        console.log(arrayTextWord);

        for (let j = 0; j < arrayTextWord.length; j++) {
            arrayTextWordPoint += pointsOfLetters.indexOf(arrayTextWord[j])+1;
            
        }
        console.log(arrayTextWordPoint);
        
    }
};


wordRank("The quick brown fox.");