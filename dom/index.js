const mylabel = document.createElement("li");
mylabel.innerText = "valmikimadhavan";
document.querySelector(".container").appendChild(mylabel);

const mylabelOne = document.createElement("li");
const myjoin = document.getElementById("joinid");
myjoin.addEventListener("click", (event) => {
  console.log("button clicked..");
  console.log(event);
});
