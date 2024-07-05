document.addEventListener('DOMContentLoaded', showTasks); // Load tasks on document ready

const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    const taskValue = inputBox.value.trim();
    if(taskValue === ''){
        alert('Please enter a task');
    } else {
        const li = document.createElement('li');
        li.textContent = taskValue; // Use textContent for security
        
        const span = document.createElement('span');
        span.textContent = "\u00D7";
        span.setAttribute('role', 'button'); // Improve accessibility
        span.onclick = function() { // Attach event listener directly
            this.parentElement.remove();
            saveData();
        };
        
        li.appendChild(span);
        listContainer.appendChild(li);
        saveData();
    }
    inputBox.value = '';
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks() {
    listContainer.innerHTML = localStorage.getItem("data") || '';
    // Reattach event listeners to delete buttons
    listContainer.querySelectorAll('span').forEach(span => {
        span.onclick = function() {
            this.parentElement.remove();
            saveData();
        };
    });
}

// Optional: Listen for form submission instead of button click for better accessibility
document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault();
    addTask();
});