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

// let inputs = document.getElementById("inp");
// let text = document.querySelector(".text");

// function add(){
// if (inputs.value == "")
// alert("enter something");

// else {
//   let count = text.querySelectorAll("ul").length;
//       if (count === 6) {
//         alert("limit reched");
//         return;

// }

// }

// let inputs = document.getElementById("inp");
// let text = document.querySelector(".text");

// function add() {
//   if (inputs.value == "") {
//     alert("Please Enter Something");
//   } else {
//     let nechayEle = document.createElement("ul");
//     nechayEle.innerHTML = `${inputs.value}  <i class="fa-solid fa-trash"></i>`;
//     text.appendChild(nechayEle);
//     inputs.value = "";

//     nechayEle.querySelector("i").addEventListener("click", remove);

//     function remove() {
//       nechayEle.remove();
//     }
//   }
// }

// let inputs = document.getElementById("inp");
// let text= document.querySelector(".text");

// function add(){
//     if(inputs.value== ""){
//         alert("Please enter a text");
//     }

//     else {
// let newEle = document.createElement("ul");
// newEle.innerHTML= `${inputs.value} <i class="fa-solid fa-trash"></i>`;
// text.appendChild(newEle);
// inputs.value = "";

// newEle.querySelector("i").addEventListener("click", remove);

// function remove(){
//     newEle.remove();
// }

//     }

// }
