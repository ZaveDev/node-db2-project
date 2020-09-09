const knex = require('knex')

const knexfile = require('../knexfile.js')

const enviroment = process.env.NODE_ENV || "development"

const config = knexfile[enviroment]

module.exports=knex(config)