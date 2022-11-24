function submitHandler(event) {
  console.log(event);
  event.preventDefault();

  let inputData = document.getElementById("todotxt");

  const todoVal = inputData.value;
  console.log(todoVal);

  const myul = document.getElementById("mylist");
  const tt = `<li class="mb-2 row "> <span class ="col-4"> ${todoVal}</span> <button class="btn btn-primary col-2">Edit</button> &nbsp &nbsp <button class="col-2 btn btn-primary">Delete</button></li>`;
  myul.innerHTML = myul.innerHTML + tt;
}
function randomcolor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomColor);
}
