let expression = document.getElementById("expression");
let champResultat = document.getElementById("resultat");
let divVisible = document.getElementById('Visible');


let champResultatConversion = document.getElementById('resultat-conversion');


function afficheElement(valeur) {

    if (valeur === '√') {
    divVisible.innerHTML += valeur + '(';
    expression.innerHTML += 'Math.sqrt(';
  }
    else if (valeur === 'Math.exp(') {
    divVisible.innerHTML += 'e(';
    expression.innerHTML += valeur;

  }
    else if (valeur === 'Math.cos(') {
    divVisible.innerHTML += 'cos(';
    expression.innerHTML += valeur;

  }
    else if (valeur === 'Math.sin(') {
    divVisible.innerHTML += 'sin(';
    expression.innerHTML += valeur;

  }
    else if (valeur === 'Math.tan(') {
    divVisible.innerHTML += 'tan(';
    expression.innerHTML += valeur;

  }
    else if (valeur === 'Math.log(') {
    divVisible.innerHTML += 'log(';
    expression.innerHTML += valeur;

  }
    else if (valeur === 'Math.PI') {
    divVisible.innerHTML += '&#x3C0;';
    expression.innerHTML += valeur;
  }
  else {
    divVisible.innerHTML += valeur;
    expression.innerHTML += valeur;
  }
}




function effacerExpression() {

  divVisible.textContent = "";
  expression.textContent = "";
  champResultat.textContent = "0";
  champResultatConversion.textContent = "0";

  document.getElementById('nombre').value = "0";

}



function calculer() {

  let resultat = eval(expression.textContent);

  if (isNaN(resultat)) {
    champResultat.textContent = 'Erreur';
  } else
    champResultat.textContent = resultat;
}



function factoriel(n) {                 // !5= 5*4*3*2*1
  let i, f = 1;
  if (n == 0 || n == 1) {
    return 1;
  } else {
    for (i = 1; i <= n; i++) {
      f *= i;
    }
    return f;
  }
}



function calculerFactoriel() {

  let nombre = document.getElementById('nombre').value;
  let resultat = factoriel(nombre);

  champResultatConversion.textContent = resultat;
}



function binaireTOdecimal() {

  let nombre = document.getElementById('nombre').value;
  nombre = parseInt(nombre, 2);

  champResultatConversion.innerHTML = nombre + '<sub>(10)</bin>';
}



function decimalTObinaire() {

  let nombre = document.getElementById('nombre').value;
  nombre = parseInt(nombre);
  nombre = nombre.toString(2);

  champResultatConversion.innerHTML = nombre + '<sub>(2)</bin>';
}
