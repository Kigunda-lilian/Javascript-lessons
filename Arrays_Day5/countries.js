let countries = ["Kenya", "Uganda", "Tanzania", "Eritrea", "Egypt"];

module.exports = countries;

countries.includes("Ethiopia")
  ? console.log("ETHIOPIA")
  : countries.unshift("Ethiopia");

console.log(countries);
