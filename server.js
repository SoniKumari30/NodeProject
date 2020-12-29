const app = require('./app');

const mongoose = require('mongoose');

const db='mongodb+srv://sonikumari:Sonikumari@123@cluster0.2he9m.mongodb.net/student?retryWrites=true&w=majority';

mongoose.connect(db,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:true
}).then(con=>{
   
    console.log("db connected");
}).catch(e=>{
    console.log(e);
    console.log("db not connected");
});


app.listen(process.env.PORT);
