/**
 * Ternary
 *
 * Was ist eine Ternary?
 * Ein kurzes if, else statement auf einer Zeile.
 *
 * Eine Ternary ist so aufgebaut:
 *
 * bedingung ? antwort falls wahr : antwort falls falsch
 */

 const alterJonas = 48;

 alterJonas >= 18
     ? console.log("Du darfst Vodka kaufen")
     : console.log("Du darfst Saft kaufen");
 
 /**
  * Aber eine Ternary kann noch mehr:
  * Wird eine Ternary ausgeführt, bleibt am Ende die Antwort stehen.
  */
 
 const verkäuferAntwort =
     alterJonas >= 18 ? "Du darfst Vodka kaufen" : "Du darfst Saft kaufen";
 
 console.log(verkäuferAntwort);
 
 const istJonasZwischen16Und21 = alterJonas >= 16 && alterJonas <= 21;
 console.log(
     istJonasZwischen16Und21 ? "Ja er ist dazwischen" : "Nein ist er nicht"
 );



 const alterDevin = 15;
 const alterMia = 17;
 altersCheck1 = alterDevin > 16;
 altersCheck2 = alterMia > 16;

 console.log(
    altersCheck1 ? (altersCheck2 ? `beide dürfen` : `zu jung`) : `zu jung`
 );

