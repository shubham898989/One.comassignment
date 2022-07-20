In this project we are implementing the Node.js express.js backend API that supports JWT (JSONWebToken) and works with MongoDB database using Mongoose ODM.

This document consist of the below information:

(1)  Node.js Express Architecture with CORS, Authentication & Authorization middlewares & Sequelize.

(2)  Appropriate Flow for User Login and Registration with JWT Authentication.

Below is the Architecture.

![BACKEND MODEL](https://user-images.githubusercontent.com/50915470/180009469-423b7caa-493b-453b-9da8-302ef6a6eca0.jpg)

Based on the flow we have created a  directory structure for our projrct 

![image](https://user-images.githubusercontent.com/50915470/180009215-944e2bc3-3e13-48dd-a36f-6b32d971c9ea.png)

– config

configure MongoDB database

configure Auth Key

![image](https://user-images.githubusercontent.com/50915470/180011027-16a79be5-d8f4-49f5-b57a-943c94a0e539.png)


– routes

auth.routes.js: POST signup, signin & signout

user.routes.js: GET public & protected resources

product.routes.js : GET products , POST /products/delete, /products/inserts, PATCH /api/products/update

![image](https://user-images.githubusercontent.com/50915470/180011182-167e53a4-433b-46c5-99a1-21a6f39e6bed.png)


– middlewares

verifySignUp.js: check duplicate Username or Email

authJwt.js: verify Token, check User roles in database

![image](https://user-images.githubusercontent.com/50915470/180011557-4a8d2a95-56d3-4c29-89bf-6445466b83cc.png)

– controllers

auth.controller.js: handle signup, signin & signout actions

user.controller.js: return public & protected content

product.controller.js : fetch, update, delete, insert actions of products

![image](https://user-images.githubusercontent.com/50915470/180012160-67461eea-4e1e-42ba-9177-ae9ee28b1823.png)

– models for Mongoose Models

user.model.js

role.model.js

product.model.js 

![image](https://user-images.githubusercontent.com/50915470/180012604-5a050277-3907-4a21-93ba-cac857d4f33a.png)

– server.js: import and initialize necessary modules and routes, listen for connections.

![image](https://user-images.githubusercontent.com/50915470/180012768-5ef73ae7-e263-4538-920f-d6c73127758c.png)


Flow daigram of the API

 User Login and Registration with JWT Authentication.
 
 ![node-js-express-login-example-mongodb-flow](https://user-images.githubusercontent.com/50915470/180013820-be611954-033e-4265-9b1b-4c74355c757a.png)


Below are the endpoint of the API and Datasource is MongoDB.

Task : User registration 

Endpoint: http://localhost:8089/api/auth/signup

Method: POST

Payload: {
    "username":"shub",
    "email":"shub@jain.com",
    "password":"12345278",
    "roles": ["ADMIN"]
}

User Added in User collection in Retail DB 

![image](https://user-images.githubusercontent.com/50915470/180015655-ab17cf2e-8a40-48df-9965-d6b8a0381cdd.png)

Task: User SignIN

Endpoint: http://localhost:8089/api/auth/signin

Method: Post

Payload: {
    "username":"shubaha",
    "password":"12345278"
}

Task: Fetch Products list

Endpoint: http://localhost:8089/api/products

Method: GET

Task: Delete Products

EndPoint: http://localhost:8089/api/products/delete

Method : POST

Payload : {
    "product_id":"SKU2345"
}

Task: Upate the product details

EndPoint: http://localhost:8089/api/products/update

Method: PATCH

Payload: {
 "condition" :{
   "product_id": "SKU2345"
 },
 "updatedvalues":{
   "list_price": "34"
 }

}

Task: Items Upload

Endpoint: http://localhost:8089/api/products/inserts

Method: Post

Payload: {
    "data": [
                   {
		   "product_id": "SKU2345",
            "brand_id": "Addidas",
            "category_id": "shoes",
            "model_year": "2022",
            "list_price": "23"
                   }
    ]
}



