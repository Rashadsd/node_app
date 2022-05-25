const mongoose = require('mongoose');
const Schema = mongoose.Schema

const categorySchema = new Schema({
    name: {type: String, required: true},
    imageSrc: {type: {}, default: ''},
    user: {ref: 'user', type: Schema.Types.ObjectId}
})

module.exports = mongoose.model('categorie', categorySchema);