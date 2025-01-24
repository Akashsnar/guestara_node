
import mongoose from 'mongoose'

const Schema= mongoose.Schema;
const SubCategorySchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    taxApplicability: { type: Boolean, default: null }, 
    tax: { type: Number, default: null }, 
    categoryId: { type: Schema.Types.ObjectId, ref: 'Category', required: true }, 
    items: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Item',
      }
    ]
  }, { timestamps: true });
  
  const SubCategory = mongoose.model('SubCategory', SubCategorySchema);

  export default SubCategory;