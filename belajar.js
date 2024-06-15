const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container'); // Corrected variable name and element ID

function addTask() {
    if(inputBox.value == ''){
        alert('Please enter a task');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00D7";
        li.appendChild(span);

    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        // let li = e.target.parentElement;
        // listContainer.removeChild(li);
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data ", listContainer.innerHTML);
}

function showTasks() {
    listContainer.innerHTML = localStorage.getItem("data ");
}