function myOne() {
  console.log("111111111111");
}

function myTwo() {
  console.log("22222222222");
  return new Promise((res, rej) => {
    setTimeout(() => {}, 1000);
    res();
  });
}
function myThree() {
  console.log("333333333333");
}

async function myTotal() {
  myOne();
  const bb = await myTwo();
  myThree();
}

myTotal();
