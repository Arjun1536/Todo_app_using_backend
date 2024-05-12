// Import Models wher schema is defined 
const Todo = require('../models/Todo')

exports.createTodo = async (req,res)=>{

    try{
        //fetch title and Description from req.body
        const {title,description}=req.body

        //create new todo object and insert in DB
        const response = await Todo.create({title,description})
         
        //send json response with success message
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry created Successfully'
            }
        )

    }
    catch(err){
        console.log(err)
        console.error(err)
        res.status(500).json({
            success:false,
            data:'Internal Server error',
            message:err.message
        })

    }
}