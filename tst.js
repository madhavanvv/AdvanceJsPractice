function myOne(a) {
  if (a <= 1) {
    return;
  }
  myOne(a - 1);
  console.log(a);
}
myOne(8);
