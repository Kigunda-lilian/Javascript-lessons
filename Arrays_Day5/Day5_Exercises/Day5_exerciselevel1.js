function filterCompanies(companies) {
    let filteredCompanies = [];
    for (let i = 0; i < companies.length; i++) {
      let company = companies[i];
      let count = 0;
      for (let j = 0; j < company.length; j++) {
        if (company[j].toLowerCase() === 'o') {
          count++;
        }
      }
      if (count <= 1) {
        filteredCompanies.push(company);
      }
    }
    return filteredCompanies;
  }
  
  let companies = ['Google', 'Apple', 'Microsoft', 'Amazon', 'Facebook'];
  console.log(filterCompanies(companies));
  

// This function loops through each company name in the companies array, and for each company, it loops through its letters. If the letter is "o", it increments a count. After looping through all the letters of a company, it checks if the count is less than or equal to 1, and if it is, it pushes the company name to the filteredCompanies array. Finally, it returns the filteredCompanies array.