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
