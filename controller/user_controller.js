// abhi yaha per User bana lenge jo require karega model me jo file thi
const User = require('../model/user');
// home ek function hoga jo render karega jo tumhe dikhana hai
module.exports.home = async function(req,res){
    try{
        // for showing it on page we use User.find and users : users
        let users = await User.find();
        //till here
        res.render('home.ejs',{
        title:'Home',
        //this too
        users:users 
        });
    }
    catch(err){
        return res.redirect('back');
    }
    
}
// abhi yaha per ek function banana padega jo create karega
module.exports.createUser = async function(req,res){
    // sab bhej rahe ho tabhi na ye likh rahe hai req.body
    console.log(req.body);
    try{
        //await karega user.create  create karege user databse me
       
        let user = await User.create(req.body);
        return res.redirect('back');
        
    }
    catch(err){
        console.log(err);
        return res.redirect('back');
    }

 

}
// deleting the members from the list we use here find by id and delete and the id is being given up by re.params.id
module.exports.destroy = async function(req,res){
    try{
        await User.findByIdAndDelete(req.params.id);
        return res.redirect('back');
    }
    catch(err){
        return res.redirect('back');
    }
}


