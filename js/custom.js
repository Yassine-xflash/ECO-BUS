
  $(function () {

    // MENU
    $('.nav-link').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });


    // AOS ANIMATION
    AOS.init({
      disable: 'mobile',
      duration: 800,
      anchorPlacement: 'center-bottom'
    });


    // SMOOTH SCROLL
    $(function() {
      $('.nav-link').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
          }, 1000);
            event.preventDefault();
      });
    });  


    // PROJECT SLIDE
    $('#project-slide').owlCarousel({
      loop: true,
      center: true,
      autoplayHoverPause: false,
      autoplay: true,
      margin: 30,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
          },
          768:{
              items:2,
          }
      }
    });

  });
  
  
  const form = document.querySelector('.contact-form');
const resultDiv = document.getElementById('result');
const busRoutes = {
  "5": ["Bab Jyaf","Gare de Fès","Dokkarat","Av. Karim","Av. Zineb","Av. El Marja"],
  "10": ["Av Egypt","Gare de Fès","Bab Guissa","Sidi Boujida"],
  "11": ["El Bateha","Bab Jyaf","Centre ville","Al-Atlas","Route de Sefrou","Av. Zohor"],
  "12": ["Place de Florence","Bab Ejdid","Bab Ftouh"],
  "13": ["Gare de Fès","Al-Atlas","Route d'Imouzzer","Faculté des sciences (FST)","Faculté de chariaa"],
  "14": ["Zouagha","Hay Tarik","Champ course","Tajmouati","Bab Jyaf"],
  "15": ["Place de Florence","Al-Atlas","Hay Al Adarissa","Route Ain chkef"],
  "16": [],
  "17": ["Al Jabarri","Al-Atlas","Hay Es-Saâda","Hay Adarissa","Route Ain chkef","Ain chkef"],
  "18": [],
  "19": ["Gare de Fès","Place de Florence","Bab Ejdid", "Rcif"],
  "20": ["Place de Florence", "Ben Debbab", "Ben Zakor", "Ben Slimane", "Dhar Lakhmis"],
  "21": [],
  "22": [],
  "23B": ["Mont Fleuri", "Av. Oran", "Av. Almanama", "Route de Sefrou", "Al-Atlas", "Agdal", "Bab Ejdid", "Bab Ftouh", "Bab Al khokha", "Sidi Boujida"],
  "24": [],
  "25": ["Hay Tarik", "La Fiat", "Massira", "Champ course", "Zouagha", "Bensouda",],
  "26": [],
  "27": [],
  "28": [],
  "29": ["Rcif", "Bab Ejdid", "Centre ville", "Al-Atlas", "Bourmana"],
  "30": [],
  "31": ["Faculté Dhar El Mehraz", "Route de Sefrou", "Faculté de chariaa", "Faculté de Médecine"],
  "32": [],
  "33": ["Gare de Fès", "Ben Debbab", "Ain Qadous", "Marjane Oud Fés", "Route Meknés", "Douyet", "Ain Allah"],
  "34": [],
  "35": [],
  "36": [],
  "37": [],
  "38": [],
  "39": ["Ben Debbab", "Ain Qadous",  "Marjane Oud Fés", "Route Meknés", "Bensouda", "Hay Ennassim", "Massira","Hay Assalam"],
  "40": [],
  "41": ["Café Almachariq", "Av. Zohor" ,"Narjiss" ,"Mont Fleuri" , "Marjane Sais", "Ain chkef", "Diamant vert", "Doha", "massira", "bensouda"],
  "42": ["Bab Jyaf", "Centre ville", "Al-Atlas", "Route d'Imouzzer", "Narjiss", "Faculté de Médecine"],
  "43": ["Gare de Fès", "Ain Allah"],
  "44": ["bouremana","Al-Atlas" , "Mont Fleuri" , "Marjane Sais" , "Wlad tiyeb" ,"Rond point airport", "Rond point signature" , "Royal golf" , "Ain chegag"],
  "45": ["Rcif", "Centre ville", "Hay Es-Saâda", "Hay Adarissa", "Hay Anass"]
  // Ajouter les autres bus avec leurs itinéraires ici
};

const departureSelect = document.querySelector('.wrapper .select-btn');
const destinationSelect = document.querySelector('.destination-wrapper .select-btn');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const depart = departureSelect.firstElementChild.innerText.toLowerCase();
  const destination = destinationSelect.firstElementChild.innerText.toLowerCase();
  
  function chercherBus(depart, destination) {
  let busList = [];
  for (const bus in busRoutes) {
    const itineraire = busRoutes[bus];
    if (itineraire.includes(depart) && itineraire.includes(destination)) {
      busList.push(bus);
    }
  }
  if (busList.length === 0) {
    return null;
  } else if (busList.length === 1) {
    return `Le bus convenable est le ${busList[0]}.`;
  } else {
    const busListStr = busList.join(', ');
    return `Les bus convenables sont : ${busListStr}.`;
  }
}
