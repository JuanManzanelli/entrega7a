// @ts-nocheck  

const dbConfig = require ('./db/config');
const knex = require ('knex')(dbConfig.mariaBD);



(async() => {
    try{
       const users =await knex.from('users').select('id','name','age');
       console.table(users);
    }

    catch(error) {
        console.log(error);
        }

       finally {
        knex.destroy();
    }
})();