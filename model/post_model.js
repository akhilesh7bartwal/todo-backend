const mongoose= require('mongoose')

const postSchema = mongoose.Schema(
    {

        itemName:{
            type:String,
            required:true
        }
    }
)
module.exports = mongoose.model('todo_list', postSchema)