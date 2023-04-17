
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
  
  
  // Tableau de données des itinéraires de bus avec leur départ, destination et type de bus
const busRoutes = [
  { depart: "A", destination: "B", busType: "A1" },
  { depart: "B", destination: "C", busType: "A2" },
  { depart: "C", destination: "D", busType: "B1" },
  { depart: "D", destination: "E", busType: "B2" },
  { depart: "E", destination: "F", busType: "C1" },
  { depart: "F", destination: "G", busType: "C2" },
];
const data = [
    {depart: 'A', destination: 'B', busType: 'Type 1'},
    {depart: 'B', destination: 'C', busType: 'Type 2'},
    {depart: 'C', destination: 'D', busType: 'Type 3'},
    {depart: 'D', destination: 'E', busType: 'Type 4'}
  ];

  const form = document.querySelector('.contact-form');
  const resultDiv = document.getElementById('result');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const depart = this.depart.value.toUpperCase();
    const destination = this.destination.value.toUpperCase();

    const busType = findBusType(data, depart, destination);

    if (busType) {
      resultDiv.innerHTML = `Le bus à prendre est de ${busType} type.`;
    } else {
      resultDiv.innerHTML = 'Le bus pour cet itinéraire n\'a pas été trouvé.';
    }
  });

  function findBusType(data, depart, destination) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].depart === depart && data[i].destination === destination) {
        return data[i].busType;
      }
    }
    return null;
  }


    

