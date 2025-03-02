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
//F10 - Mennyi a dolgozók mediánbére
//A dolgozók fizetése sorba rendezve, és ezekből a középsőt kell kiválasztani
//Ha a vizsgált elemek száma páros, akkor a középső kettő átlagát kell venni!

function Medianber(vizsgaltTomb) {
    let berek = [];
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        berek.push(vizsgaltTomb[i].fizetes);
    }
    berek.sort(function (a, b) { return a - b });
    if (berek.length % 2 == 0) {
        return (berek[berek.length / 2 - 1] + berek[berek.length / 2]) / 2;
    }
    else {
        return berek[(berek.length / 2) - 0, 5]; //Itt 0.5 lehet a vége, ezért elég kivonni 0.5-öt
    }
}
console.log(Medianber(Dolgozok));

