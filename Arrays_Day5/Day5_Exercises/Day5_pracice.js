function filterCompanies(companies) {
  return companies.filter(function(company) {
    let count = 0;
    for (let i = 0; i < company.length; i++) {
      if (company[i].toLowerCase() === 'o') {
        count++;
      }
    }
    return count <= 1;
  });
}

let companies = ['Google', 'Apple', 'Microsoft', 'Amazon', 'Facebook'];
console.log(filterCompanies(companies));


//In this function, companies.filter takes a callback function as an argument. The callback function takes a company name as an argument and returns true if the company name has no more than one "o", and false otherwise. The filter method returns a new array with all elements for which the callback returns true. The filtered array is then returned by the filterCompanies function. 