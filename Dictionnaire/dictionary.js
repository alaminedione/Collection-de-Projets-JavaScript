const api = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let btn_chercher = document.querySelector(".barre-recherche  button");
let mot = document.querySelector(".barre-recherche input");
let entete_mot = document.querySelector(".entete h2");

function chercher() {
  entete_mot.innerHTML = mot.value;
  fetch(api + mot.value)
    .then((reponses) => {
      if (!reponses.ok) {
        alert("Erreur HTTP ");
        throw new Error("Erreur HTTP " + reponses.status);
      }
      return reponses.json();
    })
    .then((donnees) => {
      console.log(donnees);

      let paragraphe_nom_definition = document.getElementById("nom_definition");
      let paragraphe_nom_example = document.getElementById("nom_example");

      let paragraphe_verbe_definition =
        document.getElementById("verbe_definition");
      let paragraphe_verbe_example = document.getElementById("verbe_example");

      let paragraphe_adjectif_definition = document.getElementById(
        "adjectif_definition"
      );
      let paragraphe_adjectif_example =
        document.getElementById("adjectif_example");

      paragraphe_nom_definition.innerHTML = undefined;
      paragraphe_nom_example.innerHTML = undefined;

      paragraphe_verbe_definition.innerHTML = undefined;
      paragraphe_verbe_example.innerHTML = undefined;

      paragraphe_adjectif_definition.innerHTML = undefined;
      paragraphe_adjectif_example.innerHTML = undefined;

      paragraphe_nom_definition.innerHTML =
        donnees[0].meanings[0].definitions[0].definition;
      paragraphe_nom_example.innerHTML =
        donnees[0].meanings[0].definitions[0].example;

      paragraphe_verbe_definition.innerHTML =
        donnees[0].meanings[1].definitions[0].definition;
      paragraphe_verbe_example.innerHTML =
        donnees[0].meanings[1].definitions[0].example;

      paragraphe_adjectif_definition.innerHTML =
        donnees[0].meanings[2].definitions[0].definition;
      paragraphe_adjectif_example.innerHTML =
        donnees[0].meanings[2].definitions[0].example;
    });
}

btn_chercher.addEventListener("click", () => chercher());
//par defaut
mot.value = "nice";
chercher();
