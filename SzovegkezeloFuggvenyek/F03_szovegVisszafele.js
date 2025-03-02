//Készíts egy függvényt, ami a paraméterként kapott szöveget, fordítva adja vissza!
function SzovegvisszafeleV1(szoveg) {
    let forditottSzoveg = "";
    for (let i = szoveg.length - 1; i >= 0; i--) {
        forditottSzoveg += szoveg[i];
    }
    return forditottSzoveg;
}
console.log(SzovegvisszafeleV1("Géza kék az ég"));

function SzovegvisszafeleV2(szoveg) {
    return szoveg.split("").reverse().join("");
}
console.log(SzovegvisszafeleV2("Géza kék az ég"));