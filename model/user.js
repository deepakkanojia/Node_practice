// installing libraries of mongo db
const mongoose = require('mongoose');
// declaring a schemea here that what should be the type and what should not 
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true ,
        unique : true
    }
},{
    //and yes we give this field so that we can know this user when was created and destroyed
    timestamps : true
});
// abhi yaha per hum mongoose.model is liye use ker rahe hai ki ye mongoose.model ko compile  kerke hame output dede
const User = mongoose.model('User', userSchema);
//abhi yaha per jo user ne compile kari thi file vo ab hum export kerenge
module.exports = User;