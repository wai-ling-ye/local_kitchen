function autofill(){
  var total = document.getElementsByClassName('recipe').length;

  for (i=0; i <= total; i++) {
    //generate random number between 1 and 4
    var min=0;
    var max=4;
    var random = Math.floor(Math.random() * (+max - +min)) + +min;

    //Fill recipe class with random recipe
    var recipes = document.getElementsByClassName('recipe');
    var presets = document.getElementsByClassName('recipe_preset');

    recipes[i].innerHTML = presets[random].innerHTML;
  }
}

window.onload = autofill;
