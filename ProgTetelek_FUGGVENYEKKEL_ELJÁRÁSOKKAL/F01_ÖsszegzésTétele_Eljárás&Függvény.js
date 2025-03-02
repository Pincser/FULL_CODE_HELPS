//Összegzés tétele
function OsszegzesTetele_Eljaras(vizsgalt_tomb) {
    let osszeg = 0;
    for (let i = 0; i < vizsgalt_tomb.length; i++) {
        osszeg = osszeg + vizsgalt_tomb[i];
    }
    document.write("A vizsgált tömb elemeinek összege:" + osszeg + "<br>");
}
OsszegzesTetele_Eljaras([3, 5, 11, 13, 2]);


//FELDOLGOZÓ FÜGGVÉNY
function OsszegzesTetele_Fuggveny(vizsgalt_tomb) {
    let osszeg = 0;
    for (let i = 0; i < vizsgalt_tomb.length; i++) {
        osszeg = osszeg + vizsgalt_tomb[i];
    }
    return osszeg;
}

//KIÍRATÓ ELJÁRÁS
function EredmenyKi(szoveg, eredmeny) {
    document.write(szoveg + eredmeny + "<br>");
}

feladat1 = OsszegzesTetele_Fuggveny([3, 5, 11, 13, 2])
EredmenyKi("A tömb elemeinek összege:", feladat1);