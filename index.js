const express = require('express');
const fs = require('fs');
const app = express();
const port = 4000;

app.listen(port, () => {
   
})



 const readModel = (url, code, cb) => {
    fs.readFile(url, code, cb);
}

app.get("/products", (request, response) => {
    readModel("./model/data.json", 'utf-8', (e, data) => {
       
        let users;
        let { query } = request;
        if (typeof data === "string") {
            users = JSON.parse(data);
        }

        if (query.stock) {
            let isStock = query.stock === 'true';
            users = users.filter(user => user.productStock === isStock);
        }
        
        const { minPrice = "", maxPrice = "" } = request.query;
            
        if (minPrice && maxPrice) {
            users = users.filter((user) => +user.productPrice >= +minPrice && +user.productPrice <= +maxPrice);
        }

        response.status(200).json({
            users
        });
    });
});



app.get("/productsNames", (request, response) => {
    readModel("./model/data.json", 'utf-8', (e, data) => {
       
        let users;
        let { query } = request;
        
        if (typeof data === "string") {
            users = JSON.parse(data);
        }

        users = users.filter(user => user.productName === query.productName);
        
        response.status(200).json({
            users
        });

    });
});

app.get("/products/:id", (request, response) => {
    readModel("./model/data.json", 'utf-8', (e, data) => {
        let { id } = request.params; 
        let products;
        
        if (typeof data === "string") {
            products = JSON.parse(data);
        }
         products = products.filter(product => product.productId === +id);

         response.status(200).json({
            products
        });
    });
});
