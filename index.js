const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
//db ki file yaha import karenge(ye inbuilt file hoti hai)
const mongoose = require('mongoose');
//db ki file yaha import karenge jo config me banayi thi
const db = require('./config/mongoose');
// ye hame likhna padta hai jab bhi hame view folder se file chahiye hoti hai
// yaha per view engine establish karenge
//set ker rahe hai property for for view engine
//middleware use karenge yaha ye bahoot jaroori hota hai
app.use(express.urlencoded());
app.set('view engine' , 'ejs');
// yaha per app.set me us folder ka naam ayega aur phir uska path join ker denge
// bhai yaha per join path isliye kiya hai ki mera server jaha se fire hua hai mtlab jaha index.js file hai vaha ka naam 
// aur jisme store kerna hai vo folder ka naam 
app.set('views' , path.join(__dirname, 'views'));
// yaha per app.get karenge aur jo bhi file chahiye hogi display kerne ke liye uska path phir jo file render kerna hai use kikhenge aur jo bhi tittile dena hoga vo likhenge
// app.get('/' , function(req, res){
//     return res.render('home',{title : "Welcome to Coding Pingas"});
// })

app.use('/',require('./routes'));

// ye apna listen kerta hai vaha per port no bhi hota hai
app.listen(port,function(err){
    if(err){console.log('something went wrong');
        return;
           }
       console.log('sever is up and running',port);
});