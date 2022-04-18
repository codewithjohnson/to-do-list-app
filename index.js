const Inputter = document.getElementById("input-task");
const AddBtn = document.getElementById("add-task-button");
const TaskList = document.getElementById("task-list");
let task;
let NewTask;


const CreateTask = () => {
    NewTask = document.createElement("li");
    NewTask.innerHTML = `
        <div class="left">
        <input type="checkbox" name="" id="first-task">
        <span class="task">${task}</span>
        </div>
        <div class="right">
        <button class="delete-btn"><img src="delete.svg" alt=""></button>
        </div>
    `;
};


const CollectTask = () => {
    Inputter.addEventListener('change', () => {
        if (Inputter.value !== "") {
            task = Inputter.value;
            CreateTask(task);
        }
        else{return;}
    });
};
CollectTask();


const AddTask = () => {
    AddBtn.addEventListener('click', (e) => {
        e.preventDefault();
        TaskList.appendChild(NewTask);
        Inputter.value = "";
    });
};
AddTask();