const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    Music: {
        type: mongoose.Types.ObjectId,
        require: true

    },
    person: {
        type: String,
        require: true,
    },
    comment: {
        type: String,
        require: true,
    },
    created: {
        type: Date,
        default: Date.now()
    },
    // reply: [
    //     {
    //         person: {
    //             type: String,
    //             require: true,
    //         },
    //         comment: {
    //             type: String,
    //             require: true,
    //         },
    //         created: {
    //             type: Date,
    //             default: Date.now()
    //         }
    //     }
    // ]
},{timestamps:true})

module.exports = mongoose.model('comment', commentSchema);