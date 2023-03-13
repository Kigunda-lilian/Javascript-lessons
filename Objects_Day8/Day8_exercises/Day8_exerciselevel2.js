const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  

// Count logged in users
let loggedInCount = 0;
for (let user in users) {
  if (users[user].isLoggedIn) {
    loggedInCount++;
  }
}
console.log(loggedInCount); // output: 2

// Count users having greater than equal to 50 points
let pointsCount = 0;
for (let user in users) {
  if (users[user].points >= 50) {
    pointsCount++;
  }
}
console.log(pointsCount); // output: 3


let maxSkills = 0;
let skillfulPerson = '';

for (let user in users) {
  if (users[user].skills.length > maxSkills) {
    maxSkills = users[user].skills.length;
    skillfulPerson = user;
  }
}

console.log(skillfulPerson); // output: "Asab"
// In the above code, we loop through the users object using a for...in loop and compare the skills.length property of each user with the maxSkills variable. If the skills.length is greater than maxSkills, we update the maxSkills variable and store the name of the user in the skillfulPerson variable. Finally, we log the name of the person with the most number of skills to the console.

for (let user in users) {
    if (users[user].skills.includes('MongoDB') &&
        users[user].skills.includes('Express') &&
        users[user].skills.includes('React') &&
        users[user].skills.includes('Node')) {
      console.log(user);
    }
  }
// In the above code, we loop through the users object using a for...in loop and check if each user has the required skills using the includes() method. If a user has all four skills, we log their name to the console.

// Note that this code assumes that a MERN stack developer must have all four skills (MongoDB, Express, React, and Node) in their skill set. If you want to search for developers who have at least one of these skills, you can use the || (OR) operator instead of && (AND) in the condition.

