
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
  "41": ["macharik", "marrane", "ein chkef", "diamant vert", "doha", "massira", "bensouda"],
  "42": ["bab sebta", "jbel aloum", "massira", "doha", "place ziri", "al inbiat"],
  "43": ["bab sebta", "jbel aloum", "massira", "doha", "place ziri", "hay salam", "yassmine"],
  // Ajouter les autres bus avec leurs itinéraires ici
};

const departureSelect = document.querySelector('.wrapper .select-btn');
const destinationSelect = document.querySelector('.destination-wrapper .select-btn');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const depart = departureSelect.firstElementChild.innerText.toLowerCase();
  const destination = destinationSelect.firstElementChild.innerText.toLowerCase();

  const bus = chercherBus(depart, destination);

  if (bus) {
    resultDiv.innerHTML = `Le bus convenable est le ${bus}.`;
  } else {
    resultDiv.innerHTML = 'Aucun bus convenable n\'a été trouvé.';
  }
});

function chercherBus(depart, destination) {
  for (const bus in busRoutes) {
    const itineraire = busRoutes[bus];
    const departIndex = itineraire.indexOf(depart);
    const destinationIndex = itineraire.indexOf(destination);
    if (departIndex !== -1 && destinationIndex !== -1 && departIndex < destinationIndex) {
      return bus;
    }
  }
  return null;
}
