
let addBtn = document.querySelector(".add");
let taskInfo = document.querySelector(".todo-info");
addBtn.addEventListener("click", function() {
    if(document.getElementById("input").value === "") {
        alert("Please enter a task");
        return;
    }
    let task = document.createElement("div");
    task.setAttribute("class", "task");
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", function() {
    deleteBtn.parentElement.remove();
    });
    let doneBtn = document.createElement("button");
    doneBtn.setAttribute("class", "done");
    doneBtn.innerText = "Done";
    doneBtn.addEventListener("click", function() {
        let completedTasks = document.querySelector(".completed-tasks");
        completedTasks.appendChild(task);
        task.style.backgroundColor = "lightblue";
        doneBtn.remove();
    });

    let input = document.getElementById("input");
    task.innerText = input.value;
    taskInfo.appendChild(task);
    task.style.backgroundColor = "lightblue";
    task.style.padding = "10px";
    task.style.display = "flex";
    task.style.gap = "10px";
    task.appendChild(doneBtn);
    task.appendChild(deleteBtn);
    input.value = "";
});


