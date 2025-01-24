
import mongoose from 'mongoose'

const Schema= mongoose.Schema;
const ItemSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    tax_applicability: { type: Boolean, required: true },
    tax: { type: Number, required: false },
    baseAmount: { type: Number, required: true },
    discount: { type: Number, required: true, default: 0 },
    totalAmount: { type: Number, required: true, default: 0 },
    categoryId: { type: Schema.Types.ObjectId, ref: 'Category', required: false }, 
    subCategoryId: { type: Schema.Types.ObjectId, ref: 'SubCategory', required: false },
  }, { timestamps: true });

  ItemSchema.pre('save', function (next) {
    if (this.baseAmount != null && this.discount != null) {
      this.totalAmount = this.baseAmount - this.discount;
    }
    next();
  });
  
  
    
    const item = mongoose.model('item', ItemSchema);
  
    export default item;
  
  