//install libraries 
const mongoose = require('mongoose');

// connection to mongodb 
mongoose.connect('mongodb://localhost/practice');
// now take a variable db that holds up  the mongo connection .
const db = mongoose.connection;

//ager connection me koi error hai to throw kar dega
db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

// Once our connection opens, our callback will be called.
db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

// export db now
module.exports = db;