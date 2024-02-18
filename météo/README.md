# Application Météo

Une application web simple et élégante pour afficher la météo actuelle, y compris la température, l'humidité, et la vitesse du vent pour n'importe quelle ville dans le monde. Ce projet utilise l'API d'[OpenWeatherMap](https://api.openweathermap.org) pour récupérer les données météorologiques en temps réel.

## Fonctionnalités

- **Affichage de la Température :** Montre la température actuelle dans la ville sélectionnée.
- **Icône Météorologique :** Affiche une icône représentative de la condition météorologique actuelle (par exemple, pluvieuse).
- **Humidité :** Indique le pourcentage d'humidité dans l'air.
- **Vitesse du Vent :** Affiche la vitesse du vent en kilomètres par heure.

## Comment Ça Marche

L'application fait des requêtes à l'API d'OpenWeatherMap pour obtenir les informations météorologiques basées sur le nom de la ville fournie par l'utilisateur. Les données incluent l'icône représentant les conditions météorologiques actuelles, la température, le pourcentage d'humidité, et la vitesse du vent.

## Prérequis

Pour utiliser cette application, vous aurez besoin d'une clé API valide d'OpenWeatherMap. Vous pouvez obtenir une clé gratuitement en vous inscrivant sur [leur site web](https://api.openweathermap.org).

## Installation

1. Clonez ce dépôt sur votre machine locale en utilisant :
   ```
   git clone https://github.com/alaminedione/js-projects-collection/tree/main/météo
   ```

2. Naviguez dans le répertoire du projet.

3. Ouvrez le fichier **script.js** et remplacez `"votre api"` par l'API que vous avez récupérée :
   ```javascript
   const apiKey = "votre_clé_api";
   ```

Assurez-vous de ne pas exposer votre clé API dans des dépôts publics pour éviter tout usage non autorisé.

## Contribution

Les contributions à ce projet sont les bienvenues. Si vous avez des suggestions d'amélioration ou des corrections, n'hésitez pas à créer une issue ou une pull request.

## image
![application météo](https://github.com/alaminedione/js-projects-collection/blob/main/m%C3%A9t%C3%A9o/m%C3%A9t%C3%A9o.png "application météo")

