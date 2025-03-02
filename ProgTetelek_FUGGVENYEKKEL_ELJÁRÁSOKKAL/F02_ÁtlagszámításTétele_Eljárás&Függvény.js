//Átlagszámítás tétele
function AtlagSzamitasTetele_Eljaras(vizsgalt_tomb) {
    let osszeg = 0;
    for (let i = 0; i < vizsgalt_tomb.length; i++) {
        osszeg = osszeg + vizsgalt_tomb[i];
    }
    document.write("A vizsgált tömb elemeinek összege:" + osszeg / vizsgalt_tomb.length + "<br>");
}
AtlagSzamitasTetele_Eljaras([3, 5, 11, 13, 2]);


//FELDOLGOZÓ FÜGGVÉNY
function AtlagSzamitasTetele_Fuggveny(vizsgalt_tomb) {
    let osszeg = 0;
    for (let i = 0; i < vizsgalt_tomb.length; i++) {
        osszeg = osszeg + vizsgalt_tomb[i];
    }
    return osszeg / vizsgalt_tomb.length;
}

//KIÍRATÓ ELJÁRÁS
function EredmenyKi(szoveg, eredmeny) {
    document.write(szoveg + eredmeny + "<br>");
}

feladat2 = AtlagSzamitasTetele_Fuggveny([3, 5, 11, 13, 2])
EredmenyKi("A tömb elemeinek átlaga:", feladat2);