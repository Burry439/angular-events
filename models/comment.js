const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    comment:
    {
        type:String,
        require: true
    },
    commenter:
    {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        require: true
    },
    event:
    { 
        type: mongoose.Schema.Types.ObjectId, ref: 'Event',
        require:false
   }
})

const Comment = module.exports = mongoose.model("Comment", commentSchema)

