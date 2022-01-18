module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/produce.db3',
    },
    useNullAsDefault: null,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {

    }
  },

  staging: {

  },

  production: {

  },

};
