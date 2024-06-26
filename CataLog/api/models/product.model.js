import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    specifications : {
        type: String,
        required: true,
    },
    images: [
        {
            type:String,
            required: true,
        }
    ],
    category: {
            type: String,
            required: true,
        },
        
    subcategory: {
            type: String,
            required:true
        },

    Seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Seller",
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
    
 

}, {timestamps: true}
)

export default mongoose.model('Product', productSchema);