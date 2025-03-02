//Megadja a tömb elemeinek értéke összesen mennyi


let szamtomb = [];
for (let i = 0; i < 10; i++) {
    let generaltSzam = Math.round(Math.random() * 100);
    szamtomb.push(generaltSzam);
}
document.write("A tömb elemei:");
for (let i = 0; i < szamtomb.length; i++) {
    document.write(szamtomb[i] + ",");
}

//F01_Összegzés tétele
let osszeg = 0;
for (let i = 0; i < szamtomb.length; i++) {
    osszeg = osszeg + szamtomb[i]; //osszeg+=szamtomb[i]
}
document.write("<br>A tömb elemeinek összege:" + osszeg);