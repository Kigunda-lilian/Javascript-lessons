season = "December";
if (season === "September" || "October" || "November") {
  console.log("The season is Autumn");
} else if (season === "December" || "January" || "February") {
  console.log("The season is Winter");
} else if (season === "March" || "April" || "May") {
  console.log("The season is Spring");
} else if (season === "June" || "July" || "August") {
  console.log("The season is Summer");
} else {
  console.log("");
}

season === "September" || "October" || "November"
  ? console.log("The season is Autumn")
  : season === "December" || "January" || "February"
  ? console.log("The season is Winter")
  : season === "March" || "April" || "May"
  ? console.log("The season is Spring")
  : season === "June" || "July" || "August"
  ? console.log("The season is Summer")
  : console.log("");

switch (season) {
  case "September" || "October" || "November":
    console.log("The season is Autumn");
    break;
  case "December" || "January" || "February":
    console.log("The season is Winter");
    break;
  case "March" || "April" || "May":
    console.log("The season is Spring");
    break;
  case "June" || "July" || "August":
    console.log("The season is Summer");
    break;
  default:
    console.log("");
}


let weekDay = "SundAy"
let defaultWeekday = weekDay.up