require('dotenv').config()

var path = require('path');

var apos = require('apostrophe')({
  root: module,
  shortName: 'ada-joe',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user accounts.

  modules: {

    // Apostrophe module configuration

    // Note: most configuration occurs in the respective
    // modules' directories. See lib/apostrophe-assets/index.js for an example.
    
    // However any modules that are not present by default in Apostrophe must at
    // least have a minimal configuration here: `moduleName: {}`

    // If a template is not found somewhere else, serve it from the top-level
    // `views/` folder of the project

    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },
    'ada-joe-theme': {},
    'full-width-text-widgets': {
      fonts: ['Dancing Script', 'Darker Grotesque', 'Leckerli One', 'Meddon']
    },
    'horizontal-rule-widgets': {},
    'apostrophe-db': {
      uri: process.env.DB_CONNECTION_STRING
      // uri: 'mongodb://localhost:27017/apostrophe-sandbox'
      // There is legacy support for host, port, name, user and password options,
      // but this is not necessary. They can all go in the uri option like this:
      // mongodb://user:password@host:port/dbname
    }
  }
});

module.exports = apos