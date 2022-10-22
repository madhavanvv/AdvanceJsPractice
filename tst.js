function two() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("22222222222");
    }, 2000);
  });
}

async function myAll() {
  console.log("11111111");
  let aa = await two();
  console.log(aa);
  console.log("33333333");
  console.log("44444444");
}
myAll();
