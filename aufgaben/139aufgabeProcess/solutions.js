// Gib doch mal mit console.log(process) die Variable process aus und schaue, was sich darin alles verbirgt. Hier stehen uns einige nützliche Informationen zur Verfügung (siehe auch https://nodejs.org/api/globals.html). Anschließend bearbeite die folgenden Aufgaben:


// ## Umgebung
// ------------------------
// 1. Entwickle eine Funktion, welche die aktuell genutzte Node-Version ausgibt.

// 2. Schreibe eine Funktion, die das Betriebssystem (und die Architektur) ausgibt.

// 3. Finde mit einer Funktion heraus, in welchem Pfad das Skript gerade ausgeführt wird.

// 4. Steuere den Aufruf der drei Funktionen über Argumente:
//     - nutze Begriffe wie "node", "os" oder "directory", um die drei Funktionen zu identifizieren
//     - schreibe zuerst so, dass nur eine Funktion pro Skriptaufruf ausgeführt wird
//     - erweitere deinen Code so, dass du beliebig viele Begriffe übergeben kannst und diese dann die passenden Funktionen aufrufen
//     - füge ein Argument "all" hinzu, welcher alle Funktionen ausführt
//     - erweitere das Skript nach Belieben mit weiteren Funktionen und Argumenten


// ## Zeit
// ------------------------
// 1. Lege eine Funktion an, die die aktuelle Uhrzeit ausgibt

// 2. Erstelle eine Funktion, die das aktuelle Datum ausgibt

// 3. Steuere das Ausgabeformat über ein Argument (YYYY-MM-DD, hh:mm, DD.MM.YY)


// ## Countdown
// ------------------------
// 1. Entwickle eine Funktion, die einen Countdown ausgibt, der von 30 Sekunden herunterzählt. Jede Sekunde soll die verbleibende Zeit ausgegeben werden

// 2. Steuere den Countdown über ein Argument

// 3. Anstatt der Sekunden, lasse auch Minuten oder sogar Stunden zu. Überlege Dir, wie Du Sekunden von Minuten und Stunden unterscheiden kannst



console.log(' ');
console.log('---Umgebung-1------');
console.log(' ');

// 1. Entwickle eine Funktion, welche die aktuell genutzte Node-Version ausgibt.

function node() {
    return process.version;
}


console.log(node());


console.log(' ');
console.log('---Umgebung-2------');
console.log(' ');

// 2. Schreibe eine Funktion, die das Betriebssystem (und die Architektur) ausgibt.


function os() {
    return process.platform;
}


console.log(os());


console.log(' ');
console.log('---Umgebung-3------');
console.log(' ');

// 3. Finde mit einer Funktion heraus, in welchem Pfad das Skript gerade ausgeführt wird.


function directory() {
    return process.cwd();
    // return process.argv[1];
}


console.log(directory());


console.log(' ');
console.log('---Umgebung-4------');
console.log(' ');

// 4. Steuere den Aufruf der drei Funktionen über Argumente:
//     - nutze Begriffe wie "node", "os" oder "directory", um die drei Funktionen zu identifizieren
//     - schreibe zuerst so, dass nur eine Funktion pro Skriptaufruf ausgeführt wird
//     - erweitere deinen Code so, dass du beliebig viele Begriffe übergeben kannst und diese dann die passenden Funktionen aufrufen
//     - füge ein Argument "all" hinzu, welcher alle Funktionen ausführt
//     - erweitere das Skript nach Belieben mit weiteren Funktionen und Argumenten

function all() {
    return process.version + ' --//-- ' + process.platform + ' --//-- ' + process.cwd();
};

console.log(all());


console.log(' ');
console.log('---Zeit-1------');
console.log(' ');

// 1. Lege eine Funktion an, die die aktuelle Uhrzeit ausgibt.



function time() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    console.log(h +':'+ m +':'+ s);
};


if (process.argv[2] === "time") {

    return time();

};



console.log(' ');
console.log('---Zeit-2------');
console.log(' ');

// 2. Erstelle eine Funktion, die das aktuelle Datum ausgibt

function datum() {
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth()+1;
    var year = d.getFullYear();
    console.log(day +':'+ month +':'+ year);
};


if (process.argv[2] === "datum") {

    return datum();

};



console.log(' ');
console.log('---Zeit-3------');
console.log(' ');

// 3. Steuere das Ausgabeformat über ein Argument (YYYY-MM-DD, hh:mm, DD.MM.YY)


if (process.argv[2] === "allDate") {

    return time() + ', ' + datum();

};



console.log(' ');
console.log('---Countdown-1------');
console.log(' ');

// 1. Entwickle eine Funktion, die einen Countdown ausgibt, der von 30 Sekunden herunterzählt. Jede Sekunde soll die verbleibende Zeit ausgegeben werden



// function countdown() {
//     for (let i = 30; i > 0; i--) {
//             console.log(i);
//     };
// }

// setInterval(countdown, 1000);


// const stop = setInterval(countdown, 1000);

let time3 = 30;

function countdown() {
    console.log(time3);
    time3--;
    if(time3 === 0)clearInterval(stop);
}



console.log(' ');
console.log('---Countdown-2------');
console.log(' ');

// 2. Steuere den Countdown über ein Argument

if(process.argv[2] === "countdown") countdown();


console.log(' ');
console.log('---Countdown-3------');
console.log(' ');

// 3. Anstatt der Sekunden, lasse auch Minuten oder sogar Stunden zu. Überlege Dir, wie Du Sekunden von Minuten und Stunden unterscheiden kannst



const stop2 = setInterval(countDown, 1000);

const startingMinutes = 10;
let time4 = startingMinutes * 60;
function countDown(){
    const minutes = Math.floor(time4/60);
    let seconds = time4 % 60;
    seconds = seconds <10 ? "0" + seconds : seconds;
    console.log(`${minutes}:${seconds}`)
    time4 --;
    if(time4 === 0)clearInterval(stop2);
}

if(process.argv[2] === "countDown2") countDown();






