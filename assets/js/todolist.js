const CHECKED = true, UNCHECKED = false;
let taskList = [["Sample task1", CHECKED], ["sample task2", UNCHECKED]];

function createTaskListHtml(){
    cleanWarnings();
   
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
        ckBox.addEventListener('change', function() {updateTaskList(i);})
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
        warningElement = document.getElementById('empty-new-task-warning');
        warningElement.setAttribute('visibility', 'visible')
        warningElement.innerHTML = "You need to describe the task to add it to the list!"
        return;
    }
    taskList.push([newTask.value, UNCHECKED]);
    document.getElementById('task-list').innerHTML='';
    createTaskListHtml();
    newTask.value = '';
}

function clickButton(event){
    if (event.keyCode === 13)
        document.getElementById('new-task-button').click();
}

function cleanDone(allDone = false){
    let keepingTasks = [];
    let tasksWrapper = document.getElementsByClassName('task-wrapper')
    removed=0;
    console.log('n tasks = ' + tasksWrapper.length)
    
    initialLength = tasksWrapper.length
    for (let i = 0; i < initialLength; i++){
        console.log(i)
        if (taskList[i][1] == CHECKED || allDone){
            console.log('index = ' + i + ' state = ' + taskList[i][1]);
            tasksWrapper[i-removed].remove(); 
            removed++;
        }
        else{
            console.log(taskList[i])
            keepingTasks.push(taskList[i]);
        }
    }
    if (tasksWrapper.length == 0){
        tasksListElem = document.getElementById('task-list');
        taskListElem.innerHTML = "No tasks left to be done!"
    }
    taskList = keepingTasks;
    console.log(taskList)
    createTaskListHtml();
}

function updateTaskList(index){
    console.log('BEFORE: index = ' + index + ' state = ' + taskList[index][1]);
    taskList[index][1] = !taskList[index][1];
    console.log('AFTER: index = ' + index + ' state = ' + taskList[index][1]);
}

function cleanAll(){
    cleanDone(allDone = true);
}

function cleanWarnings(){
    warnings = document.getElementsByClassName('warning');
    for (let i=0; i< warnings.length; i++){
        warnings[i].innerHTML = '';
        warnings[i].setAttribute('visibility', 'hidden');
    }

}