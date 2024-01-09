//  1-  Bir sayının 10 - 50 arasında olup olmadığını kontrol ediniz.

let sayi1 = 10;
if (sayi1>10 && sayi1<50) {
    console.log("sayı 10-50 arasındadır.");
} else {
    console.log("sayı 10-50 arasında değildir.");
}

//  2-  Bir sayının pozitif tek sayı olup olmadığını kontrol ediniz.

// let sayi = 21;
// if (sayi % 2 == 1 || sayi > 0) {
//     console.log("sayı pozitif tek sayıdır.");
// }

//  2-1  Bir sayının pozitif ya da tek sayı olup olmadığını kontrol ediniz.

// let sayi = -21;
// if(Math.abs(sayi % 2) == 1 || sayi > 0) {
//     console.log("sayı pozitif tek sayıdır.");
// }

//  3-  x, y, z sayılarının büyüklük karşılaştırmasını yapınız. (else if ' i araştırınız.)

// let x = 60, y = 20, z = 30;

// if (x > y && x > z) {
//     console.log("x en büyük");
// } else if (y > x && y > z) {
//     console.log("y en büyük");
// } else if (z > x && z > y) {
//     console.log("z en büyük");
// } else {
//     console.log("sayılar eşit");
// }


//  4-  2 vize ve 1 final notuna göre hesaplanan ortalama için;
    
// let vize1 = 50;
// let vize2 = 60;
// let vize3 = 50;

// let ortalama = (((vize1 + vize2) / 2) * 0.4) + (final * 0.6);

// console.log("ortalamanız: " + ortalama);

//  a-  Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın.

// let vize1 = 60;
// let vize2 = 60;
// let vize3 = 50;

// let ortalama = (((vize1 + vize2) / 2) * 0.4) + (final * 0.6);

// console.log("ortalamanız: " + ortalama);

// if (ortalama >= 50) {
//     console.log("geçtiniz");
// } else {
//     console.log("kaldınız");
// }

//  b-  Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.

// if (ortalama >= 50 && final >= 50) {
//     console.log("geçtiniz");
// } else {
//     console.log("kaldınız.")
// }

//  c-  Finalden 70 alındığında ortalama 50' nin altında olsa bile dersten geçilsin.

let vize1 = 10;
let vize2 = 10;
let vize3 = 70;

let ortalama = (((vize1 + vize2) / 2) * 0.4) + (final * 0.6);

console.log("ortalamanız: " + ortalama);

if (ortalama >= 50 || final >= 70) {
    console.log("geçtiniz");
} else {
    console.log("kaldınız.")
}