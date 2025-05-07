document.addEventListener('DOMContentLoaded', loadToDos);
document.querySelector('.addToDoBtn').addEventListener('click', addToDo);



async function loadToDos() {
    const result = await fetch('http://127.0.0.1:3000/');
    const response = await result.json();

    const list = document.querySelector('.ToDoList');
    list.innerHTML = '';

    response.forEach(ToDo => {
        const element = document.createElement('div');
        element.classList.add('ToDoElement');
        element.innerHTML = `
        <h5>${ToDo.title}</h5>
        <div class="btn-group" role="group" aria-label="Basic outlined example" data-id="${ToDo.id}">
            <button type="button" class="btn btn-outline-primary editBtn">Edit</button>
            <button type="button" class="btn btn-outline-danger deleteBtn">Delete</button>
        </div>
        `
        list.appendChild(element);
    });

    const deleteBtns = document.querySelectorAll('.deleteBtn');
    deleteBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.parentElement.getAttribute('data-id');
            deleteToDo(id);
        });
    });

    const editBtns = document.querySelectorAll('.editBtn');
    editBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.parentElement.getAttribute('data-id');
            const oldTitle = btn.parentElement.previousElementSibling.textContent;
            editToDo(id, oldTitle);
        })
    })
}

async function addToDo() {
    const input = document.querySelector('.form-control');

    if (!input.value) {
        alert('input is empty');
    } else {
        const result = await fetch('http://127.0.0.1:3000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: Date.now(), title: input.value })
        });
        input.value = '';
        loadToDos();
    }
}

async function editToDo(id, oldTitle) {
console.log(id, oldTitle);

    const netTitle = prompt("Enter new task", oldTitle);

    if(!netTitle){
        alert('prompt is empty');
    } else {
        const result = await fetch(`http://127.0.0.1:3000/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: netTitle})
        });
        loadToDos();
    }
}

async function deleteToDo(id) {
    console.log(id);
    await fetch(`http://127.0.0.1:3000/${id}`, {
        method: 'DELETE'
    });
    loadToDos();
}