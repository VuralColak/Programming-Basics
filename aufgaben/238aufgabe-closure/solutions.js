console.log('   ');
console.log('------Aufgabe-1------');
console.log('   ');

// Aufgabe 1:

// Schreibe eine Closure, mit der es möglich ist, Zahlen auf eine bestimmte Anzahl an Nachkommastellen zu runden.

// Die Anzahl soll über die outer function festgelegt werden können.

// Die Zahl, die an die inner function übergeben wird, soll dann entsprechend gerundet werden.

// Beispiele:
// Funktion rundet auf 2 Nachkommastellen:
// 5.492858 => 5.49
// 12.7491313 => 12.75
// Funktion rundet auf 4 Nachkommastellen:
// 5.492858 => 5.4929
// 12.7491313 => 12.7491


function outerfunction1(y) {
    const nachkommastellen = (x) => {
        console.log(x.toFixed(y));
    };
    return nachkommastellen;
};

const zweiRundet = outerfunction1(2);
const vierRundet = outerfunction1(4);

zweiRundet(5.492858);
vierRundet(12.7491313);

zweiRundet(12.7491313);
vierRundet(5.492858);




console.log('   ');
console.log('------Aufgabe-2------');
console.log('   ');

// Aufgabe 2:

// Schreibe eine Closure, die anhand eines Parameters entscheidet, welche Suchmaschine genutzt wird.

// Beim Aufruf der inner function soll dann die passende URL zum Suchbegriff und der zuvor festgelegten Suchmaschine ausgegeben werden.

// Verwende für die Wahl der Suchmaschine den Namen.

// Beispiele für URLs:
// Google: https://www.google.com/search?q=closures
// DuckDuckGo: https://duckduckgo.com/?q=closures
// Bing: https://www.bing.com/search?q=closures


function outerfunction2(suchmachineName) {
    const innerfunction = (searchTerm) => {
        if (suchmachineName === "Google") {
            console.log(`https://www.google.com/search?q=${searchTerm}`);
        } else if (suchmachineName === "DuckDuckGo") {
            console.log(`https://duckduckgo.com/?q=${searchTerm}`);
        } else if (suchmachineName === "Bing") {
            console.log(`https://www.bing.com/search?q=${searchTerm}`);
        }
    };
    return innerfunction;
};

const google = outerfunction2("Google");
const duckDuckGo = outerfunction2("DuckDuckGo");
const bing = outerfunction2("Bing");

google("Mars");
duckDuckGo("Erde");
bing("Jupiter");