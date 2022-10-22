//import verifyCard from "./verifyCard";
const verifyCardModule = require("./verifyCard");

const deductAmount = () => {
  console.log("Amount deducted-2");
};

const placeOrder = () => {
  const promise = verifyCardModule.verifyCard();
  promise
    .then(
      (msg) => {
        console.log(msg);

        deductAmount();
      },

      (err) => {
        console.log(err);
      }
    )
    .catch((err) => {
      console.log(err);
    });
  verifyCardModule.otherTask();
};

placeOrder();
