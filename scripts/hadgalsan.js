window.onload = function() {
    // Your code here
    var myArray = JSON.parse(localStorage.getItem('Array'));
    console.log("myyarray");
    console.log(myArray);
    gebi("hadgalsan").insertAdjacentHTML("afterbegin",myArray);
    console.log("myyarray");
    removeAllButtons();
  };

const gebi = (id) => document.getElementById(id);


function removeAllButtons() {
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
      button.remove();
    });
  }
  