// function myOne() {
//   console.log("11111111-waiting........");
//   function mycall() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         reject("some error occurred venu -504");
//       }, 2000);
//     });
//   }

//   let aa = mycall();
//   aa.then(() => {
//     console.log(aa);
//     console.log("33333333");
//     console.log("44444444");
//   }).catch((ee) => {
//     console.log(ee);
//     console.log("from catch block");
//   });
// }

// myOne();

let url = "https://jsonplaceholder.typicode.com/todos/1";
let response = fetch(url);
//console.log(typeof response);
console.log(typeof response.then);

console.log(typeof response.then);
