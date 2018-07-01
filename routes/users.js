const express = require('express')
const router = express.Router()
const User = require('../models/user')
const passport = require('passport')
const jwt = require("jsonwebtoken")
const config = require("../config/database")
const multer = require('multer')
var cloudinary = require('cloudinary');

const Event = require('../models/event')

////////////for storing files/////////////////////////
cloudinary.config({ 
    cloud_name: 'dude439', 
    api_key: '833245911756313', 
    api_secret: 'aBPLhs-F8eFrzo-1TVlN1o1b_ms' 
  });
////////////////////////////////////////////////////





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

// router.put('/photo', upload.single('profilePic'), (req,res,next)=>
// {   
//     //console.log(req.file.filename)
//     //console.log(req.headers.authorization)
//     const id = JSON.parse(req.headers.authorization)
//     console.log(id)
//     let image = {image: req.file.path}
//     User.findById(id.id, (err,user)=>{
//         //console.log(user.name)
//         user.profilePic = req.file.path
//         user.save((err,updatedObject)=>{
//             //  console.log(updatedObject)
//             res.json(updatedObject)
//         })
        
//     })
  
    
// })

router.put('/photo', upload.single('profilePic'), (req,res,next)=>
{   
    //console.log(req.file.filename)
    //console.log(req.headers.authorization)
    const id = JSON.parse(req.headers.authorization)
    
    cloudinary.uploader.upload(req.file.path, function(result) { 
        console.log("resrult : " + result.url) 

        User.findById(id.id, (err,user)=>{
            //console.log(user.name)
            user.profilePic = result.secure_url
            user.save((err,updatedObject)=>{
                //  console.log(updatedObject)
                res.json(updatedObject)
            })
            
        })

      });


  
  
    
})


router.post('/register',(req,res,next)=>{
    console.log(req.body)
    console.log(req.file)
    let newUser = new User({
        firstname: req.body.firstname,
        email: req.body.email,
        lastname: req.body.lastname,
        password: req.body.password,
        profilePic: 'uploads/default.png',
        events: req.body.events
       
    })
    User.findOne({email:req.body.email},(err,user)=>{
        if(user)    
        {     
            console.log("Already created an account with this email")
            return res.json({success: 'false', msg: 'Already created an account with this email'})
        }
        else
        {   
            User.addUser(newUser, (err,user)=>{
                if(err)
                {
                    res.json({success: 'false', msg: 'failed to registar user'})
                }
                else
                {
                    res.json({success:'true', msg: "user registared"})
                }
            })
        }
    })
  

})


router.post('/authenticate', (req,res,next)=>{
    const email = req.body.email
    const password = req.body.password

    User.getUserByEmail(email, (err,user)=>{
        if(err) throw err
        if(!user)
        {
          return  res.json({success: false, message: "user not found"})
        }
        User.comparePassword(password, user.password, (err, isMatch)=>{
            if(err) throw err
            if(isMatch)
            {   
                
                const token = jwt.sign({data:user}, config.secret, 
                {
                  expiresIn:604800,
                })  
                res.json({
                success:true,
                token: "JWT " + token,
                user:
                {
                    id: user._id,
                    firstname: user.name,
                    email: user.email,
                    lastname: user.lastname,
                    profilePic: user.profilePic
                }
                })
            }
            else
            {
                return  res.json({success: false, message: "wrong password"})
            }
     

        })
    })
})

router.get('/getattendingevents',(req,res)=>{
    console.log(">"+req.headers.authorization)
    User.findById(req.headers.authorization).populate('attending', 'location.locationName name details date image attending host').exec((err,events)=>{
        console.log(">:"+events+":<")
        res.json(events)
    })
})



router.get('/getcreatedevents',(req,res)=>{
    console.log(">"+req.headers.authorization)
    User.findById(req.headers.authorization).populate('events', 'location.locationName name details date image attending').exec((err,events)=>{
        console.log(">"+events+"<")
        res.json(events)
    })
})




router.get('/profile', passport.authenticate('jwt', {session: false}), (req,res)=>{
                                                                            
    User.findById(req.user._id,(err,user)=>{
                console.log(user.attending)
                res.json(user)     
    })
})






//'events attending', 'name details date image attending host'

module.exports = router