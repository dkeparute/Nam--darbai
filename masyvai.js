// ---------------------------------------MASYVAI---------------------------------------
//1. Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);

// let pinigine = [];
// const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
// console.log("masyvo ilgis: ", ilgis);
// for (let i = 0; i < ilgis; i++) {
//     let pinigai = Math.trunc(Math.random() * 11);
//     pinigine.push(pinigai);
// }
// console.log("masyvas: ", pinigine);
// console.log("1------------------------------------------------------------");

//2. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;

// let suma = 0;

// let pinigine = [];
// const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
// console.log("masyvo ilgis: ", ilgis);
// for (let i = 0; i < ilgis; i++) {
//     let pinigai = Math.trunc(Math.random() * 11);
//     pinigine.push(pinigai);
//     suma += pinigai;
// }
// console.log("masyvas: ", pinigine);
// console.log("pinigų esančių piniginėje suma: ", suma);

// console.log("2------------------------------------------------------------");

//3. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;

// let popieriniuSkaiciuSuma = 0;

// let pinigine = [];
// const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
// console.log("masyvo ilgis: ", ilgis);
// for (let i = 0; i < ilgis; i++) {
//     let pinigai = Math.trunc(Math.random() * 11);
//     pinigine.push(pinigai);
//     if(pinigai > 2) {
//         popieriniuSkaiciuSuma += pinigai;
//     }
// }
// console.log("masyvas: ", pinigine);
// console.log("popierinių pinigų (skaičių didesnių už 2) reikšmių suma: ", popieriniuSkaiciuSuma);
// console.log("3------------------------------------------------------------");

// 4. Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;

// let pinigine = [];
// const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
// console.log("masyvo ilgis: ", ilgis);
// for (let i = 0; i < ilgis; i++) {
//     let pinigai = Math.trunc(Math.random() * 11);
//     pinigine.push(pinigai);
// }
// console.log("masyvas: ", pinigine);

// for (let i = 0; i < ilgis; i++) {
//     if (pinigine[i] <= 2) {
//         pinigine[i] = 0;
//     }
// }
// console.log("reikšmes, kurios yra mažesnės arba lygios 2 ir perdarytos i 0): ", pinigine);
// console.log("4------------------------------------------------------------");

// // 5. Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;

// let pinigine = [];
// const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
// console.log("masyvo ilgis: ", ilgis);
// for (let i = 0; i < ilgis; i++) {
//     let pinigai = Math.trunc(Math.random() * 11);
//     pinigine.push(pinigai);
// }
// console.log("masyvas: ", pinigine);

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

// console.lo]g("didziausia masyvo reiksme: ", didziausia);
// console.log("kiek tokių didžiausių reikšmių masyve yra: ", kartai);

// console.log("5------------------------------------------------------------");

//6. Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;

// let pinigine = [];
// const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
// console.log("masyvo ilgis: ", ilgis);
// for (let i = 0; i < ilgis; i++) {
//     let pinigai = Math.trunc(Math.random() * 11);
//     pinigine.push(pinigai);
// }
// console.log("masyvas: ", pinigine);

// for(let i = 0; i < ilgis; i++) {
//     if(pinigine[i] === 0) {
//         pinigine[i] = i;
//     }
// }
// console.log("visi masyvo elementai, kurie lygus 0 pakeisti i tu elementu indeksu reiksmes: ", pinigine);
// console.log("6------------------------------------------------------------");

//7. Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;

// let pinigine = [];
// const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
// console.log("masyvo ilgis: ", ilgis);
// for (let i = 0; i < ilgis; i++) {
//     let pinigai = Math.trunc(Math.random() * 11);
//     pinigine.push(pinigai);
// }
// console.log("masyvas: ", pinigine);

// for (let i = ilgis; i < 30; i++) {
//     pinigine[i] = Math.trunc(Math.random() * (30 - 10) + 10);

// }
// console.log("i masyva prideta tiek reiksmiu jog masyvo ilgis butu 30:", pinigine);
// console.log("7------------------------------------------------------------");

// 8. Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);

// let pinigine = [];
// const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
// console.log("masyvo ilgis: ", ilgis);
// for (let i = 0; i < ilgis; i++) {
//     let pinigai = Math.trunc(Math.random() * 11);
//     pinigine.push(pinigai);
// }
// console.log("masyvas: ", pinigine);

// let monetos = [];
// let popieriniaiPinigai = [];

