const { model, Schema } = require('mongoose')

const userSchema = new Schema({
    username: {
        type: String
    },
    userage: {
        type: Number
    }
})


module.exports = model('User', userSchema)