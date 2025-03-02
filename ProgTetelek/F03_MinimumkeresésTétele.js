//Keresés érték alapján és index alapján
//MinErtek: A legkisebb elem értékét adja vissza
//MinErtek=tomb[0]  =>Azért érdemes mert egy olyan elemet választunk ami benne van a tömbben
//A vizsgálat az hogy találunk-e kisebbet mint a MinErtek, ha igen, módosítjuk azt

//MinIndex: A legkisebb elem tömbben elfoglalt indexét adja vissza
//MinIndex=0  =>Azért érdemes mert egy olyan elemet választunk ami benne van a tömbben(0. index mindig van, különben kár vizsgálni)
//A vizsgálat az hogy találunk-e kisebbet mint a MinIndex-edik helyen lévő érték (tomb[MinIndex]), ha igen, módosítjuk az indexet: i-re

let szamtomb = [];
for (let i = 0; i < 10; i++) {
    let generaltSzam = Math.round(Math.random() * 100);
    szamtomb.push(generaltSzam);
}
document.write("A tömb elemei:");
for (let i = 0; i < szamtomb.length; i++) {
    document.write(szamtomb[i] + ",");
}

//F03_Minimumkeresés tétele: Érték alapján
let minErtek = szamtomb[0];
for (let i = 1; i < szamtomb.length; i++) {
    if (szamtomb[i] < minErtek) {
        minErtek = szamtomb[i];
    }
}
document.write("<br>A tömbben lévő legkisebb elem értéke:" + minErtek);

//F03_Minimumkeresés tétele: Index alapján
let minIndex = 0;
for (let i = 1; i < szamtomb.length; i++) {
    if (szamtomb[i] < szamtomb[minIndex]) {
        minIndex = i;
    }
}
document.write("<br>A tömbben lévő legkisebb elem indexe:" + minIndex);