// for (let i = 0; i < ilgis; i++) {
//     if (pinigine[i] <= 2) {
//         monetos.push(pinigine[i]);
//     }
//     if(pinigine[i] > 2) {
//         popieriniaiPinigai.push(pinigine[i]);
//     }
// }
// console.log("naujas monetu masyvas su reiksmemis mazesnemis arba lygioms 2: ", monetos);
// console.log("naujas popieriniu pinigu masyvas su reiksmemis didesnemis uz 2: ", popieriniaiPinigai);
// console.log("8------------------------------------------------------------");

//9. Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;

// let pinigine = [];
// const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
// console.log("masyvo ilgis: ", ilgis);
// for (let i = 0; i < ilgis; i++) {
//     let pinigai = Math.trunc(Math.random() * 11);
//     pinigine.push(pinigai);
// }
// console.log("masyvas: ", pinigine);

// let monetos = [];
// let popieriniaiPinigai = [];

// for (let i = 0; i < ilgis; i++) {
//     if (pinigine[i] <= 2) {
//         monetos.push(pinigine[i]);
//     }
//     if(pinigine[i] > 2) {
//         popieriniaiPinigai.push(pinigine[i]);
//     }
// }
// console.log("naujas monetu masyvas su reiksmemis mazesnemis arba lygioms 2: ", monetos);
// console.log("naujas popieriniu pinigu masyvas su reiksmemis didesnemis uz 2: ", popieriniaiPinigai);
// console.log("9------------------------------------------------------------");

// let naujaPinigine = [];
// naujaPinigine.push(monetos);
// naujaPinigine.push(popieriniaiPinigai);
// console.log("pinigine su skyreliais: monetoms ir popieriniams pinigams: ", naujaPinigine);

//10. Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];

// let pinigine = [];
// const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
// console.log("masyvo ilgis: ", ilgis);
// for (let i = 0; i < ilgis; i++) {
//     let pinigai = Math.trunc(Math.random() * 11);
//     pinigine.push(pinigai);
// }
// console.log("masyvas: ", pinigine);

// let monetos = [];
// let popieriniaiPinigai = [];

// for (let i = 0; i < ilgis; i++) {
//     if (pinigine[i] <= 2) {
//         monetos.push(pinigine[i]);
//     }
//     if(pinigine[i] > 2) {
//         popieriniaiPinigai.push(pinigine[i]);
//     }
// }
// console.log("naujas monetu masyvas su reiksmemis mazesnemis arba lygioms 2: ", monetos);
// console.log("naujas popieriniu pinigu masyvas su reiksmemis didesnemis uz 2: ", popieriniaiPinigai);

// let naujaPinigine = [];
// naujaPinigine.push(monetos);
// naujaPinigine.push(popieriniaiPinigai);

// let korteles = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
// naujaPinigine.push(korteles);

// console.log("pinigine su trimis skyreliais: ", naujaPinigine);
// console.log("10------------------------------------------------------------");

//11. Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;

// let pinigine = [];
// const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
// console.log("masyvo ilgis: ", ilgis);
// for (let i = 0; i < ilgis; i++) {
//     let pinigai = Math.trunc(Math.random() * 11);
//     pinigine.push(pinigai);
// }
// console.log("masyvas: ", pinigine);

// let monetos = [];
// let popieriniaiPinigai = [];

// for (let i = 0; i < ilgis; i++) {
//     if (pinigine[i] <= 2) {
//         monetos.push(pinigine[i]);
//     }
//     if (pinigine[i] > 2) {
//         popieriniaiPinigai.push(pinigine[i]);
//     }
// }
// console.log("naujas monetu masyvas su reiksmemis mazesnemis arba lygioms 2: ", monetos);
// console.log("naujas popieriniu pinigu masyvas su reiksmemis didesnemis uz 2: ", popieriniaiPinigai);

// let naujaPinigine = [];
// naujaPinigine.push(monetos);
// naujaPinigine.push(popieriniaiPinigai);

// let korteles = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
// for (let i = 0; i < korteles.length - 1; i++) {
//     if (korteles[i] > korteles[i + 1]) {
//         let laikinasKintamasis = korteles[i];
//         korteles[i] = korteles[i + 1];
//         korteles[i + 1] = laikinasKintamasis;
//         i = -1;
//     }
// }

// naujaPinigine.push(korteles);
// console.log("pinigine su trimis skyreliais, o korteles isrusiuotos abeceles tvarka: ", naujaPinigine);

// console.log("11------------------------------------------------------------");

//12. Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' (su rand generuokite atsitiktines reikšmes 'MasterCard' arba 'Visa' ir rašykite į masyvą) iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20;

// let pinigine = [];
// const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
// console.log("masyvo ilgis: ", ilgis);
// for (let i = 0; i < ilgis; i++) {
//     let pinigai = Math.trunc(Math.random() * 11);
//     pinigine.push(pinigai);
// }
// console.log("masyvas: ", pinigine);

