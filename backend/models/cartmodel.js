const  mongoose  = require("mongoose")

const Schema = mongoose.Schema

const cartSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    product_id:{
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
    
},{ timestamps: true })

module.exports= mongoose.model('Cart', cartSchema)
