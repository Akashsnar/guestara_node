import mongoose from 'mongoose'

const categorySchema = mongoose.Schema({
    name:String,
    image:String,
    description: String,
    tax_applicability: Boolean,
    tax: Number,
    subCategories: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubCategory', 
      }
    ],
  }, { timestamps: true })

 const category = mongoose.model('category', categorySchema)
 export default category