//oct-14

console.log("task-1");

const myTast = async () => {
  console.log("task-----------------------2");

  const myOne = () => {
    return new Promise((resolve, reject) => {
      resolve("task-----------------------3");
    });
  };

  let aa = await myOne();
  console.log(aa);
  console.log("task-----------------------4");
  console.log("task-----------------------5");
  console.log("task-----------------------6");
};
myTast();

console.log("task-7");
console.log("task-8");

//task-2 is i/o task
//any task belong to JS will executed by Main Thread ,other tasks(eg i/o task)
// will be handled by runtime (node/browser)
//becz settimeout not belong to JS
