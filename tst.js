function myOne() {
  const qq = 45789;
  return () => {
    console.log(qq);
  };
}
let aa = myOne();
aa();
