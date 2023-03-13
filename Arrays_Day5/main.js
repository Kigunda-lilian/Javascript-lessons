const countries = require('./countries');
const webTechs = require('./web_techs');

console.log(countries);
console.log(webTechs);

//In the countries.js and web_techs.js files, the arrays are assigned to a constant variable, and then exported using the module.exports syntax. In the main.js file, both arrays are imported using the require method and assigned to constants. Finally, both arrays are logged to the console. 