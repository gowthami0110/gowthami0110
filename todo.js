document.getElementById('addTaskButton').addEventListener('click', function() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value;

    if (taskText !== "") {
        let taskList = document.getElementById('taskList');
        let newTask = document.createElement('li');
        newTask.textContent = taskText;
        taskList.appendChild(newTask);

        taskInput.value = ""; // Clear the input field
    }
});
