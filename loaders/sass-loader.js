const sass = require('node-sass');

module.exports = function processSass(data, fileName) {
  let result = sass.renderSync({
    data: data,
    file: fileName
  }).css;

  return result.toString('utf8');
};
