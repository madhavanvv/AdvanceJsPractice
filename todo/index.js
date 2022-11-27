let todoData = [];
function submitHandler(event) {
  event.preventDefault();
  const val = document.getElementById("todotxt");
  //console.log(val.value);
  //console.log(todoData.length);
  let tmp = {
    sno: todoData.length + 1,
    tododata: val.value,
  };
  todoData.push(tmp);
  //console.log(todoData);

  let listt = `<li class="list-group-item list-group-item-danger"> S.no --- TODO</li>`;
  todoData.forEach((data) => {
    listt =
      listt +
      `<li id=${data.sno + 100} class="list-group-item list-group-item-primary 
      
      " > <span>${data.sno} ---${data.tododata} </span>
      <span> <button class="btn btn-primary" >Edit</button>
      <button id=${
        data.sno
      } class="btn btn-danger">Delete</button></span></li>`;
  });
  const myul = document.getElementById("mylist");
  myul.innerHTML = listt;

  ///handlerrs

  const allDangerBtn = document.querySelectorAll(".btn-danger");
  console.log(allDangerBtn);
  allDangerBtn.forEach((dangerBtn) => {
    console.log("hello delete button start..");
    dangerBtn.addEventListener("click", (event) => {
      let listId = parseInt(event.target.id) + 100;
      console.log(listId);
      //console.log("aaaaaaaaaaaa");
      document.getElementById(listId).classList.add("myhide");
      //document.getElementById(listId).style.display = "none";

      console.log("hello delete button end..");
    });
  });
}

function mynamehandle() {
  document.getElementById("myname").style.display = "none";
}
