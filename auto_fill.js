function autofill(){
  var total = document.querySelectorAll('.recipe').length

  for (i=0; i <= total; i++) {
    //generate random number between 1 and 4
    var min=1;
    var max=4;
    var random = Math.floor(Math.random() * (+max - +min)) + +min;

    //Fill recipe class with random recipe
    var num = i + 1;

    document.getElementByClassName('recipe:nth-of-type(' + num + ')').innerHTML = document.getElementByClassName('recipe' + random + ')').innerHTML;
  }
}

window.onload = autofill;
