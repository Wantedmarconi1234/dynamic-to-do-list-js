document.addEventListener("DOMContentLoaded", function () {
    let addButton = document.getElementById("add-task-btn");
    let taskInput = document.getElementById("task-input");
    let taskList = document.getElementById("task-list");

    // Function block to add and remove task items.
    function addTask() {
       const taskText = taskInput.value.trim();
       
       if (taskText !== "") {

           let listItem = document.createElement("li");
           listItem.textContent = taskText;
           let removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.className = "remove-btn";
            // Adding eventlistener to the delete button
            removeButton.addEventListener("click", function() {
                listItem.remove()
            })
            listItem.appendChild(removeButton);
            taskList.appendChild(listItem);
            taskInput.value = ""// setting the input to null
       } else {
        alert("Please enter a task");
       }
    }
    // Adding eventlistener to add task button

    // adding eventlistener when add button is clicked
    addButton.addEventListener("click", () =>{
        addTask()
    })

    // Adding eventlistener when the Enter key is pressed
    taskInput.addEventListener("keypress", (event)=>{
        if (event.key === "Enter") {
            addTask()
        }
    })
    

})