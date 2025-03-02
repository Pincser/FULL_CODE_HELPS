//Megadja a tömb elemeinek átlaga mennyi, összegből számolva, elemek számával elosztva
//segítség: tombneve.length (a tömb elemeinek száma)

let szamtomb = [];
for (let i = 0; i < 10; i++) {
    let generaltSzam = Math.round(Math.random() * 100);
    szamtomb.push(generaltSzam);
}
document.write("A tömb elemei:");
for (let i = 0; i < szamtomb.length; i++) {
    document.write(szamtomb[i] + ",");
}


//F02_Átlagszámítás tétele

let osszeg = 0;
for (let i = 0; i < szamtomb.length; i++) {
    osszeg = osszeg + szamtomb[i]; //osszeg+=szamtomb[i]
}
document.write("<br>A tömb elemeinek átlaga:" + osszeg / szamtomb.length);
//.toFixed(2) => Kerekítés, 2 tizedesjegyre, a minta szerint