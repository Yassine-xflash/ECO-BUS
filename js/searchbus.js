
const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInp = wrapper.querySelector("input"),
options = wrapper.querySelector(".options");

let countries = ["Âaouinate Hajjaj", "Agdal", "Ain Allah", "Ain chkf", "Ain chegag", "Ain Qadous", "Al Jabarri", "Al-Atlas", 
                    "Av Egypt", "Av. Almanama", "Av. Karim", "Av. Oran", "Av. Zohor", "Av; El Marja", "Av; Zineb", "Bab Al khokha", 
                    "Bab Bou Jeloud", "Bab Ejdid", "Bab Ftouh", "Bab Guissa", "Bab Jyaf", "Ben Debbab", "Ben Slimane", "Bensouda", 
                    "Bourmana", "Café Almachariq", "Centre ville", "Champ course", "Dhar Lakhmis", "Dokkarat", "Douyet", "Doha",
                    "El Bateha", "Faculté Dhar El Mehraz", "Faculté de chariaa", "Faculté de Médecine", "Faculté des sciences (FST)", 
                    "Gare de Fès", "Hay Adarissa", "Hay Al Adarissa", "Hay Anass", "Hay Benzakour", "Hay Ennassim", "Hay Es-Saâda", 
                    "Hay Lalla Soukaina", "Hay Tarik", "La Fiat", "Marjane Oud Fés", "Marjane Sais", "Massira", "Mont Fleuri", "Narjiss",
                    "Place de Florence", "Rcif", "Route d'Imouzzer", "Route de Sefrou", "Route Ouislane", "Route Meknés", "Rond point airport",
                    "Rond point signature", "Royal golf", "Sehb Elward", "Sidi Boujida", "Sidi Brahim", "Tajmou3ti", "Zouagha"
                ];

                const destinationWrapper = document.querySelector(".destination-wrapper"),
                destinationSelectBtn = destinationWrapper.querySelector(".select-btn"),
                destinationSearchInp = destinationWrapper.querySelector("input"),
                destinationOptions = destinationWrapper.querySelector(".options");
              
              function addDestination(selectedDestination) {
                destinationOptions.innerHTML = "";
                countries.forEach(destination => {
                  let isSelected = destination == selectedDestination ? "selected" : "";
                  let li = `<li onclick="updateDestination(this)" class="${isSelected}">${destination}</li>`;
                  destinationOptions.insertAdjacentHTML("beforeend", li);
                });
              }
              addDestination();
              
              function updateDestination(selectedLi) {
                destinationSearchInp.value = "";
                addDestination(selectedLi.innerText);
                destinationWrapper.classList.remove("active");
                destinationSelectBtn.firstElementChild.innerText = selectedLi.innerText;
              }
              
              destinationSearchInp.addEventListener("keyup", () => {
                let arr = [];
                let searchWord = destinationSearchInp.value.toLowerCase();
                arr = countries.filter(data => {
                  return data.toLowerCase().startsWith(searchWord);
                }).map(data => {
                  let isSelected = data == destinationSelectBtn.firstElementChild.innerText ? "selected" : "";
                  return `<li onclick="updateDestination(this)" class="${isSelected}">${data}</li>`;
                }).join("");
                destinationOptions.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! lieu introuvable</p>`;
              });
              
              destinationSelectBtn.addEventListener("click", () => destinationWrapper.classList.toggle("active"));
              
function addCountry(selectedCountry) {
    options.innerHTML = "";
    countries.forEach(country => {
        let isSelected = country == selectedCountry ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addCountry();

function updateName(selectedLi) {
    searchInp.value = "";
    addCountry(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! lieu introuvable</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));