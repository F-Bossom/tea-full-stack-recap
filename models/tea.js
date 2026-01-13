const mongoose = require("mongoose")
// Set up a new Schema
const teaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    size: String,
    description: String,
    teaImage: String
})

// turn that Schema into a model (so we can do CRUD)
const Tea = mongoose.model("Tea", teaSchema)

// export our model
module.exports = Tea