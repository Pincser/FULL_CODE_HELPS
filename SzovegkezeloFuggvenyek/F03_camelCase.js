//Szövegkezelős feladatok
//F03 - camelCaseSzoveg: alaksa át a kapott kifejezést camelCase szöveggé -->egyszerű szöveg==>egyszerűSzöveg
function Capitalize(szoveg) {
    return szoveg[0].toUpperCase() + szoveg.slice(1, szoveg.length).toLowerCase();
}

function camelCaseSzovegV1(leirasSzoveg) {
    let elemek = leirasSzoveg.split(" ");
    let ujSzoveg = elemek[0].toLowerCase();
    for (let i = 1; i < elemek.length; i++) {
        ujSzoveg += elemek[i].charAt(0).toUpperCase() + elemek[i].toLowerCase().substring(1);
    }
    return ujSzoveg;
}


//Capitalize függvény felhasználásával:
function camelCaseSzovegV2(leirasSzoveg) {
    let elemek = leirasSzoveg.split(" ");
    let ujSzoveg = elemek[0].toLowerCase();
    for (let i = 1; i < elemek.length; i++) {
        ujSzoveg += Capitalize(elemek[i]);
    }
    return ujSzoveg;
}

console.log(camelCaseSzovegV1("Géza kék az ég"));
console.log(camelCaseSzovegV2("Géza kék az ég"));