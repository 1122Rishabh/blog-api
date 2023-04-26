const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
        min: 4,
    },
    content: {
        type: String,
        required: true,
        min: 12,
    },
    author: {
        type: String,
        required:true,
    },
 
}, {timestamps: true})

module.exports = mongoose.model("   ", BlogSchema)