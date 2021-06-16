const app = require('./app');

const mongoose = require('mongoose');

const db='mongodb+srv://sonikumari:Sonikumari@123@cluster0.2he9m.mongodb.net/student?retryWrites=true&w=majority';
//process.env.DATABASE.replace('<password>',process.env.DB_PASS);
mongoose.connect(db,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:true
}).then(con=>{
   // console.log(con.connections);
    console.log("db connected");
}).catch(e=>{
    console.log(e);
    console.log("db not connected");
});


app.listen(process.env.PORT);
//app.listen(3000,()=>console.log("app is running"));