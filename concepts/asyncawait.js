const placeOrder = async () => {
  verifyCard();

  deductAmount();
};

const verifyCard = () => {
  setTimeout(() => {
    console.log("Card Verified-1");
  }, 4000);
};

const deductAmount = () => {
  console.log("Amount deducted-2");
};

placeOrder();
