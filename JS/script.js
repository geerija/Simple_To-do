"use strict";
let input_field = document.querySelector(".input_field");
let btn = document.querySelector("#btn");
let list_details = document.querySelector(".list_details");
/*Button functionalities*/
input_field.addEventListener("keyup", function (e) {
  if (e.key === "Enter" && input_field.value !== "") {
    let li = document.createElement("li");
    li.innerHTML = input_field.value;
    list_details.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = `❌`;
    li.appendChild(span);
    input_field.value = "";
  } else if (e.key === "Enter" && input_field.value == "") {
    alert("Write Your Task");
  }
  browserSave();
});
btn.addEventListener("click", function () {
  if (input_field.value === "") {
    alert("Write Your Task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input_field.value;
    list_details.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = `❌`;
    li.appendChild(span);
    input_field.value = "";
  }
  browserSave();
});

list_details.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      browserSave();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      browserSave();
    }
  },
  false
);

/*for browser to remember our task list so that every time we refresh our page it will stay*/
function browserSave() {
  localStorage.setItem("data", list_details.innerHTML);
}
/**will show the updated data*/
function showList() {
  list_details.innerHTML = localStorage.getItem("data");
}
showList();
