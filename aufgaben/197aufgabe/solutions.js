// Hier die Zusatzaufgaben zum Üben:

// 1. Schreibe eine Funktion, die aus allen übergebenen Strings den längsten String zurückgibt.

// 2. Schreibe eine Funktion, die alle Vorkommen eines Wortes in einem Text prüft.

// 3. Schreibe eine Funktion, die alle Wörter in einem Text rückwärts geschrieben zurückgibt. Die Position der Worte soll sich dabei aber nicht ändern.

// Beispiel: "the quick brown fox jumps over the lazy dog" => "eht kciuq nworb xof spmuj revo eht yzal god"

////////////////////////////////////////
console.log("    ");
console.log("---------Aufgabe-1-------");
console.log("    ");

const text1 = "Authoritatively incentivize excellent alignments whereas sources rapidiously.";

const text2 = "Rapidiously incubate enterprise architectures for covalent expertise. Completely deliver cross-media core competencies through extensive technologies.";

const text3 = "Progressively repurpose best-of-breed markets whereas functional value. Collaboratively incubate multifunctional core competencies and mission-critical manufactured products. Uniquely restore progressive bandwidth rather than timely initiatives. Interactively exploit client-centric e-business without convergence. Intrinsicly brand open-source infomediaries vis-a-vis economically sound expertise.";


// const text1Length = text1.length;
// const text2Length = text2.length;
// const text3Length = text3.length;


// const aufgabe1 = () => Math.max(text1Length, text2Length, text3Length);

// console.log(aufgabe1());


function theLongestString(str1, str2, str3){
    if (str1.length > str2.length && str1.length > str3.length){
    return "text1";
    } else if (str2.length > str1.length && str2.length > str3.length){
    return "text2";
    }
    return "text3";
    };


console.log(theLongestString(text1, text2, text3));





////////////////////////////////////////
console.log("    ");
console.log("---------Aufgabe-2-------");
console.log("    ");



const aufgabe2 = (str4, word1) => str4.includes(word1);


console.log(aufgabe2(text1, "excellent"));


////////////////////////////////////////
console.log("    ");
console.log("---------Aufgabe-3-------");
console.log("    ");

const aufgabe3 = (str5) => str5.split(" ");
const reverseText = [];

for(let i=0; i<aufgabe3(str5).split(" ").length; i++){
    reverseText.push(aufgabe3(str5)[i].reverse());
};

console.log(aufgabe3(text1));
console.log({reverseText});