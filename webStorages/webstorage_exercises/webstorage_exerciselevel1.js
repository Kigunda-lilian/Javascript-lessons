// When we set data to be stored in a localStorage, it will be stored as a string. If we are storing an array or an object, we should stringify it first to keep the format unless otherwise we lose the array structure or the object structure of the original data.

localStorage.setItem('firstName', 'Asabeneh') // since the value is string we do not stringify it
console.log(localStorage)

const skills2 = ['HTML', 'CSS', 'JS', 'React']
//Skills array has to be stringified first to keep the format.
const skillsJSON = JSON.stringify(skills2, undefined, 4)
localStorage.setItem('skills', skillsJSON)
console.log(localStorage)

let skills = [
    { tech: 'HTML', level: 10 },
    { tech: 'CSS', level: 9 },
    { tech: 'JS', level: 8 },
    { tech: 'React', level: 9 },
    { tech: 'Redux', level: 10 },
    { tech: 'Node', level: 8 },
    { tech: 'MongoDB', level: 8 }
  ]
  
  let skillJSON = JSON.stringify(skills2)
localStorage.setItem('skills', skillJSON)
  
// Storing an object in a localStorage. Before we storage objects to a localStorage, the object has to be stringified.

const user = {
    firstName: 'Asabeneh',
    age: 250,
    skills: ['HTML', 'CSS', 'JS', 'React']
  }
  
  const userText = JSON.stringify(user, undefined, 4)
  localStorage.setItem('user', userText)