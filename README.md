# guestara_node

# start project

1. clone this repo and open the folder
2. run the  "  npm install " command to install all required files
3. create  .env file update your mongoDB URL.
4. Use Postman or Thunder client to call API and get data


Apis

Get Apis

1. /categories   - get all categories
2. /category/:id  - get category by id
3. /sub/subcategories - get all subcategories
4. /sub/subcategories/:id - all subcategories in a category by id
5. /sub/subcategory/:id - get sub-category by id
6. /item/items - get all items
7. /item/itemname/:name - search item by item-name
8. /item/items/:id - all items in a category
9. /item/subitems/:id -  all items in a category
10. /item/item/:id -   item by item id

Post Apis

1. /addCategory -> add category
2. /editcategory/:id -> add category
3. /sub/addSubCategory -> add category
4. /sub/editsubcategory/:id -> add category
5. /item/addItem -> add category
6. /item/edititem/:id -> add category


 # technologies
 NodeJS, express, mongoose
