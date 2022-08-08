// Um Newsletter zu versenden, benötigen wir einige Daten unserer User. Am wichtigsten ist natürlich die Email-Adresse, aber auch Vor- und Nachnamen für die Anrede sollen gespeichert werden. Noch dazu kann jeder User eine Liste mit Interessensgebieten angeben (Musik, IT, Sport...), um spezielle Newsletter zu erhalten.

// 1. Erstelle eine Übersicht mit unseren Usern. Wende hier dein Wissen über Objekte an, um eine möglichst effiziente Datenstruktur zu erreichen.

// 2. Beim Aufruf des Skripts soll eine Ausgabe erzeugt werden, die in etwa so aussieht:
// "Peter Müller ist mit der Adresse petermueller@web.de registriert und erhält Newsletter zu den Themen Sport und Kochen.
// Sarah Schmidt ist mit der Adresse sarah@schmidt.de registriert und erhält Newsletter zu den Themen Musik, IT und Reisen.

// Zusatzaufgaben:
// 3. Berücksichtige den Fall, dass ein User kein Interessensgebiet angegeben hat und formuliere die Ausgabe hierfür passend um.
// 4. Nimm noch ein Registrierungsdatum mit auf und lass es ebenfalls ausgeben ("... ist mit der Adresse x seit y registriert...")


// Raja Underwood,pellentesque.tincidunt.tempus@outlook.org, Musik | IT | Sport,
// Owen Bennett,aliquet@protonmail.net, Programmieren | Nachrichten | Aktien,
// Amery Conway,erat.neque.non@google.ca, Reisen | Festivals,
// Lillian Clay,adipiscing.elit@aol.couk, Autos | IT,
// Nicholas Berg,nullam.feugiat@yahoo.net, Essen


///////////////////////////////////////
// aufgabe-1 //

const KundeA = {
    vorname : 'Raja',
    nachname : 'Underwood',
    email : 'pellentesque.tincidunt.tempus@outlook.org',
    registrierungsDatum : 2008,
    interessensGebieten : 'Musik, IT und Sport'
};



const KundeB = {
    vorname : 'Owen',
    nachname : 'Bennett',
    email : 'aliquet@protonmail.net',
    registrierungsDatum : 2012,
    interessensGebieten : 'Programmieren, Nachrichten und Aktien'
};



const KundeC = {
    vorname : 'Amery',
    nachname : 'Conway',
    email : 'erat.neque.non@google.ca',
    registrierungsDatum : 2010,
    interessensGebieten : 'Reisen und Festivals'
};

const KundeD = {
    vorname : 'Lillian',
    nachname : 'Clay',
    email : 'adipiscing.elit@aol.couk',
    registrierungsDatum : 2009,
    interessensGebieten : 'Autos und IT'
};


const KundeE = {
    vorname : 'Nicholas',
    nachname : 'Berg',
    email : 'nullam.feugiat@yahoo.net',
    registrierungsDatum : 2017,
    interessensGebieten : 'Essen'
};

const KundeF = {
    vorname : 'Vural',
    nachname : 'Colak',
    email : 'nullam.feugiat@yahoo.net',
    registrierungsDatum : 2020,
    interessensGebieten : null,
}


///////////////////////////////////////
// aufgabe-2, -3, -4 //

const Kunden = [KundeA, KundeB, KundeC, KundeD, KundeE, KundeF];

for (let i = 0; i < Kunden.length; i++) {
    if (Kunden[i].interessensGebieten === null) {
        console.log(`${Kunden[i].vorname} ${Kunden[i].nachname} ist mit der Adresse ${Kunden[i].email} seit ${Kunden[i].registrierungsDatum} registriert und hat keine Interessensgebiete.`);
    } else {
        console.log(`${Kunden[i].vorname} ${Kunden[i].nachname} ist mit der Adresse ${Kunden[i].email} seit ${Kunden[i].registrierungsDatum} registriert und erhält Newsletter zu den Themen ${Kunden[i].interessensGebieten}`);
        console.log(' ');
    }
};




