//Készíts egy olyan függvényt, ami a paraméterként kapott kifejezés minden karakterét kisbeűssé alakítja, valamint a szóközöket "_" (alulvonás) karakterre cseréli

function snake_case_szoveg_generatorV1(kifejezes) {
    let ujSzoveg = "";
    for (let i = 0; i < kifejezes.length; i++) {
        if (kifejezes[i] == " ") {
            ujSzoveg += "_";
        }
        else {
            ujSzoveg += kifejezes[i].toLowerCase();
        }
    }
    return ujSzoveg;
}
console.log(snake_case_szoveg_generatorV1("Géza kék az ég"));

function snake_case_szoveg_generatorV2(kifejezes) {
    return kifejezes.toLowerCase().split(" ").join("_");
}
console.log(snake_case_szoveg_generatorV2("Géza kék az ég"));

function snake_case_szoveg_generatorV3(kifejezes) {
    return kifejezes.toLowerCase().replaceAll(' ', '_');
}
console.log(snake_case_szoveg_generatorV3("Géza kék az ég"));