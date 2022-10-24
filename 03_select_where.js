 // @ts-nocheck  

const dbConfig = require ('./db/config');
const knex = require ('knex')(dbConfig.mariaBD);



(async() => {
    try{
       //const users =await knex.from('users')
       //.select('id','name','age')
       //.where({ age: 30})
       //.orWhere({name: 'luis'})

       //solo los que tengan e
      // const users =await knex.from('users')
      // .select('id','name', 'lastname','age')
      //  .where( 'name','like','%e%')
       
      //solo los que tengan 30 y 25 in
       // const users =await knex.from('users')
       // .select('id','name', 'lastname','age')
       //  .where( 'name','in',[30,25])


       console.table(users);
    }

    catch(error) {
        console.log(error);
        }

       finally {
        knex.destroy();
    }
})();