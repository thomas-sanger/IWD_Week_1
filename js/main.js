document.querySelector("#addBtn").addEventListener("click", () => {
  let destinations = new Map();
  let destinationUl = document.querySelector("#destinationUl");
  let txtAdd = document.querySelector("#txtAdd");

  if (txtAdd.value.length > 0) destinations.set(Date.now(), txtAdd.value);

  for (let [key, value] of destinations) {
    let item = document.createElement("li");
    item.innerText = `${value}`;
    destinationUl.append(item);
    document.querySelector("#txtAdd").value = "";
  }
});

document.querySelector("#clearBtn").addEventListener("click", () => {
  let destinationUl = document.querySelector("#destinationUl");
  destinationUl.innerText = "";
  document.querySelector("#txtAdd").value = "";
});
