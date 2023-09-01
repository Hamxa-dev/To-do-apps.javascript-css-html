const inputBox = document.querySelector(".input-box");
const listContainer = document.querySelector("#list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("pleas puttin the text!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span)
    span.addEventListener("click", function() {
        li.remove();
      });
      li.appendChild(span);
  }
       

        inputBox.value = "";
}
