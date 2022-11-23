function submitHandler(event) {
  console.log("hello --");

  let inputData = document.getElementById("todotxt");
  console.log(inputData);

  const todoVal = inputData.value;
  console.log(todoVal);
  event.preventDefault();
}
