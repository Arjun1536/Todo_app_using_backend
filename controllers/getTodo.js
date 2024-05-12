const Todo = require('../models/Todo')

exports.getTodo = async(req,res)=>{

    try{

        const getData = await Todo.find({});

        //send json response
        res.status(200).json(
            {
                success:true,
                data:getData,
                message:"get data successfully in thunderclient request"
            }
        )
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            success:false,
            data:'Internal error'
        })

    }

}

exports.getTodoid = async(req,res)=>{
    try{
        const Id = req.params.id

        const getId = await Todo.findById({_id:Id})

        if(!getId){
            res.status(404).json({
                success:false,
                message:"not fetch data using by Id",

            })
        }
        else{
            res.status(200).json({
                success:true,
                data:getId,
                message:'data fetch successfully'
            })
        }


    }
    catch(err){
        console.log(err)
        res.status(500).json({
            success:false,
            message:'Internal error'
        })
    }
}

//Update request Todo

exports.updatedTodo = async(req,res)=>{

    try{
        const Id = req.params.id;
        const {title,description} = req.body;

        const updateTodo = await Todo.findByIdAndUpdate(
            {_id:Id},
            {
                title,description,updatedAt:Date.now()
            }
            
        )
        res.status(200).json({
            success:true,
            data:updateTodo,
            message:"Updated Successfully"
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            success:false,
            message:'Internal error'
        })

    }
}

//Delete Todo item

exports.deleteTodo = async (req,res)=>{
    try{
        const id = req.params.id;
        await Todo.findByIdAndDelete(id)
        res.json({
            success:true,
            data:id,
            message:"Delete Successfully"
        })

    }
    catch(err){
        console.log(err)
        res.status(500).json({
            success:false,
            message:'Internal error'
        })
    }
}