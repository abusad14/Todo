let todoArr = [
  { task: "go school", dueDate: "2020-10-28" },
  { task: "do your homework", dueDate: "2024-11-29" },
  { task: "play cricket", dueDate: "2024-11-30" },
];
showElement();

function isClicked() {
  let inBox = document.querySelector(".input-box");
  let dateBox = document.querySelector(".date");
  let inTaken = inBox.value;
  let dateTaken = dateBox.value;

  if (inTaken !== "" && dateTaken !== "") {
    todoArr.unshift({ task: inTaken, dueDate: dateTaken });

    inBox.value = "";
    dateBox.value = "";
    showElement();
  } else {
    alert("Oopss!!!...Something is missing.");
  }
}

function showElement() {
  let putShowing = document.querySelector(".showing");
  let newHTML = "";
  for (let i = 0; i < todoArr.length; i++) {
    let task = todoArr[i].task;
    let dueDate = todoArr[i].dueDate;

    newHTML += `<div><span class = "span-task">${task}</span><span class="dateShown">${dueDate}</span>
      <button class= "btn-delete" onclick = "todoArr.splice(${[
        i,
      ]}, 1); showElement();">Delete</button></div>`;
  }
  putShowing.innerHTML = newHTML;
}

let dateTop = document.getElementById("dateTop");
let timeTop = document.getElementById("timeTop");
let date = new Date();

let newDate = document.createElement("div");
newDate.innerHTML = `📅 ${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
dateTop.appendChild(newDate);

let newTime = document.createElement("div");
newTime.innerHTML = `🕰️ ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
timeTop.appendChild(newTime);
