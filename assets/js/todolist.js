const CHECKED = true, UNCHECKED = false;
let taskList = [["Sample task1", CHECKED], ["sample task2", UNCHECKED]];

function createTaskListHtml(){
    let task, txtWrapper, ckBox, lbl;
    output = '';
    taskListElem = document.getElementById('task-list');

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
