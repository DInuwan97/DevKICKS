const mongoose = require('mongoose')


const schoolSchema = new mongoose.Schema({
    schoolName : String,
    province : String,
    district : String    
});
const School = mongoose.model("School", schoolSchema);
  

exports.School = School;