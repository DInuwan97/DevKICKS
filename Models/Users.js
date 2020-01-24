const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({

    first_name:{
        type:String,
        required:true,
        uppercase:true,
        minlength:1,
        maxlength:100
    },
    last_name:{
        type:String,
        required:true,
        uppercase:true,
        minlength:1,
        maxlength:100 
    },
    email:{
        type:String,
        required:true,
        lowercase:true
    },
    dob:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true
    },
    userType:{
        type:String,
        required:true
    },
    living_place:{
        type:Array,
        validator:function(v){
            return v.length > 0
        },
        message:'Living place should have at least one charactor'
    },
    social_links:{
        type:Array
    },
    userType_Info:{
        type:Array,
        validator:function(v){
            return v.length > 0
        },
        message:'UserTpe Information should have at least one charactor'
    },
    created_date:{
        type:Date,
        default:Date.now
    },
    password:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('users',usersSchema);

// {
//     "first_name" :"Dinuwan",
//     "last_name":"Kalubowila",
//     "email":"kalubowila.dc@gmail.com",
//     "dob":"1997/06/12",
//     "mobile":"0172184518",
//     "userType":"Undergraduate",
    
//     "living_place":[
//         {
//         "province":"Western",
//         "district":"Kaluthara"
//         }
//     ],
    
//     "social_links":[
//         {
//         "facebook":"asdfg",
//         "linkeind":"qwerty"
//         }
//      ],
//     "userType_Info":[
//         {
//         "University":"SLIIT",
//         "Faculty":"FOC"
//         }
//     ],
//     "password":"123"
// }