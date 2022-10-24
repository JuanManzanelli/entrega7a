const knex =require('knex');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */


//tabla con knex
module.exports.up = async function(knex) {
    const exists = await knex.schema.hasTable('users');
    if (!exists) { 
    return knex.schema.createTable('users', (table) =>{
        table.increments('id'); //asi se define el primart key
        table.string('name', 255).notNullable().defaultTo('fulano');
        table.string('lastname');
        table.integer('age');
        table.string ('dni').notNullable().unique();
        //unique para que sea unico en mi tabla
});
}
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 module.exports.down = async function(knex) {
    const exists = await knex.schema.hasTable('users');
    if (exists) { 
    return knex.schema.dropTable('users');
    }
};
