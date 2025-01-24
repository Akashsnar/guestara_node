import express from 'express'
import dotenv from 'dotenv'
import { connection } from './config/connection.js';
import categoryRoutes from './routes/category.js'
import SubCategoryRoutes from './routes/subcategory.js'
import itemRoutes from './routes/item.js'

dotenv.config()

const app= express();
const Port=5000

app.use(express.json())

//category backend routes
app.use("/", categoryRoutes)
//subcategory backend routes
app.use("/sub", SubCategoryRoutes)
//items backend routes
app.use("/item", itemRoutes)

connection()

app.listen(Port, ()=>{
    console.log(`http://localhost:${Port}/`);
})