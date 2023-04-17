// Cacher les sections de bilan de CO2 par défaut
const vehicule = document.getElementById("vehicule");
vehicule.style.display = "none";
const maison = document.getElementById("maison");
maison.style.display = "none";
const biomasse = document.getElementById("biomasse");
biomasse.style.display = "none";

// Afficher la section sélectionnée
const choix = document.getElementById("choix");
choix.addEventListener("change", function() {
  vehicule.style.display = "none";
  maison.style.display = "none";
  biomasse.style.display = "none";
  const option = this.value;
  if (option === "vehicule") {
    vehicule.style.display = "flex";
  } else if (option === "maison") {
    maison.style.display = "flex";
  } else if (option === "biomasse") {
    biomasse.style.display = "flex";
  }
});
const calculerVehicule = document.getElementById("calculerVehicule");
const resultatVehicule = document.getElementById("resultatVehicule");

calculerVehicule.addEventListener("click", function() {
  const distance = document.getElementById("distance").value;
  const carburant = document.getElementById("carburant").value;
  let facteurEmission;
  switch (carburant) {
    case "essence":
      facteurEmission = 0,259;
      break;
    case "diesel":
      facteurEmission = 0,251;
      break;
    case "hybride":
      facteurEmission = 0.07;
      break;
    case "electrique":
      facteurEmission =  0.017;
      break;
    default:
      facteurEmission = 0;
      break;
  }
  const resultat = (distance * facteurEmission).toFixed(3);
  resultatVehicule.innerHTML = "Votre bilan CO2 est de " + resultat + " kgCO2";
  document.getElementById("distance").value = "";
  document.getElementById("carburant").value = "";
});

const calculerMaison = document.getElementById("calculerMaison");
const resultatMaison = document.getElementById("resultatMaison");

calculerMaison.addEventListener("click", function() {
  const consommation = document.getElementById("consommation").value;
  const facteurEmission = 0.15;
  const resultat = (consommation * facteurEmission).toFixed(3);
  resultatMaison.innerHTML = "Votre bilan CO2 est de " + resultat + " kgCO2";
  document.getElementById("consommation").value = "";
});

const calculerBiomasse = document.getElementById("calculerBiomasse");
const resultatBiomasse = document.getElementById("resultatBiomasse");

calculerBiomasse.addEventListener("click", function() {
  const quantite = document.getElementById("quantite").value;
  const facteurEmission = 0.03;
  const resultat = (quantite * facteurEmission).toFixed(3);
  resultatBiomasse.innerHTML = "Votre bilan CO2 est de " + resultat + " kgCO2";
  document.getElementById("quantite").value = "";
});
