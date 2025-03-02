//Készíts egy szöveg átalakítót, ami a paraméterként kapott szöveg bizonyos karaktereit helyettesíti.
//e vagy E-->3
//o vagy O-->0
//a vagy A-->4
//i, í, I vagy Í-->1

function L33tSz0v3gG3n3r4t0rV1(szoveg) {
    let ujSzoveg = "";
    for (let i = 0; i < szoveg.length; i++) {
        if (szoveg[i].toLowerCase() == "e" || szoveg[i].toLowerCase() == "é") {
            ujSzoveg += 3
        }
        else if (szoveg[i].toLowerCase() == "o" || szoveg[i].toLowerCase() == "ó") {
            ujSzoveg += 0
        }
        else if (szoveg[i].toLowerCase() == "a" || szoveg[i].toLowerCase() == "á") {
            ujSzoveg += 4
        }
        else if (szoveg[i].toLowerCase() == "i" || szoveg[i].toLowerCase() == "í") {
            ujSzoveg += 1
        }
        else {
            ujSzoveg += szoveg[i];
        }
    }
    return ujSzoveg;
}
console.log(L33tSz0v3gG3n3r4t0rV1("LeetSzovegGenerátor"));
console.log(L33tSz0v3gG3n3r4t0rV1("Géza kék az ég!"));

function L33tSz0v3gG3n3r4t0rV2(szoveg) {
    return szoveg.toLowerCase().replaceAll("e", "3").replaceAll("é", "3").replaceAll("E", "3").replaceAll("É", "3").replaceAll("o", "0").replaceAll("ó", "0").replaceAll("O", "0").replaceAll("Ó", "0").replaceAll("a", "4").replaceAll("á", "4").replaceAll("A", "4").replaceAll("Á", "4").replaceAll("i", "1").replaceAll("I", "1").replaceAll("í", "1").replaceAll("Í", "1");
}
console.log(L33tSz0v3gG3n3r4t0rV2("LeetSzovegGenerátor"));
console.log(L33tSz0v3gG3n3r4t0rV2("Géza kék az ég!"));