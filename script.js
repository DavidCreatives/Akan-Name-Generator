// DOM elements
const dateInput = document.getElementById("Date");
const monthInput = document.getElementById("Month");
const yearInput = document.getElementById("Year");
const gender = document.getElementById("Gender");
const Result = document.getElementById("ResultW");

function akanName(){
  const DD = Number(dateInput.value)
  const calcMonth = Number(monthInput.value)
  const year = Number(yearInput.value)
  const genderVal = gender.value;

  const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const maleAkan = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  const femaleAkan = ["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afua", "Ama"];

  let day = new Date(year, calcMonth - 1, DD);
  const d = day.getDay();

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


  if (isValidDate(DD, calcMonth, year)) {
    const index = d;
    if (String(genderVal).toLowerCase() === "male") {
      let Name = maleAkan[index]
      Result.textContent = `Being a ${genderVal} born on ${dayOfWeek[index]} in the year ${year}, your Akan name is ${Name}`
    } else {
      let Name = femaleAkan[index]
      Result.textContent = `Being a ${genderVal} born on ${dayOfWeek[index]} in the year ${year}, your Akan name is ${Name}`
    }
  } else {
    alert("Invalid date: Please check the number of days for this month/year.");
  }


  
}
