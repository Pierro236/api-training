## USERS-API

##  If you have docker installed in your PC.

Run this command in the project root:

```
docker compose up --build -d

```
- The services will run
- The MariaDB server run on port 3307

You can directly use the api!

## If you doesn't have docker installed in your PC.

For the database : 
- Change the settings(host, username, password) with your local database tool configuration, install and  import if it's necessary the corresponding npm package .
- Don't forget to create a database named "testuser"

For the api:

## To install  the dependencies do:

``` 
npm install

```

## Run the application :

```
npm start

```

## USE

This API works on the REST standard, collecting informations about users.

The application runs on port 3000 by default.

To test the api, you can use an api client like Postman or Insomnia.

## How does it work?

You can perform four type of operations (Create - Read - Update - Delete)
       
### With http://localhost:3000/users

- GET : Get all users

- POST : Create a new user in the database

### With http://localhost:3000/users/id

- GET : Get a specific user details

- UPDATE : Change the details of a specific user

- DELETE : Delete an user





