// function smallestEven(n) {
//   let m = n;

//   while (m % 2 !== 0) {
//     m += n;
//   }

//   return m;
// }
// console.log(smallestEven(620));

// Sizga to'g'ri to'rtburchakning tomonlari a va b beriladi,
//siz uning yuzasi va perametrini topib quyidagi shartga tekshirishingiz kerak bo'ladi.
// Agar yuzasi perimetridan katta bo'lsa yuzasini aks holda peremetrini chiqaring.
// let a = +prompt("To`rtburchakni tomonini kiriting");
// let b = +prompt("To`rtburchakni tomonini kiriting");
// let perimetr = 2 * (a + b);
// let yuza = a * b;
// if (perimetr > yuza) {
//   console.log(yuza);
// } else {
//   console.log(perimetr);
// }

//Karralilar yig'indisi
// Doskaga 1 dan n gacha sonlar yozib chiqildi. Ulardan faqat 3,5,7 ga karralilari qolib qolganlari o'chirib tashlandi.
// O'sha qolgan sonlar yig'indisini toping.
// let n = 10;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
//     sum += i;
//   }
// }
// console.log(sum);

//Jonibek matematika darsida faktorial darsini o'tdi va u shunday dastur yaratmoqchiki,
// uning dasturiga ikkita n va m sonlari kiritiladi va dastur n dan m gacha
//  bo'lgan sonlar ko'paytmasida oxirida hosil bo'lgan nollar sonini chop etishi kerak.
// Ammo Jonibek sizning yordamingizga muhtoj.
// let n = +prompt("1-chi sonni kiriting");
// let m = +prompt("2-chi sonni kiriting");
// let fact = 1;
// for (let i = n; i <= m; i++) {
//   fact *= i;
// }
// console.log(fact);

// RoboContest.uz da yangi bo'lgan ko`pchilik ba'zida jarima tizimi qanday ishlashini tushunishmaydi.
//  Bunda jarima quyidagicha baholanadi: Har bir xato yuborilgan urinish uchun 5 daqiqa jarima hisoblanadi va
//  to'g'ri javobni yuborgan vaqtini daqiqa sifatida yaxlitlab qo'shiladi.
// Aytaylik foydalanuvchi to'g'ri javob yuborishdan oldin 5 ta xato urinishga yo'l qo'ydi.
// To'g'ri javobni esa 21-daqiqada yubordi.Unutmang 21 daqiqa deganda misol uchun "20:SS" nazarda tutuiladi. Unda bu masala uchun jarima

// function calculatePenalty(a, tugri) {
//   const xato = 5;
//   const x = a * tugri;

//   // Umumiy jarimani hisoblash
//   const umumiy = x + tugri;
//   return umumiy;
// }
// console.log(calculatePenalty(5, 21));

// Sizga Selsiy shkalasi bo'yicha harorat beriladi. Uning Kelvin va Farangeyit shkalasi bo'yicha haroratini topuvchi dastur tuzing.
// Bunda ular quyidagicha bog'langan:
// Kelvin = Celsius + 273.15
// Fahrenheit = Celsius * 1.80 + 32.00
// function temperature(arg) {
//   let kelvin = arg + 273.15;
//   let Fahrenheit = arg * 1.8 + 32.0;
//   return [kelvin, Fahrenheit];
// }
// console.log(temperature(2));

// Sizga ikkita natural son beriladi. Sizning vazifangiz shu sonlar orasidagi 3ga bo'linadigan
// ammo 7 bo'linmaydigan sonlar yigindisini topish. Bunda ikkala chegara ham kiradi.
// let a = 1;
// let b = 30;
// let sum = 0;
// for (let i = a; i <= b; i++) {
//   if (i % 3 == 0 && i % 7 == 1) {
//     sum += i;
//   }
// }
// console.log(sum);

// Bilmasvoy ukalari Ali va Valining yoshini esidan chiqarib qo'ydi. Ali Bilmasvoyga Validan N yoshga kattaligini aytdi.
//  Lekin Bilmasvoy ukalarini yoshini topa olmadi. Keyin Vali Alidan K marta kichikligni aytdi.
//  Bilamsvoy vanihoyat ukalarining yoshini topdi. Siz ham topingchi!?

// function calculateAges(N, K) {
//   const A = N + K;
//   const V = A - N;
//   return { A, V };
// }
// console.log(5, 3);
