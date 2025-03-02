
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

//let - (ÚJ) NEM ÚJRADEKLARÁLHATÓ, MÓDOSÍTHATÓ, hatásköre :{ }
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

//Mintafeladat - Összeadas:
let a = 5;//Változó megadása
let b = 3;//Változó megadása
let osszeg = a + b; //Művelet elvégzése
document.write(`<br>A ${a}+${b} összege:${osszeg}`);//Eredmény megjelenítése

//1. feladat: Alapműveletek feladat (+,-,*,/,%,**):
//Változók megadása
let szam_egy = 5;
let szam_ketto = 2;

//Műveletek elvégzése
let osszege = szam_egy + szam_ketto;
let kulonbseg = szam_egy - szam_ketto;
let szorzat = szam_egy * szam_ketto;
let hanyados = szam_egy / szam_ketto;
let maradek = szam_egy % szam_ketto;
let hatvany = szam_egy ** szam_ketto;

//Eredmények megjelenítése:
document.write(`<br>A ${szam_egy} és ${szam_ketto} összege: ${osszege}`);
document.write(`<br>A ${szam_egy} és ${szam_ketto} különbsége: ${kulonbseg}`);
document.write(`<br>A ${szam_egy} és ${szam_ketto} szorzata: ${szorzat}`);
document.write(`<br>A ${szam_egy} és ${szam_ketto} hányadosa: ${hanyados}`);
document.write(`<br>A ${szam_egy} és ${szam_ketto} osztási maradék: ${maradek}`);
document.write(`<br>A ${szam_egy} a ${szam_ketto}-dik hatvány értéke: ${hatvany}`);


//2. feladat: Négyzet kerület terület
//Változók megadása
let a_oldal = 6;

//Műveletek elvégzése
let kerulet = a_oldal * 4;
let terulet = a_oldal * a_oldal;

//Eredmények megjelenítése:
document.write(`<br>Az ${a_oldal} egységnyi oldalú négyzet kerülete: ${kerulet} egység`);
document.write(`<br>Az ${a_oldal} egységnyi oldalú négyzet területe: ${terulet} egység<sup>2</sup>`);