// let monetos = [];
// let popieriniaiPinigai = [];

// for (let i = 0; i < ilgis; i++) {
//     if (pinigine[i] <= 2) {
//         monetos.push(pinigine[i]);
//     }
//     if (pinigine[i] > 2) {
//         popieriniaiPinigai.push(pinigine[i]);
//     }
// }
// console.log("naujas monetu masyvas su reiksmemis mazesnemis arba lygioms 2: ", monetos);
// console.log("naujas popieriniu pinigu masyvas su reiksmemis didesnemis uz 2: ", popieriniaiPinigai);

// let naujaPinigine = [];
// naujaPinigine.push(monetos);
// naujaPinigine.push(popieriniaiPinigai);

// let korteles = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
// for (let i = 0; i < korteles.length - 1; i++) {
//     if (korteles[i] > korteles[i + 1]) {
//         let laikinasKintamasis = korteles[i];
//         korteles[i] = korteles[i + 1];
//         korteles[i + 1] = laikinasKintamasis;
//         i = -1;
//     }
// }

// naujaPinigine.push(korteles);
// console.log("pinigine su trimis skyreliais, o korteles isrusiuotos abeceles tvarka: ", naujaPinigine);

// for (let i = korteles.length; i < 20; i++) {
//     if (Math.trunc(Math.random() * 2) < 1) {
//         korteles[i] = "MasterCard";
//     } else {
//         korteles[i] = "Visa";
//     }
//     console.log("i korteliu skyriu prideta atsitiktiniu Visa ir Master kortelius ir masyvo ilgis yra 20:", korteles);

// console.log("12------------------------------------------------------------");


// 13. Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;

// let pinigine = [];
// const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
// console.log("masyvo ilgis: ", ilgis);
// for (let i = 0; i < ilgis; i++) {
//     let pinigai = Math.trunc(Math.random() * 11);
//     pinigine.push(pinigai);
// }
// console.log("masyvas: ", pinigine);

// let monetos = [];
// let popieriniaiPinigai = [];

// for (let i = 0; i < ilgis; i++) {
//     if (pinigine[i] <= 2) {
//         monetos.push(pinigine[i]);
//     }
//     if (pinigine[i] > 2) {
//         popieriniaiPinigai.push(pinigine[i]);
//     }
// }
// console.log("naujas monetu masyvas su reiksmemis mazesnemis arba lygioms 2: ", monetos);
// console.log("naujas popieriniu pinigu masyvas su reiksmemis didesnemis uz 2: ", popieriniaiPinigai);

// let naujaPinigine = [];
// naujaPinigine.push(monetos);
// naujaPinigine.push(popieriniaiPinigai);

// let korteles = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
// for (let i = 0; i < korteles.length - 1; i++) {
//     if (korteles[i] > korteles[i + 1]) {
//         let laikinasKintamasis = korteles[i];
//         korteles[i] = korteles[i + 1];
//         korteles[i + 1] = laikinasKintamasis;
//         i = -1;
//     }
// }

// naujaPinigine.push(korteles);
// console.log("pinigine su trimis skyreliais, o korteles isrusiuotos abeceles tvarka: ", naujaPinigine);

// for (let i = korteles.length; i < 20; i++) {
//     if (Math.trunc(Math.random() * (30 - 10) + 10) < 18) {
//         korteles[i] = "MasterCard";
//     } else {
//         korteles[i] = "Visa";
//     }
// }
// console.log("i korteliu skyriu prideta atsitiktiniu Visa ir Master kortelius ir masyvo ilgis yra 20:", korteles);

// let kiekVisa = 0;
// let kiekMaster = 0;

// for (let i = 0; i < korteles.length; i++) {
//     if (korteles[i] === "MasterCard") {
//         kiekMaster++;
//     }
//     if (korteles[i] === "Visa") {
//         kiekVisa++;
//     }
// }

// console.log("kiek Visos korteliu: ", kiekVisa, "kiek MasterCard korteliu: ", kiekMaster);

// reik sugrizti cia

// console.log("13------------------------------------------------------------");

// 14. Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų, kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki 9999999999;

// let pinigine = [];
// const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
// console.log("masyvo ilgis: ", ilgis);
// for (let i = 0; i < ilgis; i++) {
//     let pinigai = Math.trunc(Math.random() * 11);
//     pinigine.push(pinigai);
// }
// console.log("masyvas: ", pinigine);

// let monetos = [];
// let popieriniaiPinigai = [];

