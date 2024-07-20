// script.js

document.addEventListener("DOMContentLoaded", function () {
    let addButton = document.getElementById("add-task-btn");
    let taskInput = document.getElementById("task-input");
    let taskList = document.getElementById("task-list");

    // Load tasks from Local Storage when the page loads
    loadTasks();

    // Function to add and remove task items
    function addTask(taskText, save = true) {
        if (taskText !== "") {
            let listItem = document.createElement("li");
            listItem.textContent = taskText;

            let removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.classList.add("remove-btn");

            // Adding event listener to the delete button
            removeButton.addEventListener("click", function () {
                listItem.remove();
                // Remove the task from Local Storage as well
                const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                const updatedTasks = storedTasks.filter(task => task !== taskText);
                localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            });

            listItem.appendChild(removeButton);
            taskList.appendChild(listItem);
            taskInput.value = ""; // Clear the input field

            // Save the task to Local Storage
            if (save) {
                const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                storedTasks.push(taskText);
                localStorage.setItem('tasks', JSON.stringify(storedTasks));
            }
        } else {
            alert("Please enter a task");
        }
    }

    // Event listener for the "Add Task" button
    addButton.addEventListener("click", function () {
        addTask(taskInput.value.trim());
    });
});

// Load tasks from Local Storage
function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}
