//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var DemoModelSchema = new Schema({
    name: { type: String },
    city: { type: String },
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });


// Compile model from schema
var Demo = mongoose.model('demo', DemoModelSchema, 'demo');

module.exports = Demo;