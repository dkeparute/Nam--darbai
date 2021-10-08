// ------------------------------------CIKLAI------------------------------------------------

//1. console.log’e, naudojant ciklą atspausdinti penkias eilutes ‘Labas’;

for (let i = 0; i < 5; i++) {
    console.log("labas");
}
console.log("1------------------------------------------------------------");
//2. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje);
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log("2------------------------------------------------------------");
//3. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje);
for (let i = 0; i < 50; i += 10) {
    console.log(i);
}
console.log("3------------------------------------------------------------");
//4. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje);
for (let i = 49; i < 54; i++) {
    console.log(i);
}
console.log("4------------------------------------------------------------");
//5. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje);
for (let i = 4; i >= 0; i--) {
    console.log(i);
}
console.log("5------------------------------------------------------------");
//6. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 2 4 6 8 (vienas skaičius vienoje eilutėje, daugybos konsolėje nenaudoti!, if’ų nenaudoti, ciklas for);

for (let i = 0; i < 9; i += 2) {
    console.log(i);
}
console.log("6------------------------------------------------------------");
//7. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje);
let random;
let pilnasRandom;
for (let i = 0; i < 5; i++) {
    random = Math.random();
    pilnasRandom = Math.trunc(random * 11);
    console.log(pilnasRandom);
}
console.log("7------------------------------------------------------------");

//8. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;

while (atsitiktinis !== 5) {
    atsitiktinis = Math.trunc(Math.random() * 11);
    console.log(atsitiktinis);
}

// ARBA DO WHILE:

// do {
//     let atsitiktinis = Math.trunc(Math.random() * 11);
//        console.log(atsitiktinis);
   
//    } while (atsitiktinis !== 5)

// console.log("8------------------------------------------------------------");

//9. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;
// let suma = 0;

let atsitik;
let suma = 0;
while (suma <= 100) {
    atsitik = Math.trunc(Math.random() * 11);
    suma += atsitik;
    console.log("atsitiktiniai skaiciai: ", atsitik, "atsitiktiniu skaiciu suma: ", suma);
}
console.log("9------------------------------------------------------------");

//10. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;

let atsit;
let ciklas = 0;

while (atsit !== 5 && atsit !== 7) {
    atsit = Math.trunc(Math.random() * 11);
    console.log("atsitiktiniai skaiciai: ", atsit);
    ciklas++;
    console.log("ciklas prasisuko", ciklas);

}
console.log("kiek ciklu prasisuko: ", ciklas);
console.log("10------------------------------------------------------------");

//11. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;

let rand;
let sum = 0;
let cikl = 0;

while (sum < 20 && cikl <= 11) {
    rand = Math.trunc(Math.random() * 11);
    sum += rand;
    cikl++;
    console.log("atsitiktiniai skaiciai: ", rand);
}
console.log("kiek ciklu prasisuko: ", cikl);
console.log("atsitiktiniu skaiciu suma: ", sum);

console.log("11------------------------------------------------------------");

/// 12. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;

let skirt;
let nelyginiai = 0;

while (nelyginiai < 3) {
    skirt = Math.trunc(Math.random() * 11);
    console.log(skirt);
    if (skirt % 2 === 1) {
        nelyginiai++;
    }
}
console.log("12------------------------------------------------------------");

// 13. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti tol, kol neiškris abu vienodi skaičiai;

let r = 0;
let rNaujas = 1;

while (r !== rNaujas) {
    r = Math.trunc(Math.random() * 11);
    rNaujas = Math.trunc(Math.random() * 11);
    console.log("atsitiktinis R: ", r, "atsitiktinis rNaujas: ", rNaujas);
}
console.log("13------------------------------------------------------------");
// 14. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose (skaičiuoti skaičių stulpelių sumas). Ciklą kartoti tol, kol kiekviena iš sumų bus daugiau nei 100;

let random;
let randomNew;
let randomSuma = 0;
let randomNewSuma = 0;

while (randomSuma <= 100 || randomNewSuma <= 100) {
    random = Math.trunc(Math.random() * 11);
    randomSuma += random;
    randomNew = Math.trunc(Math.random() * 11);
    randomNewSuma += randomNew;
    console.log("random skaicius: ", random, " ", "randomNew skaicius: ", randomNew);
    console.log("randomSuma: ", randomSuma, " ", "randomNewSuma: ", randomNewSuma);
}
console.log("14------------------------------------------------------------");
// 15. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti kol bus sugeneruota po tris arba daugiau nelyginių skaičių  (skaičiai atskiruose stulpeliuose).

let random;
let randomNew;
let randomNelyginis = 0;
let randomNewNelyginis = 0;

while (randomNelyginis <= 3 && randomNewNelyginis <= 3) {
    random = Math.trunc(Math.random() * 11);
    randomNew = Math.trunc(Math.random() * 11);
    console.log("random: ", random, " ", "randomNew: ", randomNew);
    if (random % 2 === 1 || randomNew % 2 === 1) {
        randomNelyginis++;
        randomNewNelyginis++;
    }
}

console.log("15------------------------------------------------------------");