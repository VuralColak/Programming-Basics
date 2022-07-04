const a = 1;

if (a == true) {
    console.log ("hallo");
} else {
    console.log("tschüss!");
}


const b = null;

if (b == true) {
    console.log ("hallo");
} else {
    console.log("tschüss!");
}


const c = "abc";

if (c == true) {
    console.log ("hallo");
} else {
    console.log("tschüss!");
}

const d = "";

if (d == true) {
    console.log ("hallo");
} else {
    console.log("tschüss!");
}


const e = "abc";

if (e) {
    console.log ("hallo");
} else {
    console.log("tschüss!");
}

const f = "";

if (f == true) {
    console.log ("hallo");
} else {
    console.log("tschüss!");
}

// 12 == "12" => true
// 12 === "12" => false

const g = "asdasd";

if (!!g == true) {
    console.log ("hallog");
} else {
    console.log("tschüss!g");
}