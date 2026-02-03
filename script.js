// DOM elements
const dateInput = document.getElementById("Date").value;
const monthInput = document.getElementById("Month").value;
const year = document.getElementById("Year").value;
const gender = document.getElementById("Gender").value;
const Result = document.getElementById("ResultW");

function akanName(){
  const DD = dateInput
  const MM = monthInput
  const CC = Math.floor(year / 100)
  const YY = (year % 100) 
  
  if(gender === "Male") {
    const maleAkan = {
      Sunday : "Kwasi",
      Monday : "Kwadwo",
      Tuesday : "Kwabena",
      Wednesday : "Kwaku",
      Thursday : "Yaw",
      Friday : "Kofi",
      Saturday : "Kwame"
    }
    const d = (((4 * CC - 2) * (CC - 1)) + (45 * YY) + (1026 * (MM + 1)) + DD) % 7
    const Name = Object.values(maleAkan)[d]
    Result.textContent = `Being a ${gender} born on ${DD}/${MM}/${CC}${YY}, your Akan name is ${Name}`
  } else {
    const femaleAkan = {
      Sunday : "Akosua",
      Monday : "Adwoa",
      Tuesday : "Abenaa",
      Wednesday : "Akua",
      Thursday : "Yaa",
      Friday : "Afua",
      Saturday : "Ama"
    }

    const d = (((4 * CC - 2) * (CC - 1)) + (45 * YY) + (1026 * (MM + 1)) + DD) % 7
    const Name = Object.values(femaleAkan)[d]
    Result.textContent = `Being a ${gender} born on ${DD}/${MM}/${CC}${YY}, your Akan name is ${Name}`
  };
}

document.getElementById("SubButton").addEventListener('click',akanName)
