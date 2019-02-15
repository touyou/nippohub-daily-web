const path = require('path');

module.exports = {
  mode: "development",
  entry: "./src/javascripts/application.js",
  output: {
    filename: "application.js",
    path: path.join(__dirname, "/")
  }
};
