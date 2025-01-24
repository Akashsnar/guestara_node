import express from 'express'
import Category from '../model/category.js'
import SubCategory from '../model/sub_category.js'
import Item from '../model/items.js'
import mongoose from 'mongoose'


const router = express.Router()

router.post('/addItem', async(req, res)=>{
    try {
        const {name, image, description, tax_applicability, tax, baseAmount, discount, totalAmount, categoryId, subCategoryId}=req.body;
        const datasaved= await Item.create({
          name,
          image,
          description, 
          tax_applicability, 
          tax,
          baseAmount, 
          discount, 
          totalAmount,
          categoryId,
          subCategoryId
        })

        await SubCategory.findByIdAndUpdate(
         subCategoryId,
         { $push: { items: datasaved._id } },
         { new: true, useFindAndModify: false }
      );
        console.log("item saved");
        res.json(datasaved)
    } catch (error) {
        res.send(error)
    }
})



router.get('/items', async(req, res)=>{
    try {
       const data= await Item.find();
       res.send(data);
    } catch (error) {
       console.log(error);
    }
   })

   router.get('/items/:id', async(req, res)=>{
    try {
        const {id}=req.params;
       const data= await Item.find({categoryId: id});
       res.send(data);
    } catch (error) {
       console.log(error);
    }
   })
   


   router.get('/subitems/:id', async(req, res)=>{
    try {
        const {id}=req.params;
       const data= await Item.find({subCategoryId: id});
       res.send(data);
    } catch (error) {
       console.log(error);
    }
   })

   router.get('/item/:id', async(req, res)=>{
    try {
        const {id}=req.params;
       const data=await Item.findOne({_id: id});
       res.send(data);
    } catch (error) {
       console.log(error);
    }
   })


   router.get('/itemname/:name', async(req, res)=>{
    try {
      console.log(req.params);
        const {name}=req.params;
     
        
       const data=await Item.findOne({name: name});
       res.send(data);
    } catch (error) {
       console.log(error);
    }
   })




   
router.post('/edititem/:id', async (req, res) => {
   try {
     const { id } = req.params;
     const {
       name,
       image,
       description,
       tax_applicability,
       tax,
       baseAmount, 
          discount, 
          totalAmount,
          categoryId,
          subCategoryId
     } = req.body; 
 
     if (!mongoose.Types.ObjectId.isValid(id)) {
       return res.status(400).json({ error: 'Invalid item ID format' });
     }
     const updatedItem = await Item.findByIdAndUpdate(
       id, 
       {
         $set: {
           name,
           image,
           description,
           tax_applicability,
           tax,
           baseAmount, 
          discount, 
          totalAmount,
          categoryId,
          subCategoryId
         }, 
       },
       { new: true } 
     );
 
     if (!updatedItem) {
       return res.status(404).json({ error: 'Item not found' });
     }
 
     res.status(200).json({
       message: 'Item updated successfully',
       data: updatedItem,
     });
   } catch (error) {
     console.error('Error updating item:', error);
     res.status(500).json({ error: 'Failed to update item' });
   }
 });
 

export default router;