// for (let i = 0; i < ilgis; i++) {
//     if (pinigine[i] <= 2) {
//         monetos.push(pinigine[i]);
//     }
//     if (pinigine[i] > 2) {
//         popieriniaiPinigai.push(pinigine[i]);
//     }
// }
// console.log("naujas monetu masyvas su reiksmemis mazesnemis arba lygioms 2: ", monetos);
// console.log("naujas popieriniu pinigu masyvas su reiksmemis didesnemis uz 2: ", popieriniaiPinigai);

// let naujaPinigine = [];
// naujaPinigine.push(monetos);
// naujaPinigine.push(popieriniaiPinigai);

// let korteles = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
// naujaPinigine.push(korteles);

// console.log("pinigine su trimis skyreliais: ", naujaPinigine);

// let bilietai = [];
// for (let i = 0; i < 10; i++) {
//     let reiksmes = Math.trunc(Math.random() * (9999999999 - 1000000000) + 1000000000);
//     bilietai.push(reiksmes);
// }
// naujaPinigine.push(bilietai);
// console.log("pinigine su keturiais skyreliais: ", naujaPinigine);
// console.log("14------------------------------------------------------------");

// 15. Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;

// let pinigine = [];
// const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
// console.log("masyvo ilgis: ", ilgis);
// for (let i = 0; i < ilgis; i++) {
//     let pinigai = Math.trunc(Math.random() * 11);
//     pinigine.push(pinigai);
// }
// console.log("masyvas: ", pinigine);

// let monetos = [];
// let popieriniaiPinigai = [];

// for (let i = 0; i < ilgis; i++) {
//     if (pinigine[i] <= 2) {
//         monetos.push(pinigine[i]);
//     }
//     if (pinigine[i] > 2) {
//         popieriniaiPinigai.push(pinigine[i]);
//     }
// }
// console.log("naujas monetu masyvas su reiksmemis mazesnemis arba lygioms 2: ", monetos);
// console.log("naujas popieriniu pinigu masyvas su reiksmemis didesnemis uz 2: ", popieriniaiPinigai);

// let naujaPinigine = [];
// naujaPinigine.push(monetos);
// naujaPinigine.push(popieriniaiPinigai);

// let korteles = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
// naujaPinigine.push(korteles);

// console.log("pinigine su trimis skyreliais: ", naujaPinigine);

// naujaPinigine.push([]);
// for (let i = 0; i < 10; i++) {
//     naujaPinigine[3].push(Math.trunc(Math.random() * (9999999999 - 1000000000) + 1000000000))

// }

// console.log("pinigine su keturiais skyreliais: ", naujaPinigine);

// for (let i = 0; i < naujaPinigine[3].length-1; i++) {
//     if (naujaPinigine[3][i] < naujaPinigine[3][i + 1]) {
//         let laikinasKintamasis = naujaPinigine[3][i];
//         naujaPinigine[3][i] = naujaPinigine[3][i + 1];
//         naujaPinigine[3][i + 1] = laikinasKintamasis;
//         i = -1;
//     }
// }
// console.log("Loterijos bilietų masyvas išrūšiuotas nuo didžiausio numerio iki mažiausio: ", naujaPinigine[3]);
// console.log("15------------------------------------------------------------");

// 16. Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom ( generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi 500);

// let pinigine = [];
// const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
// console.log("masyvo ilgis: ", ilgis);
// for (let i = 0; i < ilgis; i++) {
//     let pinigai = Math.trunc(Math.random() * 11);
//     pinigine.push(pinigai);
// }
// console.log("masyvas: ", pinigine);

// let monetos = [];
// let popieriniaiPinigai = [];

// for (let i = 0; i < ilgis; i++) {
//     if (pinigine[i] <= 2) {
//         monetos.push(pinigine[i]);
//     }
//     if (pinigine[i] > 2) {
//         popieriniaiPinigai.push(pinigine[i]);
//     }}
// console.log("naujas monetu masyvas su reiksmemis mazesnemis arba lygioms 2: ", monetos);
// console.log("naujas popieriniu pinigu masyvas su reiksmemis didesnemis uz 2: ", popieriniaiPinigai);

// let naujaPinigine = [];
// naujaPinigine.push(monetos);
// naujaPinigine.push(popieriniaiPinigai);

// let korteles = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
// naujaPinigine.push(korteles);

// console.log("pinigine su trimis skyreliais: ", naujaPinigine);

// let popieriniuPiniguSuma = 0;
// let kupiura;
// let visosKupiuros = [];

// while (popieriniuPiniguSuma < 500) {
//     kupiura = Math.trunc(Math.random() * (10 - 3) + 3);
//     popieriniuPiniguSuma += kupiura;
//     visosKupiuros.push(kupiura);

