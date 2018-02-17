console.log('JS');

//start onReady
$( document ).ready( onReady );
    
function onReady() {
    console.log('DOM ready');
    //add buttons here
    
    //end buttons
    
    //get functions start here
    getProjects();
    getTasks();
    //end get functions
}//end onReady