//import verifyCard from "./verifyCard";
const verifyCardModule = require("./verifyCard");

const deductAmount = () => {
  console.log("Amount deducted-2");
};

const placeOrder = () => {
  const promise = verifyCardModule.verifyCard();
  promise.then(() => {
    console.log("promise-fullfilled");

    deductAmount();
  });
  verifyCardModule.otherTask();
};

placeOrder();
