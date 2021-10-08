// ---------------------------------------MASYVAI---------------------------------------
//1. Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);

// let pinigine = [];
// const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
// console.log(ilgis);
// for(let i = 0; i < ilgis; i++) {
//     let pinigai = Math.trunc(Math.random() * 11);
//     pinigine.push(pinigai);

// }
// console.log(pinigine);
// console.log("1------------------------------------------------------------");

//2. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;

// let suma = 0;

// let pinigine = [];
// const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
// console.log("masyvo ilgis: ", ilgis);
// for(let i = 0; i < ilgis; i++) {
//     let pinigai = Math.trunc(Math.random() * 11);
//     pinigine.push(pinigai);
//     suma += pinigai;


// }
// console.log("pinigine: ", pinigine);
// console.log("pinigų esančių piniginėje suma: ", suma);
// console.log("2------------------------------------------------------------");

//3. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;

// let popieriniuSkaiciuSuma = 0;

// let pinigine = [];
// const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
// console.log("masyvo ilgis: ", ilgis);
// for(let i = 0; i < ilgis; i++) {
//     let pinigai = Math.trunc(Math.random() * 11);
//     pinigine.push(pinigai);
// if(pinigai > 2) {
//     popieriniuSkaiciuSuma += pinigai;
// }
// }
// console.log(pinigine);
// console.log("popierinių pinigų (skaičių didesnių už 2) reikšmių suma: ", popieriniuSkaiciuSuma);
// console.log("3------------------------------------------------------------");

// 4. Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;

// let pinigine = [];
// let ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
// console.log(ilgis);
// for (let i = 0; i < ilgis; i++) {
//     let pinigai = Math.trunc(Math.random() * 11);
//     pinigine.push(pinigai);
// }
// console.log("mastvo ilgis: ", pinigine);

// for (let i = 0; i < ilgis; i++) {
//     if (pinigine[i] <= 2) {
//         pinigine[i] = 0;
//     }

// }
// console.log("masyvo ilgis: ", pinigine);
// console.log("4------------------------------------------------------------");

// // 5. Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;

// let pinigine = [];
// const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
// console.log(ilgis);
// for (let i = 0; i < ilgis; i++) {
//     pinigine.push(Math.trunc(Math.random() * 11));
// }
// console.log(pinigine);

// let didziausia = 0;
// let kartai = 0;

// for (let i = 0; i < ilgis; i++) {
//     if (pinigine[i] > didziausia) {
//         didziausia = pinigine[i];
//         kartai = 0;
//     }
//     if (pinigine[i] === didziausia) {
//         kartai++;
//     }
// }

// console.log("didziausia reiksme: ", didziausia);
// console.log("kiek kartu: ", kartai);

//6. Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;

// let pinigine = [];
// const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
// console.log(ilgis);
// for (let i = 0; i < ilgis; i++) {
//     pinigine.push(Math.trunc(Math.random() * 11));
// }
// console.log(pinigine);

// for(let i = 0; i < ilgis; i++) {
//     if(pinigine[i] === 0) {
//         pinigine[i] = i;
//     }
// }
// console.log("visas masyvas: ", pinigine);

//7. Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;

// let pinigine = [];
// const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
// console.log(ilgis);
// for (let i = 0; i < ilgis; i++) {
//     pinigine.push(Math.trunc(Math.random() * 11));
// }
// console.log(pinigine);

// for (let i = ilgis; i < 30; i++) {
//     pinigine[i] = Math.trunc(Math.random() * (30 - 10) + 10);
    
// }
// console.log(pinigine);
