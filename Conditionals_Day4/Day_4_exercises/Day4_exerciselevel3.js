function determineSeason(month) {
  switch (month) {
    case "September":
    case "October":
    case "November":
      return "Autumn";
      break;
    case "December":
    case "January":
    case "February":
      return "Winter";
      break;
    case "March":
    case "April":
    case "May":
      return "Spring";
      break;
    case "June":
    case "July":
    case "August":
      return "Summer";
      break;
    default:
      return "Invalid Month";
  }
}

console.log(determineSeason("June"));
