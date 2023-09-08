window.onload = function() {
    var myArray = JSON.parse(localStorage.getItem('Array'));
    showItems();
    console.log(myArray);
    gebi("hadgalsan").insertAdjacentHTML("afterbegin",myArray);
    console.log("myyarray");
    removeAllButtons();
  };

const gebi = (id) => document.getElementById(id);


function showItems(){
  var len = JSON.parse(localStorage.getItem('len'));

  gebi("cnt").textContent  = len;
}

function removeAllButtons() {
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
      button.remove();
    });
  }
  