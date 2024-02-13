
const apiKey = "votre api ";// veuiller aller sur la site https://api.openweathermap.org pour avoir un api gratuit
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function verifierMeteo(city) {
  const reponse = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
  let data = await reponse.json();
  console.log(data);
  if (data.message == "city not found" || data.cod == "404") {
    document.querySelector(".ville").innerHTML = "ville invalide";
    document.querySelector(".temperature").innerHTML = "";
    document.querySelector(".humidite").innerHTML = "";
    document.querySelector(".vent").innerHTML = "";
    document.querySelector(".meteo-icon").src = "";
    return;
  }
  //mettre a jour les donnee
  document.querySelector(".ville").innerHTML = data.name;
  document.querySelector(".temperature").innerHTML = data.main.temp + "°C";
  document.querySelector(".humidite").innerHTML = data.main.humidity + "%";
  document.querySelector(".vent").innerHTML = data.wind.speed + "km/h";

  
  //charger les images selon les donnees de la meteo
  if (data.weather[0].main == "Clouds") {
    document.querySelector(".meteo-icon").src = "../images/clouds.png";
  } else if (data.weather[0].main == "Rain") {
    document.querySelector(".meteo-icon").src = "../images/rain.png";
  } else if (data.weather[0].main == "Drizzel") {
    document.querySelector(".meteo-icon").src = "../images/drizzel.png";
  } else if (data.weather[0].main == "Snow") {
    document.querySelector(".meteo-icon").src = "../images/snow.png";
  } else if (data.weather[0].main == "Mist") {
    document.querySelector(".meteo-icon").src = "../images/mist.png";
  } else if (data.weather[0].main == "Clear") {
    document.querySelector(".meteo-icon").src = "../images/clear.png";
  }
}

// la ville par defaut
verifierMeteo("Dakar");

function search() {
  let ville = document.querySelector(".search input").value;
  verifierMeteo(ville);
}

document.querySelector(".search button").addEventListener("click", function () {
  search();
});
