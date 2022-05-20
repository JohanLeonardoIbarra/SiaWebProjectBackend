var path = require('path');

module.exports = {
  alias: {
    '@Controller': path.join(__dirname, '/controller/'),
    "@Model": path.join(__dirname, '/model/'),
    "@Router": path.join(__dirname, '/router/'),
    "@DB": path.join(__dirname, '/database/')
  }
};