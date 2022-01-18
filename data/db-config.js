const knex = require('./knex')

const configs = require('../knexfile')

// on Heroku, process.env.NODE_ENV will be 'production'
const env = process.env.NODE_ENV || 'development'

// we need [ ] when object prop is a variable
const configToUse = configs[env]

module.exports = knex(configToUse)
