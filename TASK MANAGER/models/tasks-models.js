const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema ({
    name: {
        type:String,
        required:[true, 'MUST PROVIDE A TASK'],
        trim:true,
        maxlength:[50, 'TASK CANNOT BE MORE THAN 50 CHARACTERS ']
    },
    completed: {
       type:Boolean,
       default:false
    },
})

module.exports = mongoose.model('Task', TaskSchema)



