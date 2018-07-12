const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Event = require('../models/event')
const Comment = require('../models/comment')

router.post('/addcomment',(req,res,next)=>{
    console.log("add comment : " + req.body.eventId + " :<")
    let newComment = new Comment({
        comment: req.body.comment,
        commenter:req.body.userId,
        event:req.body.eventId
    })

      newComment.save((err,comment)=>{
        if(err)
        {
            res.json("bad")
        }
        else
        {   
        
            Comment.findById(comment._id).populate('commenter', 'firstname lastname profilePic').exec((err,comment)=>{
                res.json(comment)
            })
            
        }
    })
})

router.put('/deletecomment', (req,res)=>{
    console.log(req.body)
    Comment.findByIdAndRemove(req.body.commentId,(err,comment)=>{
        res.json(comment)
    })
})

router.put('/editcomment', (req,res)=>{
    console.log(req.body)
    Comment.findByIdAndUpdate(req.body.commentId,{comment:req.body.commentText},(err,comment)=>{
        console.log("updated comment " + comment+" :<")
        comment.comment = req.body.commentText
        console.log("updated comment rigth before " + comment+" :<")
        res.json(comment.comment)
    })
})


router.get('/getcomments', (req,res)=>{
    Comment.find({event:req.headers.authorization}).populate('commenter', 'firstname lastname profilePic').exec(function(err,comments){        
        res.json(comments)  
       })
})



module.exports = router