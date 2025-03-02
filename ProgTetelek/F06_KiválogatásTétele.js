//Megjelenít, valamilyen módon, páros számokat a tömbben
//Pl kiírja, vagy egy tömbbe kiválogatja az értéküket...

let szamtomb = [];
for (let i = 0; i < 10; i++) {
    let generaltSzam = Math.round(Math.random() * 100);
    szamtomb.push(generaltSzam);
}
document.write("A tömb elemei:");
for (let i = 0; i < szamtomb.length; i++) {
    document.write(szamtomb[i] + ",");
}

//F06_KiválogatásTétele
document.write("<br>A tömbben lévő páros számok listája:");
for (let i = 0; i < szamtomb.length; i++) {
    if (szamtomb[i] % 2 == 0) {
        document.write(szamtomb[i] + ",");
    }
}

let parosak = [];
for (let i = 0; i < szamtomb.length; i++) {
    if (szamtomb[i] % 2 == 0) {
        parosak.push(szamtomb[i]);
    }
}
document.write("<br>A tömbben lévő páros számok mennyisége:" + parosak.length);

document.write("<br>A tömbben lévő páros számok listája:");
for (let i = 0; i < parosak.length; i++) {
    document.write(parosak[i] + ",");
}