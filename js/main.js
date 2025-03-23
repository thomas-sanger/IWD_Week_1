// This script adds functionality to a simple web page that allows users to add and clear destinations from a list.

// selects the addBtn button and adds an event listener to it
document.querySelector("#addBtn").addEventListener("click", () => {
  // creates new destinations map to store the destination values
  let destinations = new Map();
  // selects the unordered list and the input field for adding destinations
  let destinationUl = document.querySelector("#destinationUl");
  let txtAdd = document.querySelector("#txtAdd");

  // checks if the input field has a value, and if so, adds it to the destinations map with the current timestamp as the key
  if (txtAdd.value.length > 0) destinations.set(Date.now(), txtAdd.value);

  // for of loop that creates <li> elements for each destination in the map and appends them to the unordered list
  // also clears the input field after each addition
  for (let [key, value] of destinations) {
    let item = document.createElement("li");
    item.innerText = `${value}`;
    destinationUl.append(item);
    document.querySelector("#txtAdd").value = "";
  }
});

// clears the list and the input field when the clear button is clicked
document.querySelector("#clearBtn").addEventListener("click", () => {
  // selects the unordered list
  let destinationUl = document.querySelector("#destinationUl");
  // clears the unordered list
  destinationUl.innerText = "";
  // selects the input field and clears its value
  document.querySelector("#txtAdd").value = "";
});