//     if (popieriniuPiniguSuma === 500) {
//         console.log("popieriniu pinigų suma: ", popieriniuPiniguSuma);
//     } else if (popieriniuPiniguSuma > 500) {
//         popieriniuPiniguSuma = 0;
//         visosKupiuros = [];
//     }
// }
// console.log("visos kupiuros, kuriu suma 500: ", visosKupiuros);

// console.log("16------------------------------------------------------------");

// 17. Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu numeris išsidalins be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.

// let pinigine = [];
// const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
// console.log("masyvo ilgis: ", ilgis);
// for (let i = 0; i < ilgis; i++) {
//     let pinigai = Math.trunc(Math.random() * 11);
//     pinigine.push(pinigai);
// }
// console.log("masyvas: ", pinigine);

// let monetos = [];
// let popieriniaiPinigai = [];

// for (let i = 0; i < ilgis; i++) {
//     if (pinigine[i] <= 2) {
//         monetos.push(pinigine[i]);
//     }
//     if (pinigine[i] > 2) {
//         popieriniaiPinigai.push(pinigine[i]);
//     }
// }
// console.log("naujas monetu masyvas su reiksmemis mazesnemis arba lygioms 2: ", monetos);
// console.log("naujas popieriniu pinigu masyvas su reiksmemis didesnemis uz 2: ", popieriniaiPinigai);

// let naujaPinigine = [];
// naujaPinigine.push(monetos);
// naujaPinigine.push(popieriniaiPinigai);

// let korteles = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
// naujaPinigine.push(korteles);

// console.log("pinigine su trimis skyreliais: ", naujaPinigine);

// let bilietai = [];
// for (let i = 0; i < 10; i++) {
//     let reiksmes = Math.trunc(Math.random() * (9999999999 - 1000000000) + 1000000000);
//     bilietai.push(reiksmes);
// }
// naujaPinigine.push(bilietai);

// let laiminguBilietuSkaicius = 0;

// for (let i = 0; i < bilietai.length; i++) {
//     if (naujaPinigine[3][i] % 777 === 0) {
//         laiminguBilietuSkaicius++;
//     }
// }

// console.log("laimingo bilieto kiekis: ", laiminguBilietuSkaicius);
// console.log("17------------------------------------------------------------");

// 18.	 Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'] ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai;

// let pinigine = [];
// const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
// console.log("masyvo ilgis: ", ilgis);
// for (let i = 0; i < ilgis; i++) {
//     let pinigai = Math.trunc(Math.random() * 11);
//     pinigine.push(pinigai);
// }
// console.log("masyvas: ", pinigine);

// let monetos = [];
// let popieriniaiPinigai = [];

// for (let i = 0; i < ilgis; i++) {
//     if (pinigine[i] <= 2) {
//         monetos.push(pinigine[i]);
//     }
//     if (pinigine[i] > 2) {
//         popieriniaiPinigai.push(pinigine[i]);
//     }
// }
// console.log("naujas monetu masyvas su reiksmemis mazesnemis arba lygioms 2: ", monetos);
// console.log("naujas popieriniu pinigu masyvas su reiksmemis didesnemis uz 2: ", popieriniaiPinigai);

// let naujaPinigine = [];
// naujaPinigine.push(monetos);
// naujaPinigine.push(popieriniaiPinigai);

// let korteles = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
// naujaPinigine.push(korteles);

// console.log("pinigine su trimis skyreliais: ", naujaPinigine);

// let bilietai = [];
// for (let i = 0; i < 10; i++) {
//     let reiksmes = Math.trunc(Math.random() * (9999999999 - 1000000000) + 1000000000);
//     bilietai.push(reiksmes);
// }
// naujaPinigine.push(bilietai);
// console.log("pinigine su keturiais skyreliais: ", naujaPinigine);

// let penktasSkyrius = ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'];
// naujaPinigine.push(penktasSkyrius);

// console.log("pinigine su penkiais skyreliais: ", naujaPinigine);

// for (let i = 0; i < penktasSkyrius.length-1; i++) {
//     if (penktasSkyrius[i] < penktasSkyrius[i + 1]) {
//         let laikinasKintamasis = penktasSkyrius[i];
//         penktasSkyrius[i] = penktasSkyrius[i + 1];
//         penktasSkyrius[i + 1] = laikinasKintamasis;
//     }
// }
// console.log("isrusiuota pagal zodziu ilgi taip, kad pirma eitu trumpiausi zodziai: ", penktasSkyrius);

// console.log("18------------------------------------------------------------");
