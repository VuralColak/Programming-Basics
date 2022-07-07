// if else

const istHeuteDonnerstag = false;

if (istHeuteDonnerstag) {
    console.log("Es ist Donnerstag");
} else {
    console.log("Es ist NICHT Donnerstag");
}



// if else if

const tag = "Donnerstag";

if (tag == "Montag") {
    console.log("Montag");
} else if (tag == "Dienstag"){
    console.log("Dienstag");
} else if (tag == "Mittwoch"){
    console.log("Mittwoch");
} else if (tag == "Donnerstag"){
    console.log("Donnerstag");
} else if (tag == "Freitag"){
    console.log("Freitag");
} else if (tag == "Samstag"){
    console.log("Samstag");
} else {
    console.log("Sonntag");
};


// Wenn der Code im if statement nur aus einem Ausdruck bzw. einer Zeile besteht, braucht man die geschweiften Klammern nicht.

const day = "Donnerstag";

if (day === "Donnerstag") console.log("Bald Wochenende");



// Schwierige Bedinungen


const alterSuse = 18;
const alterMarie = 19;
const alterJonas = 7;


if (alterSuse >= 18 && alterMarie >= 18 && alterJonas >= 18) {
    console.log("Ihr dürft alle drei auf das Festival");
} else {
    console.log("Alle müssen >= 18 sein!");
};


if (alterMarie >= 18 || alterJonas >= 18)
    console.log("Einer von euch ist >= 18");






// Ternary = Ein kurzes if, else statement auf einer Zeile.


const alterJonas1 = 18;

alterJonas1 >= 18
    ? console.log("Du darfst Vodka kaufen")
    : console.log("Du darfst Saft kaufen");



const verkäuferAntwort =
    alterJonas1 >= 18 ? "Du darfst Vodka kaufen" : "Du darfst Saft kaufen";

console.log(verkäuferAntwort);





const istJonaszwischen16Und21 = alterJonas1 >= 16 && alterJonas1 < 21;









// Varablen mit dem Or|| Operator zuweisen

const value1 = null;
const value2 = "Hallo";

const derWahreWert = value1 || value2;

console.log(derWahreWert);


//

value3 = false;
value4 = null;

const ergebnis = value3 && value4;
console.log({ergebnis});



//

const serverAntwortFollower = null;
// const serverAntwortFollower = ["Benni123", "Juliaxsd"];
const defaultFollow = ["Du hast noch keine Follower"];

const showUser = serverAntwortFollower || defaultFollow;
console.log(showUser);

// ----

const darfUserBildSehen = false;
const bild = "Das Bild";
const output = darfUserBildSehen && bild;
console.log(output);






