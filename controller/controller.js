const TodoModel =  require('../model/post_model')

exports.showIndex = (req,res) =>{
    res.send("Running Node API")
}

exports.addTodoItem = (req,res) =>{
    const post = new TodoModel({
        itemName:req.body.itemName
    })
    post.save()
    .then(
        data =>{
            res.send(data)
        }).catch(error => {res.send(error)})
}

exports.showTodoItems = (req,res) => {
    TodoModel.find()
    .then(result =>{
        res.send(result)
    })
    .catch(error =>{
        res.status(400).send(err)
    })
}

exports.getTodoItem = (req,res) =>{
    TodoModel.findById(req.params.id)
    .then(result => {
        res.send(result)
    })
    .catch(error => {
        res.send(error)
    })
}

exports.updateTodo = (req,res) =>{
    TodoModel.findById(req.params.id, (error, todo) =>{
        if(error)
            res.send(error)
        todo.itemName = req.body.itemName ? req.body.itemName : todo.itemName
        todo.save((error) =>{
            if(error)
                res.send(error)
            res.json({
                message: "todo item updated.",
                data: todo
            })
        })
    })
}

exports.deleteTodo = (req,res) =>{

}

exports.deleteTodo = (req,res) =>{
    TodoModel.deleteOne({
        _id:req.params.id
    },(error) =>{
        if(error)
            res.send(error)

    })
    res.json({
        status: "Success",
        message: "Successfully deleted."
    })

}

// exports.deleteCategory = (req,res) =>{
//     TodoModel.remove({
//         _id:req.params.id
//     },(err) =>{
//         if(err)
//         res.send(err)
//         res.json({
//             status: "Success",
//             message: "Successfully deleted"
//         })
//     })
// }