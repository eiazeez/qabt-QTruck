const { defineConfig } = require('cypress')
const { cypressBrowserPermissionsPlugin } = require('cypress-browser-permissions')
const mongo = require('cypress-mongodb')


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
      mongo.configurePlugin(on)
      config = cypressBrowserPermissionsPlugin(on, config)
      return config

    },

    baseUrl: 'http://localhost:3000',
    viewportWidth: 1440,
    viewportHeight: 900,

    env: {
      browserPermissions: {
        geolocation: 'allow',  
        notifications: 'allow'
      },

    mongodb: {
        uri: 'mongodb+srv://qa:cademy@cluster1.nzhhb7c.mongodb.net/QtruckDB?retryWrites=true&w=majority',
        database: 'QtruckDB',
      }

    }

  },
});
