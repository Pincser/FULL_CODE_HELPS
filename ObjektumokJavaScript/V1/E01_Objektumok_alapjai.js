//Objektumkezelés alapok
let objektum = {};
objektum.id = 6;
objektum.nev = "Békés Csaba";
objektum.kor = 65;

console.log(objektum.id);
console.log(objektum.nev);
console.log(objektum.kor);

//Objektuim típusú tömb:
let adatok = [];//Üres objektum típusú tömböt is úgy hozunk létre mint simát
//Onnantól lesz objektum típusú, ha elhelyezünk benne egy objektumot...

adatok.push(objektum);
//Innentől a tömbünk tartalmaz objektumot!
console.log(adatok[0]);

//Érték módosítása:
adatok[0].nev = "Minta Márton";
console.log(adatok[0].nev);//Módosítás eredménye, mindenütt módosul!

let ujObjektum = {}
ujObjektum.id = 3;
ujObjektum.nev = "Alka Ida";
ujObjektum.kor = 22;
ujObjektum.beosztas = "Robbantási szakértő";//Akár extra tulajdonsága is lehet egy objektumnak...
adatok.push(ujObjektum);
console.log(adatok[0]);
console.log(adatok[1]);