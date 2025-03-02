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


//F03 - Legfiatalabb dolgozo megkeresése az objektum típusú tömbben
function LegfiatalabbDolgozo(vizsgaltTomb) {
    let legfiatalabbDolgozoIndex = 0;
    for (let i = 1; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].kor < vizsgaltTomb[legfiatalabbDolgozoIndex].kor) {
            legfiatalabbDolgozoIndex = i;
        }
    }
    return legfiatalabbDolgozoIndex;
}
function LegfiatalabbDolgozoKiir(indexErtek) {
    console.log("A legfiatalabb dolgozó neve:" + Dolgozok[indexErtek].nev);
    console.log("A legfiatalabb dolgozó életkora:" + Dolgozok[indexErtek].kor);
    console.log("A legfiatalabb dolgozó fizetése:" + Dolgozok[indexErtek].fizetes);
    console.log("A legfiatalabb dolgozó beosztása:" + Dolgozok[indexErtek].beosztas);
}
LegfiatalabbDolgozoKiir(LegfiatalabbDolgozo(Dolgozok));

