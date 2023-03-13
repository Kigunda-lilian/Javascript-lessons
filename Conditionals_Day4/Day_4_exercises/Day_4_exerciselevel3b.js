function daysInMonth(month, year) {
  switch (month) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
      return 31;
      break;
    case "April":
    case "June":
    case "September":
    case "November":
      return 30;
      break;
    case "February":
      return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? 29 : 28;
      break;
    default:
      return "Invalid Month";
  }
}

console.log(daysInMonth("February", 2020)); // outputs 29
