//Maximumkeresés tétele
//Érték
function MaximumKeresekErtek_Eljaras(vizsgalt_tomb) {
    let maxErtek = vizsgalt_tomb[0];
    for (let i = 1; i < vizsgalt_tomb.length; i++) {
        if (vizsgalt_tomb[i] > maxErtek) {
            maxErtek = vizsgalt_tomb[i];
        }
    }
    document.write("A tömb legnagyobb elemének értéke:", maxErtek);
}
MaximumKeresekErtek_Eljaras([3, 5, 11, 13, 2]);

//Index
function MaximumKeresekIndex_Eljaras(vizsgalt_tomb) {
    let maxIndex = 0;
    for (let i = 1; i < vizsgalt_tomb.length; i++) {
        if (vizsgalt_tomb[i] > vizsgalt_tomb[maxIndex]) {
            maxIndex = i;
        }
    }
    document.write("<br>A tömb legnagyobb elemének indexe:", maxIndex);
}
MaximumKeresekIndex_Eljaras([3, 5, 11, 13, 2]);

//Tömb: [3, 5, 11, 13, 2]
//FELDOLGOZÓ FÜGGVÉNY
document.write("<hr>");
function MaximumKeresekErtek_Fuggveny(vizsgalt_tomb) {
    let maxErtek = vizsgalt_tomb[0];
    for (let i = 1; i < vizsgalt_tomb.length; i++) {
        if (vizsgalt_tomb[i] > maxErtek) {
            maxErtek = vizsgalt_tomb[i];
        }
    }
    return maxErtek;
}


function MaximumKeresekIndex_Fuggveny(vizsgalt_tomb) {
    let maxIndex = 0;
    for (let i = 1; i < vizsgalt_tomb.length; i++) {
        if (vizsgalt_tomb[i] > vizsgalt_tomb[maxIndex]) {
            maxIndex = i;
        }
    }
    return maxIndex
}

//KIÍRATÓ ELJÁRÁS
function EredmenyKi(szoveg, eredmeny) {
    document.write(szoveg + eredmeny + "<br>");
}

feladat5 = MaximumKeresekErtek_Fuggveny([3, 5, 11, 13, 2]);
EredmenyKi("A tömb legkisebb elemének értéke:", feladat5);

feladat6 = MaximumKeresekIndex_Fuggveny([3, 5, 11, 13, 2]);
EredmenyKi("A tömb legkisebb elemének indexe:", feladat6);