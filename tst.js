function random(number) {
  //return Math.floor(Math.random() * (number + 1));
  return Math.random();
}
let tt = random(255);

console.log(tt);

btn.addEventListener("click", changeBackground);
btn.removeEventListener("click", changeBackground);
