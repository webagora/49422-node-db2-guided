const knex = require('./knex')

const configs = require('../knexfile')

// on Heroku, process.env.NODE_ENV will be 'production'
const env = process.env.NODE_ENV || 'development'

const configToUse = configs[env]
