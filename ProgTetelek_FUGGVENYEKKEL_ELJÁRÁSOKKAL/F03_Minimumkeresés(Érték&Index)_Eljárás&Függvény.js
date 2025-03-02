//Minimumkeresés tétele
//Érték
function MinimumKeresekErtek_Eljaras(vizsgalt_tomb) {
    let minErtek = vizsgalt_tomb[0];
    for (let i = 0; i < vizsgalt_tomb.length; i++) {
        if (vizsgalt_tomb[i] < minErtek) {
            minErtek = vizsgalt_tomb[i];
        }
    }
    document.write("A tömb legkisebb elemének értéke:", minErtek);
}
MinimumKeresekErtek_Eljaras([3, 5, 11, 13, 2]);

//Index

function MinimumKeresekIndex_Eljaras(vizsgalt_tomb) {
    let minIndex = 0;
    for (let i = 0; i < vizsgalt_tomb.length; i++) {
        if (vizsgalt_tomb[i] < vizsgalt_tomb[minIndex]) {
            minIndex = i;
        }
    }
    document.write("<br>A tömb legkisebb elemének indexe:", minIndex);
}
MinimumKeresekIndex_Eljaras([3, 5, 11, 13, 2]);

//Tömb: [3, 5, 11, 13, 2]
//FELDOLGOZÓ FÜGGVÉNY
document.write("<hr>");
function MinimumKeresekErtek_Fuggveny(vizsgalt_tomb) {
    let minErtek = vizsgalt_tomb[0];
    for (let i = 0; i < vizsgalt_tomb.length; i++) {
        if (vizsgalt_tomb[i] < minErtek) {
            minErtek = vizsgalt_tomb[i];
        }
    }
    return minErtek;
}


function MinimumKeresekIndex_Fuggveny(vizsgalt_tomb) {
    let minIndex = 0;
    for (let i = 0; i < vizsgalt_tomb.length; i++) {
        if (vizsgalt_tomb[i] < vizsgalt_tomb[minIndex]) {
            minIndex = i;
        }
    }
    return minIndex;
}

//KIÍRATÓ ELJÁRÁS
function EredmenyKi(szoveg, eredmeny) {
    document.write(szoveg + eredmeny + "<br>");
}

feladat3 = MinimumKeresekErtek_Fuggveny([3, 5, 11, 13, 2]);
EredmenyKi("A tömb legkisebb elemének értéke:", feladat3);

feladat4 = MinimumKeresekIndex_Fuggveny([3, 5, 11, 13, 2]);
EredmenyKi("A tömb legkisebb elemének indexe:", feladat4);