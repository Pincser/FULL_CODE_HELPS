//Megszámlálás tétele
function MegszamlalasTetele_Eljaras(vizsgalt_tomb) {
    let darab = 0;
    for (let i = 0; i < vizsgalt_tomb.length; i++) {
        if (vizsgalt_tomb[i] % 2 == 0) {
            darab++;//darab+=1; darab=darab+1;
        }
    }
    document.write("A tömbben lévő páros számok mennyisége:", darab);
}
MegszamlalasTetele_Eljaras([3, 5, 11, 13, 2, 6, 14]);

//Tömb: [3, 5, 11, 13, 2, 6, 14]
//FELDOLGOZÓ FÜGGVÉNY
document.write("<hr>");
function MegszamlalasTetele_Fuggveny(vizsgalt_tomb) {
    let darab = 0;
    for (let i = 0; i < vizsgalt_tomb.length; i++) {
        if (vizsgalt_tomb[i] % 2 == 0) {
            darab++;//darab+=1; darab=darab+1;
        }
    }
    return darab;
}


function EredmenyKi(szoveg, eredmeny) {
    document.write(szoveg + eredmeny + "<br>");
}

feladat7 = MegszamlalasTetele_Fuggveny([3, 5, 11, 13, 2, 6, 14]);
EredmenyKi("A tömbben lévő páros számok mennyisége:", feladat7);