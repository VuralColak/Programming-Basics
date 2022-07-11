// Aufgabe 3: (Sachaufgabe)

console.log("Teil 1 : ")

// Du bist für die Implementierung eines Warenkorb-Systems zuständig. Ziel ist es dem Nutzer des Onlineshops das teuerste Produkt, das günstigste Produkt und die Gesamtkosten für alle Produkte anzuzeigen.

// Schreibe einen Algorithmus der für folgenden Input:

let cost = [2.39, 13.99, 4.19, 59.99, 1.99];
let productNames = ["Zahncreme","Tofu", "Müsli", "Toaster", "Kaugummi"];

console.log("cost.length : " + cost.length);
console.log("cost[0] : " + cost[0]);

// productNames = cost;

let teuerste = cost[0];
let guenstigste = cost[0];
let summe = 0;

for(let i =0; i < cost.length; i++){
    
    if(cost[i]>teuerste)
    {
       teuerste=cost[i];
    }
    if (guenstigste > cost[i]) {
        guenstigste = cost[i];
    }
    summe += cost[i];
}

console.log(
    `Das teuerste Produkt ist: ${productNames[cost.indexOf(teuerste)]}`);
  console.log(
    `Das günstigste Produkt ist: ${productNames[cost.indexOf(guenstigste)]}
  `);
  console.log(`Die Summe aller Produkte ist: ${summe}€`);



