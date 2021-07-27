function isLeap(year) {
      
    if (year % 4 === 0) {

      if (year % 100 === 0) {

        if(year % 400 === 0) {
          leap();
        } else {
          notLeap();
        }
        
      } else {
        leap();
      }
    } else {
      notLeap();
    }

function leap() {
  alert("Leap year.")
}

function notLeap() {
  alert("Not leap year.")
}

}

var check = prompt("Which year would you like to check if it's a leap year?");

isLeap(check);
