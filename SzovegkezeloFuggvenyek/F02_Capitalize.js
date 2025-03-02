//Szövegkezelős feladatok
//F02 - Capitalize: alakítása át a kifejezést NAGY kezdőbetűssé!
function CapitalizeV1(szoveg) {
    let nagykezdobetusSzoveg = ""
    for (let i = 0; i < szoveg.length; i++) {
        if (i == 0) {
            nagykezdobetusSzoveg += szoveg[0].toUpperCase();
        }
        else {
            nagykezdobetusSzoveg += szoveg[i].toLowerCase();
        }
    }
    return nagykezdobetusSzoveg;
}
function CapitalizeV2(szoveg) {
    let nagykezdobetusSzoveg = szoveg[0].toUpperCase();
    for (let i = 1; i < szoveg.length; i++) {
        nagykezdobetusSzoveg += szoveg[i].toLowerCase();
    }
    return nagykezdobetusSzoveg;
}

function CapitalizeV3(szoveg) {
    return szoveg[0].toUpperCase() + szoveg.slice(1, szoveg.length).toLowerCase();
}

console.log(CapitalizeV1("JavaScript4Life"));
console.log(CapitalizeV2("JavaScript4Life"));
console.log(CapitalizeV3("JavaScript4Life"));