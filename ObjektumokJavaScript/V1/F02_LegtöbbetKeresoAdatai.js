//Objektumkezelés alapok: Objektum típusú tömb(előre létrehozott)
const Dolgozok = [{
    nev: "Koaxk Ábel",
    kor: 23,
    fizetes: 400000,
    beosztas: "Rendszergazda"
},
{
    nev: "Zsíros B. Ödön",
    kor: 45,
    fizetes: 1200000,
    beosztas: "Ügyvezető Igazgató"
},
{
    nev: "Meg Győző",
    kor: 32,
    fizetes: 600000,
    beosztas: "Marketing Manager"
},
{
    nev: "Békés Csaba",
    kor: 63,
    fizetes: 180000,
    beosztas: "Takarító"
},
{
    nev: "Pofá Zoltán",
    kor: 25,
    fizetes: 300000,
    beosztas: "Biztonsági Őr"
},
{
    nev: "Fejet Lenke",
    kor: 22,
    fizetes: 220000,
    beosztas: "Irodai Titkár"
},
{
    nev: "Vak Cina",
    kor: 30,
    fizetes: 500000,
    beosztas: "Üzem Orvos"
}
];

//F02 - Ki keresi a legtöbbet a cégnél, írd ki az összes adatát!
//Maximum keresés tétel (index alapú keresés)
function LegtobbetKereso(vizsgaltTomb) {
    let legtobbetKeresoIndex = 0;
    for (let i = 1; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].fizetes > vizsgaltTomb[legtobbetKeresoIndex].fizetes) {
            legtobbetKeresoIndex = i;
        }
    }
    return legtobbetKeresoIndex;
}
function LegtobbetKeresoKiir(indexErtek) {
    console.log("A legtöbbet kereső dolgozó neve:" + Dolgozok[indexErtek].nev);
    console.log("A legtöbbet kereső dolgozó életkora:" + Dolgozok[indexErtek].kor);
    console.log("A legtöbbet kereső dolgozó fizetése:" + Dolgozok[indexErtek].fizetes);
    console.log("A legtöbbet kereső dolgozó beosztása:" + Dolgozok[indexErtek].beosztas);
}
LegtobbetKeresoKiir(LegtobbetKereso(Dolgozok));