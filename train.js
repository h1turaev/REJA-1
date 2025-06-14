// TASK D
class Shop {
  constructor(chexol, steklo, usbCabel ) {
    this.products = {
      'steklo': steklo,
      'chexol': chexol,
      'usbCabel': usbCabel,
    };
  }

  // Vaqtni qolga olvolish
  getTime() {
    const currentTime = new Date();
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  // Qoldiqlar
  qoldiq() {
    const time = this.getTime();
    console.log(`Hozir ${time}da ${this.products['steklo']} ta steklo, ${this.products['chexol']} ta chexol va ${this.products['usbCabel']} ta usb cabel mavjud!`);
  }


  // Sotuvlar
  sotish(steklo, two ) {
    const time = this.getTime();
    this.products[steklo] -= two;
    console.log(`${time}da ${two} ta ${steklo} sotildi.`);
  }

  sotish2(chexol, five) {
  }


  // Qabullar
  qabul(steklo, ten) {
    const time = this.getTime();
    this.products[steklo] += ten;
    console.log(`${time}da ${ten}ta ${steklo} qabul qilindi.`);
  }
};

const shop = new Shop(10, 10, 10);
shop.qoldiq();
shop.sotish("steklo", 2);
shop.sotish("chexol", 5);
shop.sotish("Usb Cabel", 8);
shop.qabul("steklo", 10);
shop.qoldiq();


// TASK C
// function isEqual(a, b) {
//   const letter1 = hello => hello.split('').sort().join('');
    
//   if (letter1(a) === letter1(b)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isEqual("hello", "olleh")); 



// TASK B
// function countNumbers(str) {
//   let count = 0;

//   for (let num of str) {
//     if (num >= '0' && num <= '9') {
//       count++;
//     }
//   }

//   return count;
// }
// console.log(countNumbers("1991avgust31")); // ➜ 7




// // TASK A
// function countLetter(o, notebook) {
//     let count = 0;
//     for (let i = 0; i < notebook.length; i++) {
//         if (notebook[i] === o) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countLetter("o", "notebook"));  // Natija: 3


// // NODE JS EVENT LOOP VA CALLBACK TUSHUNCHALARI

// // console.log("Jack Ma maslahatlari");
// // const list = [
// //     "yaxshi talab bo'ling", //0-20
// //     "to'gri boshliq tanlang va ko'proq xato qiling", //20-30
// //     "o'zingizga ishlashni boshlang", //30-40
// //     "siz kuchli bo'lgan narsalar ustida ishlang", //40-50
// //     "yoshlarga invsetitsiya qiling", //50-60
// //     "endi yoshlarga maslahat bering", //60
// // ];

// // function maslahatBering(a, callback) {
// //     if (typeof a !=="number") callback("insert number please", null);
// //     else if (a <= 20) callback(null, list[0]);
// //     else if (a > 20 && a <= 30) callback(null, list[1]);
// //     else if (a > 30 && a <= 40) callback(null, list[2]);
// //     else if (a > 40 && a <= 50) callback(null, list[3]);
// //     else if (a > 50 && a <= 60) callback(null, list[4]);
// //     else {
// //         setInterval(function () {
// //             callback(null, list[5]);
// //         }, 1000);
// //     }
// // }

// // console.log("passed here 0");
// // maslahatBering(65, (err, data) => {
// //     if(err) console.log('ERROR CHIQDI!!!', err);
// //     else {
// //     console.log('javob:', data);
// // }
// // });
// // console.log("passed here 1");



// // ASYNCHRONOUS FUNCTIONLARNI QO'LLASH

// console.log("Jack Ma maslahatlari");

// const list = [
//     "yaxshi talab bo'ling", //0-20
//     "to'gri boshliq tanlang va ko'proq xato qiling", //20-30
//     "o'zingizga ishlashni boshlang", //30-40
//     "siz kuchli bo'lgan narsalar ustida ishlang", //40-50
//     "yoshlarga invsetitsiya qiling", //50-60
//     "endi yoshlarga maslahat bering", //60
// ];

// async function maslahatBering(a) {
//     if (typeof a !=="number") throw new Error("insert number please");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolveInclude, reject) => {
//             setTimeout(() => {
//                 resolveInclude(list[5]);
//             }, 1000);
//         });

//         setTimeout(function () {
//             callback(null, list[5]);
//         }, 1000);
//     }
// }


// // then/catch
// console.log("passed here 0");
// maslahatBering(65) 
// .then((data) => {
// console.log("javob:", data);
// })
// .catch((err) => {
//     console.log("ERROR CHIQDI!!!", err);
// });
// console.log("passed here 1");



// // async/await
// async function run() {
//     let javob = await maslahatBering(22);
//     console.log(javob);
//      javob = await maslahatBering(44);
//     console.log(javob);
//      javob = await maslahatBering(55);
//     console.log(javob);
// }
// run();






// console.log("===== EXECUTE =====");

// // DEFINE
// function qoshish(a, b, callback) {
//   if (b === 10) {
//     callback("bizga 20 soni kerak!", null);
//   } else {
//     callback(null, a + b);
//   }
// }

// // CALL
// qoshish(7, 10, (err, data) => {
//   if (err) console.log("Error:", err);
//   else {
//     console.log("data:", data);
//   }
// });


