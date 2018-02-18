console.log('JS');

//start onReady
$( document ).ready( onReady );
    
function onReady() {
    console.log('DOM ready');
    //add buttons here
    //end buttons
    
    //get functions start here
    //createProjectButtons();
    getProjects();
    getTasks();
    //end get functions

    $('#displaySelectedProject').on('click', '.projectButtonClass', function(){
        writeProjects($(this).attr('id'));
    })

    // start createProjectButton click
    $('#createProjectButton').on('click', function(){
        console.log( 'in createProjectButton on click' );
        var objectToSend = {
            project: $('#addProjectInput').val()
        };
        // call saveProject with the new obejct
        saveProject( objectToSend );
    }); //end createProjectButton on click


    //start saveProject function
    function saveProject(newProject){
        console.log( 'in saveProject', newProject );
        // ajax call to server to get koalas
        $.ajax({
        url: '/project',
        type: 'POST',
        data: newProject,
        success: function(data){
            console.log('we have some projects to save: ', data);
            getProjects();
        },// end success
        error: function(error){
            console.log('failure on post');
        }
        }); //end ajax
    }//end saveProject

  }//end onReady


// start createTaskButton click
$('#createTaskButton').on('click', function(){
    console.log( 'in createTaskButton on click' );
    var objectToSend = {
      task: $('#addTaskInput').val()
    };
    // call saveTask with the new obejct
    saveTask( objectToSend );
  }); //end createTaskButton on click


  //start saveTask function
function saveTask(newTask){
    console.log('in saveTask', newTask);
    // ajax call to server to get koalas
    $.ajax({
      url: '/task',
      type: 'POST',
      data: newTask,
      success: function(data){
        console.log( 'we have some tasks to save: ', data );
        getTasks();
      },// end success
      error: function(error){
        console.log('failure on post');
      }
    }); //end ajax
  }//end saveTask


//start GET Projects function 
function getProjects(){
    console.log('in getProjects GET function');
    $.ajax({
        url:'/project',
        type: 'GET',
        success: function(data){
            console.log('found some projects', data);
            writeProjects(data);
        },
        error: function(error){
            console.log('failure on GET projects');
        }
    });//end ajax
}//end GET Projects


//start GET Tasks function 
function getTasks(){
    console.log('in GET tasks function');
    $.ajax({
        url:'/task',
        type: 'GET',
        success: function(data){
            console.log('found some tasks', data);
            writeTasks(data);
        },
        error: function(error){
            console.log('failure on GET tasks');
        }
    });//end ajax
}//end GET tasks


// Start createProjectButtons function
function createProjectButtons(array){
    console.log('in write projects ', array);
    $('#addProjectInput').val('');
    $('#projectButtons').empty();
        for(i=0; i<array.length; i++){
            let id = array[i].id;
            let projectToAppend = '<button type="button" class="projectButtonClass" id=' + array[i].id + '>' + array[i].project_name + '</button>';
                $('#projectButtons').append(stringToAppend);
                console.log(projectToAppend);    
        }
}// end createProjectButtons function 


// Start writeProjects 
function writeProjects(array){
    console.log('in write projects ', array);
    $('#addProjectInput').val('');
    $('#displaySelectedProject').empty();
    //for loop
    for(i=0; i<array.length; i++){
      let id = array[i].id;
      let projectToAppend = '<button type="button" class="projectButtonClass" id=' + array[i].id + '>' + array[i].project_name + '</button>';
          $('#projectButtons').append(projectToAppend);
    }//end for loop
}// end writeProjects function 


// Start writeTasks 
function writeTasks(array){
    console.log('in write projects ', array);
    $('#addTaskInput').val('');
    $('#taskTBody').empty();
    //for loop
    for(i=0; i<array.length; i++){
      let id = array[i].id;
      let taskToAppend = '<tr style="text-align:center;"><td><input type="checkbox" name="test" class="taskCheckBox"></td><td align="left">' + array[i].task_description + '</td><td><button align="left" type="button" name="deleteTask" id="' + array[i].id + '">Delete</button></td></tr>';
          $('#taskTBody').append(taskToAppend);
    }//end for loop
}// end writeProjects function 