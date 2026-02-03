// DOM elements
const dateInput = document.getElementById("Date");
const monthInput = document.getElementById("Month");
const year = document.getElementById("Year");
const gender = document.getElementById("Gender");
const Result = document.getElementById("ResultW");

function akanName(){
  const dateVal = dateInput.value;
  const monthVal = monthInput.value;
  const yearVal = year.value;
  const genderVal = gender.value;

  let DD = Number(dateVal)
  let MM = Number(monthVal)
  let CC = Number(yearVal.substring(0, 2))
  let YY = Number(yearVal.substring(2, 4))

  const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "THursday", "Friday", "Saturday"]

  const maleAkan = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
  const femaleAkan = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

  const d = Math.floor((((4 * CC - 2) * (CC - 1)) + (45 * YY) + (1026 * (MM + 1)) + DD) % 7)


  if(gender === "Male") {
    let Name = maleAkan[d]
    Result.textContent = `Being a ${genderVal} born on ${day[d]} in the year ${yearVal}, your Akan name is ${Name}`
  } else {
    let Name = femaleAkan[d]
    Result.textContent = `Being a ${genderVal} born on ${day[d]} in the year ${yearVal}, your Akan name is ${Name}`
  };
}
