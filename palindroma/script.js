// Una funziona per capire se la parola è palindroma

function checkPalindrom(str) {

    return str == str.split('').reverse().join('');
//una volta inserita la parola la funzione ritornerà un risultato dato dalla divisione in lettere della
//parola (.split),lettura delle lettere al contrario (reverse),e scrittura delle stesse nel nuovo ordine(.join).
}

// chiedo all'utente di inserire una parola inserendo nel prompt il controllo per la parola
// palindroma elaborato all'interno della funzione.
var parola = checkPalindrom(prompt('inserisci la parola'));
console.log(parola);

if (parola == true) {
  document.writeln('la parola è palindroma');
}

else {
  document.writeln('la parola non è palindroma');
}
// a questo punto se la parola inserita è uguale alla parola elaborata nella funzione
// la parola risulterà palindroma, se diversa non sarà palindroma.
