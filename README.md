# guestara_node

# start project

1. clone this repo and open the folder
2. run the  "  npm install " command to install all required files
3. create  .env file update your mongoDB URL.
4. Use Postman or Thunder client to call API and get data


Apis

Get Apis

/categories   - get all categories
/category/:id  - get category by id
/sub/subcategories - get all subcategories
/sub/subcategories/:id - all subcategories in a category by id
/sub/subcategory/:id - get sub-category by id
/item/items - get all items
/item/itemname/:name - search item by item-name
/item/items/:id - all items in a category
/item/subitems/:id -  all items in a category
/item/item/:id -   item by item id

Post Apis

/addCategory -> add category
/editcategory/:id -> add category
/sub/addSubCategory -> add category
/sub/editsubcategory/:id -> add category
/item/addItem -> add category
/item/edititem/:id -> add category


 # technologies
 NodeJS, express, mongoose
