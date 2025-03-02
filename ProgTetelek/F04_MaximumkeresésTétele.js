//Keresés érték alapján és index alapján
//MaxErtek: A legnagyobb elem értékét adja vissza
//MaxErtek=tomb[0]  =>Azért érdemes mert egy olyan elemet választunk ami benne van a tömbben
//A vizsgálat az hogy találunk-e nagyobb mint a MaxErtek, ha igen, módosítjuk azt

//MaxIndex: A legnagyobb elem tömbben elfoglalt indexét adja vissza
//MaxIndex=0  =>Azért érdemes mert egy olyan elemet választunk ami benne van a tömbben(0. index mindig van, különben kár vizsgálni)
//A vizsgálat az hogy találunk-e nagyobb mint a MaxIndex-edik helyen lévő érték (tomb[MaxIndex]), ha igen, módosítjuk az indexet: i-re

let szamtomb = [];
for (let i = 0; i < 10; i++) {
    let generaltSzam = Math.round(Math.random() * 100);
    szamtomb.push(generaltSzam);
}
document.write("A tömb elemei:");
for (let i = 0; i < szamtomb.length; i++) {
    document.write(szamtomb[i] + ",");
}

//F03_Maximumkeresés tétele: Érték alapján
let maxErtek = szamtomb[0];
for (let i = 1; i < szamtomb.length; i++) {
    if (szamtomb[i] > maxErtek) {
        maxErtek = szamtomb[i];
    }
}
document.write("<br>A tömbben lévő legnagyobb elem értéke:" + maxErtek);

//F03_Maximumkeresés tétele: Index alapján
let maxIndex = 0;
for (let i = 1; i < szamtomb.length; i++) {
    if (szamtomb[i] > szamtomb[maxIndex]) {
        maxIndex = i;
    }
}
document.write("<br>A tömbben lévő legnagyobb elem indexe:" + maxIndex);