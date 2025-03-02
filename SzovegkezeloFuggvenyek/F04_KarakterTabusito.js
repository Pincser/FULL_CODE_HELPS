//Szövegkezelős feladatok
//F04 - KarakterTabusito: Törlölje a paramérként kapott szövegben, a paraméterként kapott betűt!

function KarakterTabusitoV1(szoveg, betu) {
    let ujSzoveg = "";
    for (let i = 0; i < szoveg.length; i++) {
        if (szoveg[i] == betu) {
            ujSzoveg += "";
        }
        else {
            ujSzoveg += szoveg[i];
        }
    }
    return ujSzoveg;
}

function KarakterTabusitoV2(szoveg, betu) {
    return szoveg.replaceAll(betu, "");
}


console.log(KarakterTabusitoV1("alma", "a"));
console.log(KarakterTabusitoV1("eszperente", "e"));
console.log(KarakterTabusitoV1("megszentségteleníthetetlenségeskedéseitekért", "t"));


console.log(KarakterTabusitoV2("alma", "a"));
console.log(KarakterTabusitoV2("eszperente", "e"));
console.log(KarakterTabusitoV2("megszentségteleníthetetlenségeskedéseitekért", "t"));