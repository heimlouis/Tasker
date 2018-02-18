const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const bodyParser = require('body-parser');

console.log('in projectRouter');

//start projects router GET
router.get('/', function(request, response){
    console.log('in projects GET router');
    const sqlText = `SELECT * FROM project_group ORDER BY id`;
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

module.exports = router;
