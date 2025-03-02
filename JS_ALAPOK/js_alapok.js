//Ebben az esetben a külső állományban lévő kódok futhatnak majd le! Ha hivatkozok a fájlra.


// Megjegyzés szövege: egysoros, vagy sor végi
/* Megjegyzés szövege egysoros*/

/*Több
soros
megjegyzést
írni*/

//Kiíratási módok
//felugró ablak:
alert("Szeretem a programozást!");
document.write("<h1>Szeretem a programozást!</h1>");
document.write("<p>Azért szeretem mert a JS is egy programozási nyelv!</p>");
console.log("Szeretem a programozást");

//VÁLTOZÓK:
//TÍPUSA: szám, szöveg, logikai, tömb, objektum, undefined, symbol
//Deklaráció: létrehozzuk a változót
let valtozo;
//Értékadás: értéket adunk a létrehozott változónak
valtozo = 5;

//let - (ÚJ) NEM ÚJRADEKLARÁLHATÓ, MÓDOSÍTHATÓ, hatásköre :{}
//const - (ÚJ) NEM ÚJRADEKLARÁLHATÓ, NEM MÓDOSÍTHATÓ, hatásköre: GLOBÁLIS
//var - (RÉGI) ÚJRADEKLARÁLHATÓ VOLT, MÓDOSÍTHATÓ, hatásköre: GLOBÁLIS

let szamEgesz = 21;
let szamValos = 3.6;//valós szám esetén pontot teszünk
let szoveg = "alma";//használhatunk idézőjelet
let szoveg2 = 'körte';//vagy aposztrófot
let logikai = true;
let logikai2 = false;

document.write(szamEgesz);//Változó kiíratása annak nevére való hivatkozással

//Változó és szöveg megjelenítése
document.write("<br>Szám típusú változók: " + szamEgesz + "," + szamValos);//PLUSZJEL HASZNÁLATA, aposztróffal vagy idézőjellel
document.write('<br>Szám típusú változók: ', szamEgesz, ',', szamValos);//VESSZŐ HASZNÁLATA, aposztróffal vagy idézőjellel
document.write(`<br>Szám típusú változók: ${szamEgesz}, ${szamValos}`);//HIVATKOZÁS HASZNÁLATA (AltGr+7 idézőjel helyett)
alert(`Szám típusú változók: ${szamEgesz}, ${szamValos}`);//HIVATKOZÁS HASZNÁLATA (AltGr+7 idézőjel helyett)
console.log(`Szám típusú változók: ${szamEgesz}, ${szamValos}`);//HIVATKOZÁS HASZNÁLATA (AltGr+7 idézőjel helyett)

/*Operátorok:
    Értékadó operátor: =
    Aritmetikai operátorok: + , - , * , / , % , **
*/

//Alapfeladat:
let a = 5;//Változó megadása
let b = 3;//Változó megadása
let osszeg = a + b; //Művelet elvégzése
document.write(`<br>A ${a}+${b} összege:${osszeg}`);//Eredmény megjelenítése