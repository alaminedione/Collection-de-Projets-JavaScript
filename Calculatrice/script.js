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



//calculer
function calculer() {
  let expr = expression.textContent;
  try {
    let resultat = Function('"use strict";return (' + expr + ")")();
    champResultat.textContent = isNaN(resultat) ? "Erreur" : resultat;
  } catch (e) {
    champResultat.textContent = "Erreur";
  }
}

function factoriel(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function calculerFactoriel() {
  let nombre = parseInt(document.getElementById("nombre").value, 10);
  let resultat = factoriel(nombre);
  champResultatConversion.textContent = resultat;
}

function binaireTOdecimal() {
  let nombre = parseInt(document.getElementById("nombre").value, 2);
  champResultatConversion.textContent = nombre + " (10)";
}

function decimalTObinaire() {
  let nombre = parseInt(document.getElementById("nombre").value, 10);
  let resultat = nombre.toString(2);
  champResultatConversion.textContent = resultat + " (2)";
}

