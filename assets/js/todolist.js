const CHECKED = true, UNCHECKED = false;
let taskList = [["Sample task1", CHECKED], ["sample task2", UNCHECKED]];

function createTaskListHtml(){
    let task, txtWrapper, ckBox, lbl;
    output = '';
    taskListElem = document.getElementById('task-list');
    let child = taskListElem.lastElementChild;
    while (child){
        taskListElem.removeChild(child);
        child = taskListElem.lastElementChild;
    }

    for (let i=0; i<taskList.length;i++){
        task = 'task_' + (i+1);

        txtWrapper = document.createElement('div');
        txtWrapper.setAttribute('class', 'task-wrapper');

        ckBox = document.createElement('input');
        ckBox.setAttribute('type','checkbox');
        ckBox.setAttribute('class', 'task-checkbox');
        ckBox.setAttribute('id', task);
        if (taskList[i][1] == CHECKED){
            ckBox.setAttribute('checked', 'checked')
        }
        txtWrapper.appendChild(ckBox);

        lbl = document.createElement('label');
        lbl.setAttribute('class', 'checkbox-label');
        lbl.setAttribute('for', task);
        lbl.innerHTML = taskList[i][0];
        txtWrapper.appendChild(lbl);        

        taskListElem.appendChild(txtWrapper);
    }
}

function addTask(){
    newTask = document.getElementsByClassName('new-task')[0];
    if (newTask.value.trim() === ''){
        alert('You need to describe your task before adding it!');
        return;
    }
    taskList.push([newTask.value, UNCHECKED]);
    createTaskListHtml();
    newTask.value = '';
}

function clickButton(event){
    if (event.keyCode === 13)
        document.getElementById('new-task-button').click();
}
