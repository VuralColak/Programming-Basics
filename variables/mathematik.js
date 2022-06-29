const alterTick = 8;
const alterTrick = 10;
const alterTrack = 9;

const alterGesamt = alterTick + alterTrick + alterTrack;

console.log(alterGesamt);

const kostenÄpfel = 0.9;
const anzahlÄpfel = 17;
const mehrwertSteuer = 1.19;

const kostenÄpfelFuerBravecoder = kostenÄpfel * anzahlÄpfel;

console.log(
    kostenÄpfelFuerBravecoder,
    "$ Netto",
    kostenÄpfelFuerBravecoder * mehrwertSteuer,
    "$ Brutto"
)
