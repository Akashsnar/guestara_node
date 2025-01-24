import express from 'express'
import Category from '../model/category.js'
import mongoose from 'mongoose'

const router = express.Router()

router.post('/addCategory', async(req, res)=>{
    try {
        const {name, image, description, tax_applicability, tax}=req.body;
        const datasaved= await Category.create({
          name,
          image,
          description, 
          tax_applicability, 
          tax
        })
        console.log("data saved");
        res.json(datasaved)
    } catch (error) {
        res.send(error)
    }
})

router.get('/categories', async(req, res)=>{
 try {
    const data=await Category.find();
    res.send(data);
 } catch (error) {
    console.log(error);
 }
})

router.get('/category/:id', async(req, res)=>{
    try {
        const {id}=req.params;
       const data=await Category.findOne({_id:id});
       res.send(data);
    } catch (error) {
       console.log(error);
    }
   })


   
router.post('/editcategory/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const {
        name,
        image,
        description,
        tax_applicability,
        tax
      } = req.body; 
  
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid category ID format' });
      }
      const updatedCategory = await Category.findByIdAndUpdate(
        id, 
        {
          $set: {
            name,
            image,
            description,
            tax_applicability,
            tax
          }, 
        },
        { new: true } 
      );
  
      if (!updatedCategory) {
        return res.status(404).json({ error: 'category not found' });
      }
  
      res.status(200).json({
        message: 'category updated successfully',
        data: updatedCategory,
      });
    } catch (error) {
      console.error('Error updating category:', error);
      res.status(500).json({ error: 'Failed to update category' });
    }
  });
  

export default router;