function myOne(a) {
  // base condition
  if (a <= 1) {
    return;
  }
  // different parameters recursive call
  myOne(a - 1);
  console.log(a);
}
myOne(8);
