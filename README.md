# order-book
This project is basicaly designed for people who wishes to buy some product & sell some product from the same platform as well.

* Every user first need to **register** into the application
* After registration you need to **verify** your email with the provided code.
* Now, you can **login** for processing.
* user can add amount into his **wallet**.
* you can **buy** any product from the list. amount will be deducted from the wallet.
* you can add any number of product for **sell**. when someone buy's your product, the product will automatically added to your wallet.
* Every Data fetching is followed by pagination.
* The Application uses server side session handling for authentication system
  

## POSTMAN Link for testing the project.

https://app.getpostman.com/join-team?invite_code=27438ae007f4032e30b65bc449a1c01d&ws=2a6ad314-b018-4e4f-b7f3-661c9a391acd

## prerequisit to execute this project

* **Node** & **npm** installed in your system.
* **MongoDb** running locally on your system.
* **POSTMAN** for testing the API's

## How to start the server.

* fork & clone the project.
* `cd order-book`
* `sudo npm i -g pnpm`
* `pnpm i`
* `pnpm start`

## Descriptions for different API's 

* **Register** : `/auth/register`
  * method should be **POST**
  * it will require body, please have a look at POSTMAN Collection for the body data.
* **verify** : `/auth/verify`
  * method should be **POST**
  * it will require body, please have a look at POSTMAN Collection for the body data.
* **login** : `/auth/login`
  * method should be **POST**
  * it will require body, please have a look at POSTMAN Collection for the body data.
* **who am i** : `/auth/who-am-i`
  * method should be **GET**
* **logout** : `/auth/login`
  * method should be **DELETE**
* **reset password request** : `/auth/reset-password-request`
  * method should be **GET**
  * it will require body, please have a look at POSTMAN Collection for the body data.
* **reset password** : `/auth/reset-password`
  * method should be **PUT**
  * it will require body, please have a look at POSTMAN Collection for the body data.
* **change passwrd** : `/auth/change-password`
  * method should be **PUT**
  * it will require body, please have a look at POSTMAN Collection for the body data.
* **Add product** : `/product/seller/`
  * method should be **POST**
  * it will require body, please have a look at POSTMAN Collection for the body data.
* **fetch your product as seller** : `/product/seller/?page=1&size=10`
  * method should be **GET**
* **fetch your sold products** : `/product/seller/sold?page=1&size=10`
  * method should be **GET**
* **fetch all products as a buyer** : `/product/buyer/?page=1&size=10`
  * method should be **GET**
* **fetch products of your choice of category** : `/product/buyer/cloths?page=1&size=10`
  * method should be **GET**
* **Buy any product** : `/product/buyer/605d402188de741fbe656e6d`
  * method should be **POST**
  * it will require body, please have a look at POSTMAN Collection for the body data.
* **fetch Buy History** : `/product/buyer/history`
  * method should be **GET**
* **check your wallet balance** : `/product/wallet/`
  * method should be **GET**
* **Add Wallet balance** : `/product/wallet/`
  * method should be **POST**
  * it will require body, please have a look at POSTMAN Collection for the body data.

