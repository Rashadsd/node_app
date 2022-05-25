const { Router } = require('express')
// const { connection } = require('../db')

const router = Router()

router.get('/', (req, res) => {
    res.json({})
})

// router.get('/', (req, res) => { 
//     let query = "SELECT * FROM about" 
//     connection.query(query, (err, result) => {
//         console.log(err)
//         console.log(result)
//         res.json(result)
//     })
// })



module.exports = router // INSERT INTO table_name (column1, column2, column3, ...)
                        // VALUES (value1, value2, value3, ...);

