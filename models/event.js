const mongoose = require("mongoose");
const User = require('../models/user').User
const userSchema = require('../models/user').userSchema
//var user = mongoose.model("user", userSchema);

const eventSchema = mongoose.Schema({
    name:
    {
        type:String,
        require: true
    },
    details:
    {
        type: String,
        require: true
    },
    location:
    {
        type:Object,
        require:true
    },
    date:
    {
        type: Date,
        require: true
    },
    time:
    {
        type: Date,
        require: true
    },
    host:
    {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        require: true
    },
    image:
    {
        type:String,
        require: false
    },
    attending:[{
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        require: false
    }],
 
})

const Event = module.exports = mongoose.model("Event", eventSchema)

module.exports.getEventById = function(id,callback){
    Event.findById(id,callback)
}





module.exports.addEvent = function(newEvent, callback)
{
    newEvent.save(callback)
}