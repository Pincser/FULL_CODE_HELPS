//Szövegkezelős feladatok
//F01 - Karaktermennyiség - Megmondja, adott paraméterként kapott szövegről, hogy benne hány darab, 
//szintén paraméterként kapott betű van!
function KarakterMennyiseg(szoveg, karakter) {
    let karakterMennyiseg = 0;
    for (let i = 0; i < szoveg.length; i++) {
        if (szoveg[i] == karakter) {
            karakterMennyiseg++;
        }
    }
    return karakterMennyiseg;
}
console.log(KarakterMennyiseg("alma", "a"));
console.log(KarakterMennyiseg("eszperente", "e"));
console.log(KarakterMennyiseg("rokkó a ravasz rabló rácsapot egy ragyogó drágakő rakományra, de rettentő rémesen ráfaragott", "r"));
console.log(KarakterMennyiseg("megszentségteleníthetetlenségeskedéseitekért", "t"));

//Szövegkezelő függvénnyel!
function KarakterMennyisegV2(szoveg, karakter) {
    return szoveg.length - szoveg.replaceAll(karakter, "").length
}
console.log(KarakterMennyisegV2("alma", "a"));