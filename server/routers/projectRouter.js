const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const bodyParser = require('body-parser');

console.log('in projectRouter');

//start projects router GET
router.get('/getProjects', function(request, response){
    console.log('in projects GET router');
    const sqlText = 
        `select distinct
            pg.project_group_id,
            pg.project_name,
            pg.project_active
        from project_group as pg
        where pg.project_active = 1
        order by pg.project_group_id`;
pool.query(sqlText)
    .then(function(result){
        // console.log('got results', result.rows);
        response.send(result.rows);
})
    .catch(function(error){
        // console.log('error on projects GET router', error);
        response.sendStatus(500);
    })
})//end projects router GET

//start tasks router GET
router.get('/getTasks', function(request, response){
    console.log('in tasks GET router');
    const sqlText = 
        `select distinct 
                pt.project_group_id,
                pt.task_id,
                pt.task_description,
                pt.details,
                pt.task_active
        from project_task as pt
        where pt.task_active = 1
        order by pt.task_id`;
    pool.query(sqlText)
        .then(function(result){
            // console.log('got results', result.rows);
            response.send(result.rows);
    })
        .catch(function(error){
            // console.log('error on projects GET router', error);
            response.sendStatus(500);
        })
})//end tasks router GET

//start project router GET
router.get('/displaySelectedProject', function(request, response){
    console.log('in projects GET router');
    var sqlText = 
        `select
            pg.project_group_id,
            pg.project_name
        from project_group as pg
        where pg.project_active = 1
        order by pg.project_group_id`;
        console.log(sqlText);  
    pool.query(sqlText)
        .then(function(result){
            // console.log('got results', result.rows);
            response.send(result.rows);
    })
        .catch(function(error){
            // console.log('error on projects GET router', error);
            response.sendStatus(500);
        })
})//end projects router GET

//start project router POST
router.post('/saveProject', function(request, response){
    console.log(request.body);
    const koala = request.body;
    console.log(koala);
    
    const sqlText = `INSERT INTO project_group
                        (project_group_id, project_name, project_active)
                        VALUES ($1, $2, $3)`;
        pool.query(sqlText, [project_group.name, koala.age, koala.gender, koala.readyForTransfer, koala.notes])
        .then(function(result){
            console.log('added Koala', result);
            response.sendStatus(200)
        })
        .catch(function(error){
            console.log('error adding koala', error);
        })
    
})//end koala post

module.exports = router;
