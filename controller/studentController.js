const Student = require("../models/studenModel");

exports.addStudentDetails = async(req,res) =>{
    try{
        const user = await Student.create(req.body);
        res.status(201).json({
            status:true,
            message:'created',
            details:user
        });
    }catch(e){
        res.status(400).json({
            status:false,
            details:"something went wrong",
            message:e.message
        });
    }

}

exports.getStudentDetails = async(req,res)=>{
    try {
     
        const student = await Student.find();
       
        res.status(200).json({
            status:true,
            details:student
        });
    
    
    

        
    } catch (error) {
        res.status(400).json({
            status:false,
            message:error
        });
    }
}

exports.addmarks =async (req,res)=>{
    try{
    const student = await Student.findOneAndUpdate({email:req.body.email},{$set:{"test1":req.body.test1,"test2":req.body.test2,"test3":req.body.test3}});
    res.status(201).json({
        status:true,
        message:"updated"
    });
    }catch(err){
        res.status(400).json({
            status:false,
            message:err
        })
    }
    


}

exports.highestscore = async(req,res) =>{
    try{
        const student = await Student.aggregate([
            {
                $project:{
                    examTotal: {$sum :["$test1","$test2","$test3"]}
                }
               
            }
        ]);
        
        var max = Math.max.apply(null,student.map(item => item.examTotal))
        var highscore=[];
        for (var i =0;i<student.length;i++)
        {
            if(student[i].examTotal == max)
            {
                highscore.push(student[i]);
            }
        }
        var result=[]
        for(var i=0;i<highscore.length;i++)
        {
            var studentresult = await Student.find({_id:highscore[i]['_id']});
            result.push(studentresult);
        }
        res.status(200).json({
            status:true,
            details:result
        });

        
    }catch(e){
        res.status(400).json({
            status:false,
            message:e
        })
    }
}

exports.averagemarks = async(req,res) =>{
    try {
        const test1 = await Student.aggregate([{$group: {_id:null, value: {$avg:"$test1"} } }]);
        const test2 = await Student.aggregate([{$group: {_id:null, value: {$avg:"$test2"} } }]);
        const test3 = await Student.aggregate([{$group: {_id:null, value: {$avg:"$test3"} } }]);
        
        res.status(200).json({
            status:true,
            test_1avg: test1[0]['value'],
            test_2avg: test2[0]['value'],
            test_3avg: test3[0]['value']
        });
    } catch (error) {
        res.status(400).json({
            status:false,
            message:e
        })
    }

}