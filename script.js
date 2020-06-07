function checkForm(){

  var tel;

  tel = document.getElementsByName('tel').value;

  if(tel.length > 10 || tel.length < 1){
    text = "Erreur dans la saisie du téléphone";
  }

  document.getElementsByName('subInscription').innerHTML = text;
}
