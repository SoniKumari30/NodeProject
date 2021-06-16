const mongoose = require('mongoose');
var Float = require('mongoose-float').loadType(mongoose);

const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,'Must have name'],
    },
    email:{
        type:String,//
        required:[true,'Must have number'],
        unique:true
    },
    test1:{
        type:Float,
        default:0.0
    },
    test2:{
        type:Float,
        default:0.0
    },
    test3:{
        type:Float,
        default:0.0
    }


});

const Student = mongoose.model('Student',studentSchema);

module.exports= Student; 