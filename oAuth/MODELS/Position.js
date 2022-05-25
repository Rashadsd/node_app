const mongoose = require('mongoose');
const Schema = mongoose.Schema

const positionSchema = new Schema({
    name: {type: String, required: true},
    cost: {type: String, required: true},
    category: {ref: 'categorie', type: Schema.Types.ObjectId},
    user: {ref: 'user', type: Schema.Types.ObjectId}
})

module.exports = mongoose.model('position', positionSchema)