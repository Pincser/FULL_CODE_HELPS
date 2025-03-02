//Készíts egy függvényt, ami megszámolja, egy paraméterként kapott kifejezésben mennyi magánhangzó található? 
//Ügyelj arra, hogy a magánhangzókból, kicsi és NAGY is lehet! :)
function MaganhangzokMennyisegeV1(szoveg) {
    let maganhangzokSzama = 0;
    for (let i = 0; i < szoveg.length; i++) {
        let betu = szoveg[i].toLowerCase();
        if (betu == "a" || betu == "á" || betu == "e" || betu == "é" || betu == "i" || betu == "í" || betu == "o" || betu == "ó" || betu == "ö" || betu == "ő" || betu == "u" || betu == "ú" || betu == "ü" || betu == "ű") {
            //Kisbetűk esetén:
            maganhangzokSzama++;
        }
    }
    return maganhangzokSzama;
}
console.log(MaganhangzokMennyisegeV1("Géza kék az ég"));
console.log(MaganhangzokMennyisegeV1("Indul a görög aludni"));

function MaganhangzokMennyisegeV2(szoveg) {
    let maganhangzokSzama = 0;
    let maganhangzok = ["a", "á", "e", "é", "i", "í", "o", "ó", "ö", "ő", "u", "ú", "ü", "ű"];
    for (let i = 0; i < szoveg.length; i++) {
        for (let j = 0; j < maganhangzok.length; j++) {
            if (szoveg[i].toLowerCase() == maganhangzok[j]) {
                maganhangzokSzama++;
            }
        }
    }
    return maganhangzokSzama;
}
console.log(MaganhangzokMennyisegeV2("Géza kék az ég"));
console.log(MaganhangzokMennyisegeV2("Indul a görög aludni"));

function MaganhangzokMennyisegeV3(szoveg) {
    let maganhangzokSzama = 0;
    let maganhangzok = "aáeéiíoóöőuúüű";
    for (let i = 0; i < szoveg.length; i++) {
        if (maganhangzok.includes(szoveg[i].toLowerCase())) {
            maganhangzokSzama++;
        }
    }
    return maganhangzokSzama;
}
console.log(MaganhangzokMennyisegeV3("Géza kék az ég"));
console.log(MaganhangzokMennyisegeV3("Indul a görög aludni"));