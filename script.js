document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.querySelector('button');
    const taskInput = document.querySelector('input[type="text"]');
    const taskDateInput = document.querySelector('input[type="date"]');
    const taskList = document.querySelector('ul');

    // Add a new task
    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        const taskDate = taskDateInput.value;
        if (taskText !== '') {
            addTask(taskText, taskDate);//call addTask function
            taskInput.value = '';
            taskDateInput.value = '';
            taskInput.focus();
        }
    });

    // Add task when Enter key is pressed
    taskInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            addTaskButton.click();
        }
    });

    // Add a task to the list
    function addTask(taskText, taskDate) {
        const listItem = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                listItem.classList.add('completed');
            } else {
                listItem.classList.remove('completed');
            }
        });

        const dateSpan = document.createElement('span');
        dateSpan.textContent = taskDate ? ` (Due: ${taskDate})` : '';

        const taskTextNode = document.createTextNode(taskText);

        const deleteButton = document.createElement('button');
        const icon = document.createElement('i');
        icon.className = 'fa fa-trash';

        deleteButton.appendChild(icon);
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(taskTextNode);
        listItem.appendChild(dateSpan);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    }
});
