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
  let calcYear = Number(yearVal)
  let CC;
  let YY;

  if (MM < 3) {
    MM += 12;
    calcYear -= 1;
    // Re-extract CC and YY based on the adjusted year
    CC = Number(String(calcYear).substring(0, 2));
    YY = Number(String(calcYear).substring(2, 4));
  } else {
    CC = Number(yearVal.substring(0, 2));
    YY = Number(yearVal.substring(2, 4));
  }

  const dayOfWeek = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const maleAkan = ["Kwame", "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi"];
  const femaleAkan = ["Ama", "Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afua"];


  let d = Math.floor((((4 * CC - 2) * (CC - 1)) + (45 * YY) + (1026 * (MM + 1)) + DD) % 7)
  if(d < 0){d += 7}

  function isValidDate(day, month, year) {
    // month is 1-indexed (1=Jan, 2=Feb) for this function
    const date = new Date(year, month - 1, day);

    // Check if components match after JS internal auto-correction
    return (
        date.getFullYear() === Number(year) &&
        date.getMonth() === month - 1 &&
        date.getDate() === Number(day)
    );
  }

  if (isValidDate(dateVal, monthVal, yearVal)) {
    if(genderVal === "Male") {
      let Name = maleAkan[d]
      Result.textContent = `Being a ${genderVal} born on ${dayOfWeek[d]} in the year ${yearVal}, your Akan name is ${Name}`
    } else {
      let Name = femaleAkan[d]
      Result.textContent = `Being a ${genderVal} born on ${dayOfWeek[d]} in the year ${yearVal}, your Akan name is ${Name}`
    };
  } else {
    alert("Invalid date: Please check the number of days for this month/year.");
  }


  
}
