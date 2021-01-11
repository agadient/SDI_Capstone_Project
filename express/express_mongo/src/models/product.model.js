const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    sampleData: {type: String, required: true, max: 100}
});


// Export the model
module.exports = mongoose.model('sampleData', ProductSchema);
