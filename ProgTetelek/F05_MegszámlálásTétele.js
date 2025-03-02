//Megszámol adott feltétellel rendelkező elemeket
//Ezúttal páros számokat

let szamtomb = [];
for (let i = 0; i < 10; i++) {
    let generaltSzam = Math.round(Math.random() * 100);
    szamtomb.push(generaltSzam);
}
document.write("A tömb elemei:");
for (let i = 0; i < szamtomb.length; i++) {
    document.write(szamtomb[i] + ",");
}

//F05_MegszámlálásTétele
let darab = 0;
for (let i = 0; i < szamtomb.length; i++) {
    if (szamtomb[i] % 2 == 0) {
        darab++;
    }
}
document.write("<br>A tömbben lévő páros számok mennyisége:" + darab);