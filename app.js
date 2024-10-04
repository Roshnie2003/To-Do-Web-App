// JavaScript Code for the To-Do App

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('task-input').value;
    const dateInput = document.getElementById('date-input').value;

    if (taskInput === '' || dateInput === '') {
        alert('Please enter both task and date!');
        return;
    }

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');

    // Creating a span for task text and datetime
    const taskText = document.createElement('span');
    taskText.innerHTML = `${taskInput} (Due: ${new Date(dateInput).toLocaleString()})`;

    // Add mark complete and delete buttons
    const completeButton = document.createElement('button');
    completeButton.innerHTML = 'Mark Complete';
    completeButton.onclick = function() {
        taskText.classList.toggle('complete');
    };

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.onclick = function() {
        taskList.removeChild(taskItem);
    };

    taskItem.appendChild(taskText);
    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);

    // Clear the input fields
    document.getElementById('task-input').value = '';
    document.getElementById('date-input').value = '';
}
