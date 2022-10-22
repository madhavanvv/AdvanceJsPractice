module.exports.otherTask = () => {};

// or below ,both same
const verifyCard = () => {
  const cardPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("cardverified");
      //reject("failed");
    }, 4000);
  });

  return cardPromise;
};

module.exports.verifyCard = verifyCard;
