const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Event = require('../models/event')
const config = require("../config/database")
const multer = require('multer')
const fs = require('fs');

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, './uploads/')
    },
    filename: (req,file,cb) =>{
        cb(null, file.originalname)
    }
});

const fileFilter = (req,file,cb)=>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg')
    {
        cb(null,true)
    }
    else
    {
        cb(null,false)
    }
    
    
}

const upload = multer({
    storage: storage, 
    limits: {fieldSize: 1024 * 1024 * 5},
    fileFilter: fileFilter
})
/////////////////////////////////////////////////////////////////////

router.put('/photo', upload.single('eventImage'), (req,res,next)=>
{   
    console.log(req.file)
   
    Event.findOne({_id:req.headers.authorization}, (err,event)=>{

        if(event.image !== 'uploads/default.png')
        {   
            console.log("inside delete photo >"+ event.image + " < inside delete photo")
            fs.unlinkSync(event.image)
        }


        //console.log(event.name)
        event.image = req.file.path
        event.save((err,updatedObject)=>{
           // console.log(event.image)
            console.log("upload phohot > "+ updatedObject.image +" < photo")
            res.json(updatedObject.image)
        })
        
    })
   
})


router.post('/join',(req,res,next)=>{


    User.findOne({_id: req.body.userId}, (err,user)=>{
        for(i = 0; i < user.attending.length; i++)
        {
            if(user.attending[i] == req.body.eventId)
            {
                console.log("already joined")
                return res.json("already joined")
            }
        }
        console.log('if this come after already joimed return dont exit function')
        user.attending.push(req.body.eventId)
        user.save((err,user)=>{
            Event.findOne({_id:req.body.eventId},(err,event)=>{
                console.log("it keeps going")
                for(i = 0; i < event.attending.length; i++)
                {
                    if(event.attending[i] == req.body.userId)
                    {   
                        console.log("already joined")
                        
                        //user.attending.pop()
                       return res.json("already joined")
                    }
                }
                event.attending.push(req.body.userId)
                console.log('if this come after already joimed return dont exit function')
                console.log("saved the event after join")
                event.save((err,event)=>{
                    res.json(event)
                })
            
            })
        })
    })
})

router.post('/addevents',(req,res,next)=>{
    console.log(req.body)
    let newEvent = new Event({
        name: req.body.name,
        details: req.body.details,
        location:req.body.location,
        date: req.body.date,
         host: req.body.host,
        image: req.body.image
            
    })
    console.log(newEvent)
   const thisuser = User.findOne({_id:newEvent.host._id},(err,user)=>{
        user.events.push(newEvent._id) 
        //console.log( "user>: "+ user+ " <uer")
        user.save()
   })

    newEvent.save((err,user)=>{
        if(err)
        {
            res.json("bad")
        }
        else
        {
            Event.findOne({name:newEvent.name}).populate('host', 'firstname lastname profilePic' ).exec(function(err,host){
                res.json(host)  
               })
        }
    })
})

router.put('/leaveevent',(req,res,next) =>{

    
    User.findById(req.body.userId, (err,user)=>{
        //console.log(">"+user)
        for(i = 0; i < user.attending.length; i++)
        {
            if(user.attending[i] == req.body.eventId)
            {   
                console.log("user name: " +user.name + " user.attending " + user.attending)
                user.attending.splice(i,1)
            }
        }
        user.save((err,user)=>{
            Event.findById(req.body.eventId, (err,event)=>{
                // console.log("made it to events")
               for(i = 0; i < event.attending.length; i++)
               {
                   if(event.attending[i]._id == req.body.userId)
                   {    

                        console.log("event.attending[i] " + event.attending[i] + "req.body.userId "+ req.body.userId)
                       event.attending.splice(i,1)
                      
                   }
               }
               event.save((err,event)=>{
                res.json(event)
               })
               console.log("saved event")
              // console.log(event.attending)
              
              })
        })
        console.log("saved user")
      
    })
})




router.put('/editevents',(req,res,next)=>{
        if(req.body.date != null)
        {   
            console.log("with date" + req.body.date.year)
            Event.findByIdAndUpdate(req.body.eventId,{name:req.body.name,details:req.body.details,date:req.body.date},(err,updatedEvent)=>{
                updatedEvent.name = req.body.name
                updatedEvent.details = req.body.details
                updatedEvent.date = req.body.date
                console.log("updated event> " + updatedEvent +" < udpdared evebnt" )
                res.json(updatedEvent)
            })
        }
        else
        {   
            console.log("without date")
            Event.findByIdAndUpdate(req.body.eventId,{name:req.body.name,details:req.body.details},(err,updatedEvent)=>{
                updatedEvent.name = req.body.name
                updatedEvent.details = req.body.details
                console.log("updated event> " + updatedEvent +" < udpdared evebnt" )
                res.json(updatedEvent)
            })
        }
       
})


router.put('/delete',(req,res,next) =>{
    const eventId = req.body.eventId
    const userId = req.body.userId

    if(req.body.image !== 'uploads/default.png')
    {   
       // console.log("inside delete photo >"+ req.body.image + " < inside delete photo")
        fs.unlinkSync(req.body.image)
    }
    
    User.findById(userId,(err,user)=>{
        for(i = 0;  i < user.events.length; i++)
        {
            if(user.events[i] == eventId)
            {
                user.events.splice(i,1)
                user.save(()=>{

                    User.find({ attending: {$in:eventId} } ,(err,user)=>{
                       for(use in user)
                       {    
                            for(i = 0; i < user[use].attending.length; i++)
                            {   
                                if(user[use].attending[i] == eventId)
                                {   
                                    user[use].attending.splice(i,1)
                                    user[use].save()
                                    break;
                                }
                            }
                       }
                    })

                })
                break;
            }
        }
    })
      
        Event.findByIdAndRemove(req.body.eventId, (err, event)=>{

            if(err){
                console.log(err)
            }else
            {
            }
        })
   
    


   
})

router.get('/getsingleevents', (req,res)=>{
    Event.findById(req.headers.authorization).populate('host attending', '  firstname lastname profilePic name').exec(function(err,host){        
        res.json(host)  
       })
})

router.get('/getevents', (req,res,next)=>{
    Event.find().populate('host attending', 'firstname lastname profilePic' ).exec(function(err,host){
        
        res.json(host)  
       })
    })
    


module.exports = router