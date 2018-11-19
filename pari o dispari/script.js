
function generatoreRandom(min, max) {

  return Math.floor(Math.random () * (max-min +1) +min );
}

function pariOdispari(n) {

  var pari = false;

  if (n %2==0) {
    var pari = true;
  }

  return pari;
}

var pari_dispari_utente=prompt("Scegli  pari o dispari?");
var numero_utente = parseInt(prompt("Scegli un numero tra 1 e 5"));

if (pari_dispari_utente === "pari") {
  var pari = true;

}
else if (pari_dispari_utente === "dispari"){
  var dispari = false;

}
else {
  document.writeln("errore");
}

var numero_cpu = generatoreRandom(1,5);

var somma = numero_utente+numero_cpu;

var sommacheck = pariOdispari(somma);

if (pari_dispari_utente==sommacheck) {
  alert("hai vinto");
}
else {
  alert("hai perso");
}

console.log(somma);
