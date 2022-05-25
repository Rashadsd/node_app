const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
// const { connection } = require('./db')

const app = express()




app.use(cors())
app.use(express.json())   // JSON
app.use(express.urlencoded({ extended: true }))    // FormData


// connection.connect(err => {
//     if(err){
//         return err
// }else{
//     console.log('Database connect')
// }
// })

app.use('/', require('./routes/categories'))
app.use('/categories', require('./routes/categories'))
app.use('/users', require('./routes/users'))



const start = async function () {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            
        })

        const PORT = process.env.PORT || 5000
        app.listen(PORT, () => {
            console.log('Server connection')
        })
    }catch(e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()