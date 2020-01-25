const express = require('express');
const usersRoute = express.Router();
const cors = require('cors'); 

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../Models/Users');

usersRoute.use(cors());

usersRoute.route('/register').post(async function(req,res){
    
    const today = new Date();

    //leteral object
    const userData = {

        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email:req.body.email,
        dob:req.body.dob,
        mobile:req.body.mobile,
        userType:req.body.userType,
        living_place:req.body.living_place,
        social_links:req.body.social_links,
        userType_Info:req.body.userType_Info,
        created_date:today,
        password:req.body.password
    }

    User.findOne({
        email:req.body.email
    })
    .then(user =>{
        if(!user){
            bcrypt.hash(req.body.password,10,(err,hash) =>{
                userData.password = hash
                User.create(userData)
                .then(user =>{
                    res.json({status:user.first_name+" "+user.last_name+ " registered"})
                })
                .catch(err =>{
                    res.send("error" +err);
                })
            })
        }else{
            res.json({error:"User already registred"})
        }
    })
    .catch(err =>{
        res.send("error" +err);
    })

    // const user2 = new User(req.body);
    // user2.save()
    //     .then(user2 =>{
    //         res.status(200).json({'user2':'User added Successfully'})
    //     })
    //     .catch(err =>{
    //         res.status(400).send(err);
    //     })

});


usersRoute.route('/login').post(async function(req,res){

    User.findOne({
        email:req.body.email
    })
    .then(user =>{
        if(user){
            if(bcrypt.compareSync(req.body.password,user.password)){
                const payload = {
                    _id:user._id,
                    first_name:user.first_name,
                    last_name:user.last_name,
                    email:user.email
                }

                let token = jwt.sign(payload,process.env.SECRET_KEY,{
                    expiresIn:1440
                })
                res.send(token)
            }else{
                res.json({error:"Incorrect Password!!!"})
            }
            }else{
                res.json({error:"User does not exsist in the system"})
            }
        
    })
    .catch(err =>{
        res.send("error" +err);
    })

});



module.exports = usersRoute;