// split():The split method splits a string at a specified place.
let string = "30 Days Of Javascript ";
console.log(string.split());
console.log(string.split(" "));
let firstName = "Asabeneh";
console.log(firstName.split()); // ["Asabeneh"]
console.log(firstName.split("")); // ["A", "s", "a", "b", "e", "n", "e", "h"]
let countries = "Finland, Sweden, Norway, Denmark, and Iceland";
console.log(countries.split()); // ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(", ")); //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]
console.log(countries.split(""));
