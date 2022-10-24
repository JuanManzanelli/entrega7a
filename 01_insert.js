// @ts-nocheck  

const dbConfig = require ('./db/config');
const knex = require ('knex')(dbConfig.mariaBD);


const newUser = {
    name: 'Juan cruz',
    lastname:'Manzanelli',
    age:28 , 
    dni: '98765432'
};

//multipledata
const multipleUsers = [ 
    {name:'luis', lastname:'Perez', age:'20', dni:'45645645'},
    {name:'Javier', lastname:'Garcia', age:'30', dni:'78978978'},
    {name:'Diego', lastname:'Valles', age:'40', dni:'12312312'},
]

(async() => {
    try{
       //await knex  ('users').insert(newUser);
       //console.log("User inserted into DB")

       //multiple users
       await knex('users').insert(multipleUsers);
       console.log("multiple user inserted into DB")

    }

    catch(error) {
       console.log(error);   
    }

       finally {
        knex.destroy();
    }
})