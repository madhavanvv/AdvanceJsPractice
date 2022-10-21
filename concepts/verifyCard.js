module.exports.otherTask = () => {};
module.exports.verifyCard = () => {
  const cardPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Card Verified-1");
      resolve("cardverified");
    }, 4000);
  });

  return cardPromise;
};
