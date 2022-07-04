console.time("debug");

const a = 1;

if (a == true) {
    console.log ("halloa");
} else {
    console.log("tschüss!a");
}


const b = null;

if (b == true) {
    console.log ("hallob");
} else {
    console.log("tschüss!b");
}


const c = "abc";

if (c == true) {
    console.log ("halloc");
} else {
    console.log("tschüss!c");
}

const d = "";

if (d == true) {
    console.log ("hallod");
} else {
    console.log("tschüss!d");
}


const e = "abc";

if (e) {
    console.log ("halloe");
} else {
    console.log("tschüss!e");
}

const f = "";

if (f == true) {
    console.log ("hallof");
} else {
    console.log("tschüss!f");
}

// 12 == "12" => true
// 12 === "12" => false

const g = "asdasd";

if (!!g == true) {
    console.log ("hallog");
} else {
    console.log("tschüss!g");
}


const h = 1;

if (h == true) {
    console.log ("halloh1");
} else {
    console.log("tschüss!h1");
}

if (h === true) {
    console.log ("halloh2");
} else {
    console.log("tschüss!h2");
}

console.timeEnd("debug");
