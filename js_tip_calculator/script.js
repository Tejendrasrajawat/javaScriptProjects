
function calculateTip() {
    var billamt = document.getElementById("billamt").value;
    var serviceql = document.getElementById("serviceql").value;
    var peopleamt = document.getElementById("peopleamt").value;
  
    //validate input
    if (billamt === "" || serviceql == 0) {
      alert("Please enter values");
      return;
    }
    //Check to see if this input is empty or less than or equal to 1
    if (peopleamt === "" || peopleamt <= 1) {
      peopleamt = 1;
      document.getElementById("each").style.display = "none";
    } else {
      document.getElementById("each").style.display = "block";
    }
  
    //Calculate tip
    var total = (billamt * serviceql) / peopleamt;
    //round to two decimal places
    //total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    //total = total.toFixed(2);
    //Display the tip
    document.getElementById("totaltip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
  
  };
  
  //Hide the tip amount on load
  document.getElementById("totaltip").style.display = "none";
  document.getElementById("each").style.display = "none";
  
  //click to call function
  document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };