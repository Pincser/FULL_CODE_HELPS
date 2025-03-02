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

//F08 - Mennyi van a legidősebb embernek hátra a nyugdíjig, ha a nyugdíjkorhatár egységesen 65 év!
function NyugdijigHatralevoIdo(vizsgaltTomb, vizsgaltSzemely) {
    return 65 - vizsgaltTomb[vizsgaltSzemely].kor;//Ide kell a legidősebb személy indexe majd, a függvényben
}

function NyugdijigHatralevoIdoKiir(evekSzama) {
    console.log("A legidősebb dolgozónak nyugdíjig hátralévő évek száma:" + evekSzama);
}
NyugdijigHatralevoIdoKiir(NyugdijigHatralevoIdo(Dolgozok, LegidosebbDolgozo(Dolgozok)));



//F09 - Mennyi idő van átlagosan a cégnél a nyugdíjig(mindenkinek)
function AtlagNyugdijHatralevoIdo(vizsgaltTomb) {
    osszHatralevoIdo = 0;
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        osszHatralevoIdo += NyugdijigHatralevoIdo(vizsgaltTomb, i);
    }
    return osszHatralevoIdo / vizsgaltTomb.length;
}
function AtlagNyugdijHatralevoIdoKiir(eredmeny) {
    console.log("A cégnél nyugdíjig átlagosan hátralévő idő:", eredmeny.toFixed(2));
}
AtlagNyugdijHatralevoIdoKiir(AtlagNyugdijHatralevoIdo(Dolgozok));

