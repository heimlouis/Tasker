// const express = require('express');
// const router = express.Router();
// const pool = require('../modules/pool');
// const bodyParser = require('body-parser');

// console.log('in taskRouter');

// //start tasks router GET
// router.get('/', function(request, response){
//     console.log('in task GET router');
//     const sqlText = `SELECT * FROM project_task ORDER BY id`;
// pool.query(sqlText)
//     .then(function(result){
//         // console.log('got results', result.rows);
//         response.send(result.rows);
// })
//     .catch(function(error){
//         // console.log('error on tasks GET router', error);
//         response.sendStatus(500);
//     })
// })//end tasks router GET

// module.exports = router;