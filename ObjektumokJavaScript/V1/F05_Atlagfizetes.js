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

//F05 - Mennyit keresnek átlagosan a céges dolgozók?
//Átlagszámítás tétele
function AtlagFizetes(vizsgaltTomb) {
    let osszFizetes = 0;
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        osszFizetes += vizsgaltTomb[i].fizetes;
    }
    return osszFizetes / vizsgaltTomb.length;
}

function AtlagFizetesKiir(kiirandoEredmeny) {
    console.log("A dolgozók átlagfizeteése:" + kiirandoEredmeny);
}
AtlagFizetesKiir(AtlagFizetes(Dolgozok));