//Készíts egy függvényt amiben megadva egy kifejezést paraméterben, minden szót nagy kezdőbetűssé alakít benne, valamint a szóközöket eltávolítja belőle

function Capitalize(szoveg) {
    return szoveg[0].toUpperCase() + szoveg.slice(1, szoveg.length).toLowerCase();
}

function PascalCaseSzovegGenerator(kifejezes) {
    let szovegElemek = kifejezes.split(" ");
    let generaltSzoveg = "";
    for (let i = 0; i < szovegElemek.length; i++) {
        generaltSzoveg += Capitalize(szovegElemek[i]);
    }
    return generaltSzoveg;
}
console.log(PascalCaseSzovegGenerator("Géza kék az ég"));