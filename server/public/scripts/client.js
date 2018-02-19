// console.log('JS');

//start onReady
$( document ).ready( onReady );
    
function onReady() {
    // console.log('DOM ready');
    //add buttons here
    //end buttons
    
    //get functions start here
    //createProjectButtons();
    getProjects();
    //end get functions

    // start createProjectButton click
    $('#createProjectButton').on('click', function(){
        console.log( 'in createProjectButton on click' );
            var objectToSend = {
                project: $('#addProjectInput').val()
            };
        // call saveProject with the new obejct
        saveProject( objectToSend );
    }); //end createProjectButton on click

    // start createTaskButton click
    $('#createTaskButton').on('click', function(){
        console.log( 'in createTaskButton on click' );
            var objectToSend = {
            task: $('#addTaskInput').val()
            };
            // call saveTask with the new obejct
            saveTask( objectToSend );
    }); //end createTaskButton on click


}//end onReady

//start saveProject function
function saveProject(newProject){
    console.log( 'in saveProject', newProject );
        $.ajax({
        url: '/project/saveProject',
        type: 'POST',
        data: newProject,
            success: function(data){
                console.log('we have some projects to save: ', data);
                getProjects();
            },// end success
            error: function(error){
                console.log('failure on post');
            }
        });
}//end saveProject


  //start saveTask function
function saveTask(newTask){
    console.log('in saveTask', newTask);
        $.ajax({
        url: '/project/saveTask',
        type: 'POST',
        data: newTask,
            success: function(data){
                console.log( 'we have some tasks to save: ', data );
                getTasks();
            },
            error: function(error){
                console.log('failure on post');
            }
        });
}//end saveTask


//start GET Projects function 
function getProjects(){
    // console.log('in getProjects GET function');
        $.ajax({
            url:'/project/getProjects',
            type: 'GET',
            success: function(data){
                // console.log('found some projects', data);
                writeProjects(data);
            },
            error: function(error){
                // console.log('failure on GET projects');
            }
        });
}//end GET Projects


//start GET Tasks function 
function getTasks(ProjectGroupId){
    let getData;
    // console.log('in GET tasks function');
        $.ajax({
            url:'/project/getTasks',
            type: 'GET',
            success: function(data){
                // console.log('found some tasks', data);
                writeTasks(ProjectGroupId, data);
            },
            error: function(error){
                // console.log('failure on GET tasks');
            }
        });
        // console.log('getData =', getData);
    return getData;
}//end GET tasks

// Start writeProjects 
function writeProjects(array){
    // console.log('in write project ', array);
    $('#addProjectInput').val('');
    $('#displaySelectedProject').empty();
        for(i=0; i<array.length; i++){
            let strID = array[i].project_group_id;
            let strName = array[i].project_name;
        let projectToAppend = '<button type="button" name="'+ strName +'", class="projectButtonClass" id=' + strID + '>' + strName + '</button>';
            var test = $(projectToAppend).click(function () {
                let name = $(this).attr('name');
                let id = $(this).attr('id');
                displaySelectedProject(id, name);
                displaySelectedTasks(id);
            });
                $('#projectButtons').append(test);
        }
}// end writeProjects function 

function displaySelectedTasks(ProjectGroupId){
    let foundData = getTasks(ProjectGroupId);
    // console.log('foundData = ', foundData);
}

// Start displaySelectedProject
function displaySelectedProject(id, name){
    console.log("in displaySelectedProject function");
    let strURL = '/project/displaySelectedProject';
    // console.log(strURL);
        $.ajax({
            url: strURL,
            type: 'GET',
            success: function(data){
                // console.log('found some projects', data);
                writeSelectedProject(id, data);
            },
            error: function(error){
                // console.log('failure on GET projects');
            }
        });
}//end GET Projects
    
function writeSelectedProject(id, data){
    // console.log(id);
    // console.log('in writeSelectedProject ', data);
    $('#displaySelectedProject').empty();
        var foundItem = getRowFromArray(id, data);
        // console.log(foundItem);
        // let projectToAppend = '<h4>' + array[i].project_name + '</h4>'
            $('#displaySelectedProject').append(foundItem.project_name);
}// end writeProjects function 

function getRowFromArray(id, data){
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (element.project_group_id == id) return element;
    }
}

function getTaskFromTaskArray(ProjectGroupId, data){
    var foundTasks = [];
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (element.project_group_id == ProjectGroupId){
           foundTasks.push(element); 
        };
    }
    return foundTasks;
}

// Start writeTasks 
function writeTasks(ProjectGroupId, taskData){
    // console.log('write Tasks ', taskData);
    $('#addTaskInput').val('');
    $('#taskTBody').empty();
    var foundTasks = getTaskFromTaskArray(ProjectGroupId, taskData)
    // console.log('foundTasks = ',foundTasks);
    
        for(i=0; i<foundTasks.length; i++){
        let id = foundTasks[i].task_id;
        let taskToAppend = '<tr style="text-align:center;"><td><input type="checkbox" name="test" class="taskCheckBox"></td><td align="left">' + foundTasks[i].task_description + '</td><td align="left">' + foundTasks[i].details + '</td><td><button align="left" type="button" name="deleteTask" id="' + foundTasks[i].task_id + '">Delete</button></td></tr>';
            $('#taskTBody').append(taskToAppend);
            $('#txtNotes').html(foundTasks[i].details);
            // console.log('details=', foundTasks[i].details);
        }
}// end writeProjects function 