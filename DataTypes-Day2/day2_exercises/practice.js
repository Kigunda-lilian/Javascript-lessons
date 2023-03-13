// level2 question 12
phrase =
  "You cannot end a sentence with because because because is a conjunction";

uniquePhrase = "because because because";
firstIndex = phrase.indexOf(uniquePhrase);
lastIndex = firstIndex + uniquePhrase.length;
completePhrase = phrase.substr(firstIndex, uniquePhrase.length);
console.log(completePhrase);

// level3 question 3
const sentence1 =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

let replaceable = /%/g;
let replacedSentence = sentence1.replace(/%/g, "");
// console.log(replacedSentence);

let finalReplaced = sentence1.replace(/%|$|@|#/g, "");
console.log(finalReplaced);

const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
const regex = /\d+/g;
const numbers = text.match(regex).map(n => parseInt(n));

const salaryPerMonth = numbers[0];
const annualBonus = numbers[1];
const onlineCoursesPerMonth = numbers[2];

const totalAnnualIncome = salaryPerMonth * 12 + annualBonus + onlineCoursesPerMonth * 12;

console.log(totalAnnualIncome);
