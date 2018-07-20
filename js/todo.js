document.getElementById('todoList').addEventListener('submit', saveToDo);

function saveToDo(e) {
    e.preventDefault();

    let d = new Date();
    let getId = d.getTime();
    let getInput = document.getElementById('todoInput').value;
    let todo = {id: getId, todo: getInput};

    if (localStorage.getItem('toDoList') === null) {

        const toDoList = [];
        toDoList.push(todo);
        localStorage.setItem('toDoList', JSON.stringify(toDoList));

    } else {

        let toDoList = JSON.parse(localStorage.getItem('toDoList'));
        toDoList.push(todo);
        localStorage.setItem('toDoList', JSON.stringify(toDoList));

    }

    document.getElementById('todoList')
    getToDo();

}

function getToDo() {

    let toDoList = JSON.parse(localStorage.getItem('toDoList'));
    let showToDo = document.getElementById('showToDoList');

    showToDo.innerHTML = '';
    for (let i = 0; i < toDoList.length; i++) {

        let id = toDoList[i].id;
        let toDoText = toDoList[i].todo;

        showToDo.innerHTML += '<div class="flex-container"> <p>' + toDoText + '</p>' + '<a href="#" onclick="deleteToDo(' + id + ')"><i class="fas fa-trash-alt"></i></a></div> ';

    }

}

function deleteToDo(id) {

    const toDoList = JSON.parse(localStorage.getItem('toDoList'));

    for (let i = 0; i < toDoList.length; i++) {

        if (toDoList[i].id == id) {
            toDoList.splice(i, 1)
        }
    }

    localStorage.setItem('toDoList', JSON.stringify(toDoList));
    getToDo();

}
