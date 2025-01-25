// limit todo list
let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function add() {
  if (inputs.value == "") {
    alert("Please enter A Task");
  } else {
    let count = text.querySelectorAll("ul").length;
    if (count === 6) {
      alert("limit reched ");
      inputs.value = "";
      alert("limit reched ");

      return;
    }
    let newElement = document.createElement("ul");

    newElement.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
    let divs = text.appendChild(newElement);
    inputs.value = "";

    newElement.querySelector("i").addEventListener("click", remove);
    //limit

    function remove() {
      newElement.remove();
    }
  }
}
