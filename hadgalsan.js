window.onload = function() {
    var myArray = JSON.parse(localStorage.getItem('Array'));
    console.log(myArray);
    gebi("hadgalsan").insertAdjacentHTML("afterbegin",myArray);
    console.log("myyarray");
    removeAllButtons();
  };

const gebi = (id) => document.getElementById(id);
function removeAllButtons() {
    // Select all buttons using querySelectorAll
    var buttons = document.querySelectorAll('button');
  
    // Loop through and remove each button
    buttons.forEach(function(button) {
      button.remove();
    });
  }
  