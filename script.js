// DOM elements
const dateInput = document.getElementById("Date").value;
const monthInput = document.getElementById("Month").value;
const year = document.getElementById("Year").value;
const gender = document.getElementById("Gender").value;
const Result = document.getElementById("ResultW");

function akanName(){
  let DD = Number(dateInput)
  let MM = Number(monthInput)

  let CC = Number(year.substring(0, 2))
  let YY = Number(year.substring(2, 4))

  const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "THursday", "Friday", "Saturday"]

  const maleAkan = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
  const femaleAkan = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

  let d = Math.floor((((4 * CC - 2) * (CC - 1)) + (45 * YY) + (1026 * (MM + 1)) + DD) % 7)
  d = Math.abs(d);

  if(gender === "Male") {
    let Name = maleAkan[d]
    Result.textContent = `Being a ${gender} born on ${day[d]} in the year ${year}, your Akan name is ${Name}`
  } else {
    let Name = femaleAkan[d]
    Result.textContent = `Being a ${gender} born on ${day[d]} in the year ${year}, your Akan name is ${Name}`
  };
}

document.getElementById("SubButton").addEventListener('click',akanName)