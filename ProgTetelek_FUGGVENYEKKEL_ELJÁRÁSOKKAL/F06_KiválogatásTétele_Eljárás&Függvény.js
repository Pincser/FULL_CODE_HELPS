//Kiválogatás tétele
function KivalogatasTetele_Eljaras(vizsgalt_tomb) {
    document.write("A tömbben lévő páros számok listája:");
    for (let i = 0; i < vizsgalt_tomb.length; i++) {
        if (vizsgalt_tomb[i] % 2 == 0) {
            document.write(vizsgalt_tomb[i] + ",");
        }
    }
}
KivalogatasTetele_Eljaras([3, 5, 11, 13, 2, 6, 14]);

//Tömb: [3, 5, 11, 13, 2, 6, 14]
//FELDOLGOZÓ FÜGGVÉNY
document.write("<hr>");
function KivalogatasTetele_Fuggveny(vizsgalt_tomb) {
    let kivalogatottak = []
    for (let i = 0; i < vizsgalt_tomb.length; i++) {
        if (vizsgalt_tomb[i] % 2 == 0) {
            kivalogatottak.push(vizsgalt_tomb[i]);
        }
    }
    return kivalogatottak;//Tömbbel térünk vissza!
}


function EredmenyKi(szoveg, eredmeny) {
    document.write(szoveg + eredmeny + "<br>");
}

feladat8 = KivalogatasTetele_Fuggveny([3, 5, 11, 13, 2, 6, 14]);
EredmenyKi("A tömbben lévő páros számok listája:", feladat8);