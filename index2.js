const input = document.getElementById("input-task");
const TaskList = document.getElementById("task-list");
const TaskBtn = document.getElementById("add-task-button");
const StoredTask = JSON.parse(localStorage.getItem("TaskItem")) || [];
let list = [];


const DisplayTasks = (value) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <div class="left">
            <input type="checkbox" name="" id="first-task">
            <span class="task">${value}</span>
            </div>
            <div class="right">
            <button class="delete-btn"><img class="del" src="delete.svg" alt=""></button>
            </div>`;
    TaskList.append(li);
};



TaskBtn.addEventListener('click', () => {
    if (input.value !== "") {
        let InputValue = {
            TaskName: input.value
        };
        list.push(InputValue);
        DisplayTasks(InputValue.TaskName);
        localStorage.setItem("TaskItem", JSON.stringify(list));
        input.value = "";
    } else {}

});

// GET TASKS FROM STORAGE AND DISPLAY THEM
if(StoredTask) {
    for (let i = 0; i < StoredTask.length; i++) {
        let SavedTask = StoredTask[i].TaskName;
        DisplayTasks(SavedTask);
    }
}



const DeleteBtn = document.getElementById("task-list");
DeleteBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("del")) {
        e.target.parentElement.parentElement.parentElement.remove();
    }
});


