// DOM elements
const dateInput = document.getElementById("Date").value;
const monthInput = document.getElementById("Month").value;
const year = document.getElementById("Year").value;
const gender = document.getElementById("Gender").value;
const Result = document.getElementById("ResultW");

function akanName(){
  const DD = Number(dateInput)
  const MM = Number(monthInput)

  const CC = Number(Math.floor(year / 100))
  const YY = Number((year % 100))

  const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "THursday", "Friday", "Saturday"]

  const maleAkan = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
  const femaleAkan = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

  let d = Math.floor((((4 * CC - 2) * (CC - 1)) + (45 * YY) + (1026 * (MM + 1)) + DD) % 7)
    d = Math.abs(d);
  if(gender === "Male") {
    let Name = maleAkan[d]
    Result.textContent = `Being a ${gender} born on ${DD}/${MM}/${CC}${YY}, your Akan name is ${Name}`
  } else {
    let Name = femaleAkan[d]
    Result.textContent = `Being a ${gender} born on ${DD}/${MM}/${CC}${YY}, your Akan name is ${Name}`
  };
}

document.getElementById("SubButton").addEventListener('click',akanName)
