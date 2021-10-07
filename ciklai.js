// CIKLAI
//1. console.log’e, naudojant ciklą atspausdinti penkias eilutes ‘Labas’;

//  for(let i =0; i<5; i++){
//     console.log("Labas");
// }

//2. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje);

// for(let i =0; i<5; i++) {
//   console.log(i);
// }

//3. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje);

//  for(let i = 0; i < 50; i+=10) {
//      console.log(i);
//  }

//4. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje);

// for(let i = 49; i<=53; i++) {
//     console.log(i);
// }

//5. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje);

// for(let i=4; i>=0; i--) {
//     console.log(i);
// }

//6. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 2 4 6 8 (vienas skaičius vienoje eilutėje, daugybos konsolėje nenaudoti!, if’ų nenaudoti, ciklas for);

// for(let i= 0; i <9; i+=2) {
//     console.log(i);
// }

//7. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje);

// for(let i= 0 ; i< 5; i++) {

// console.log(Math.floor(Math.random() * 11));

// }

// Math.floor - apvalinimo funkcija, pvz. 4.9 = 4

//8. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;

// let random;
// while (random != 5) {
//     random = Math.floor(Math.random() * 11);
//    console.log(random);
// }

//9. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;
// let suma = 0;

// while (suma <= 100) {
//     let random = Math.floor(Math.random() * 11);
//     console.log("atsitiktinis skaicius: ", random);
//     suma += random;
//     console.log("suma yra:", suma);
// }

//10. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;

// let ciklas = 0;
// let random;
// while (random != 5 && random != 7) {
//     random = Math.floor(Math.random() * 11);
//     console.log(random);
//     ciklas++;

// }
// console.log("ciklų kiekis: ", ciklas);

//11. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;

// let suma = 0;
// let ciklas = 0;
// let random;

// while (suma <= 20 || ciklas < 11) {
//     random = Math.floor(Math.random() * 11);
//     console.log(random);
//     ciklas++;
//     suma+=random;
// }
// console.log("ciklų kiekis: ", ciklas);
// console.log("suma", suma);

//12. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;

// let nelyginis = 0;

// while(nelyginis < 3) {
// let random = Math.floor(Math.random() * 11);
// console.log(random);
// if(random % 2 === 1 ) {
// nelyginis++;
// }
// }
// console.log("nelyginis skaicius", nelyginis);

