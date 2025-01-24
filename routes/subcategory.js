import express from 'express'
import Category from '../model/category.js'
import SubCategory from '../model/sub_category.js'


const router = express.Router()

router.post('/addSubCategory', async (req, res) => {
   try {
      const { name, image, description, tax_applicability, tax, categoryId } = req.body;
      const datasaved = await SubCategory.create({
         name,
         image,
         description,
         tax_applicability,
         tax,
         categoryId
      })

      await Category.findByIdAndUpdate(
         categoryId,
         { $push: { subCategories: datasaved._id } },
         { new: true, useFindAndModify: false }
      );
      console.log("data saved");
      res.json(datasaved)
   } catch (error) {
      res.send(error)
   }
})


router.get('/subcategories', async (req, res) => {
   try {
      const data = await SubCategory.find();
      res.send(data);
   } catch (error) {
      console.log(error);
   }
})

router.get('/subcategories/:id', async (req, res) => {
   try {
      const {id} = req.params;
      const data = await SubCategory.find({ categoryId: id });
      res.send(data);
   } catch (error) {
      console.log(error);
   }
})

router.get('/subcategory/:id', async (req, res) => {
   try {
      const {id} = req.params;
      const data = await SubCategory.findOne({ _id: id });
      res.send(data);
   } catch (error) {
      console.log(error);
   }
})



router.post('/editSubCategory/:id', async (req, res) => {
   try {
     const { id } = req.params;
     const {
       name,
       image,
       description,
       tax_applicability,
       tax,
       categoryId,
     } = req.body; 
 
     if (!mongoose.Types.ObjectId.isValid(id)) {
       return res.status(400).json({ error: 'Invalid subcategory ID format' });
     }
     const updatedSubCategory = await SubCategory.findByIdAndUpdate(
       id, 
       {
         $set: {
           name,
           image,
           description,
           tax_applicability,
           tax,
           categoryId,
         }, 
       },
       { new: true } 
     );
 
     if (!updatedSubCategory) {
       return res.status(404).json({ error: 'Subcategory not found' });
     }
 
     res.status(200).json({
       message: 'Subcategory updated successfully',
       data: updatedSubCategory,
     });
   } catch (error) {
     console.error('Error updating subcategory:', error);
     res.status(500).json({ error: 'Failed to update subcategory' });
   }
 });
 



export default router;