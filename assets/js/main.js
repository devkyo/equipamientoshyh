window.onscroll = () => {


  const header = document.querySelector('header')
  const sticky = header.offsetTop

  // console.log(sticky)
  // console.log(window.pageYOffset)

  if(window.pageYOffset >= 50){
    document.querySelector('.navbar-brand img').style.width = '150px'
    document.querySelector('.header').style.background= 'rgba(0,0,0,.8)'
  }else {
    document.querySelector('.navbar-brand img').style.width = '200px'
    document.querySelector('.header').style.background= 'transparent'
  }
}

$(document).ready( function() {
  const options = {
    strings: ['Resolvemos espacios, <br> Concretamos ideas.'],
    typeSpeed: 50,
    backSpeed: 20
  }
  
  const typed = new Typed('.typed',options)

  
})

$(document).ready( function() {
  const typednosotros = new Typed('.typed-nosotros',{
    strings: ['Sobre nosotros'],
    typeSpeed: 50,
    backSpeed: 20
  });
});



$(document).ready( function() {
  const typednosotros = new Typed('.typed-proyectos',{
    strings: ['Proyectos Ejecutados'],
    typeSpeed: 50,
    backSpeed: 20
  });
})

$(document).ready( function() {
  const typednosotros = new Typed('.typed-servicios',{
    strings: ['Todo para tu espacio'],
    typeSpeed: 50,
    backSpeed: 20
  });
})

$(document).ready( function() {
  const typedcontacto = new Typed('.typed-contacto',{
    strings: ['Contáctanos'],
    typeSpeed: 50,
    backSpeed: 20
  });
})



$('.grid').colcade({
  columns: '.grid-col',
  items: '.grid-item'
})

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();




var estilo = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
];

var centerCords = {
  lat: -9.189967,
  lng: -75.015152
};

var markersOnMap = [
  {
    LatLng: [{
      lat: -12.0463731,
      lng: -77.042754
    }],
    type: 'event'
  },
  {
    LatLng: [{
      lat: -15.9557884,
      lng: -74.0604125
    }],
    type: 'event'
  },
  {
    LatLng: [{
      lat: -12.111062,
      lng: -77.0315913
    }],
    type: 'event'
  }
]



function initMap() {
  
   // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {
          zoom: 5,
          center: new google.maps.LatLng(-12.0431805, -77.0282364),
          styles: estilo,
          mapTypeControl: false,
          zoomControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: false,
          gestureHandling: 'greedy'
      }
  );



    for(var i = 0; i < markersOnMap.length; i++){

      const market = new google.maps.Marker({
        position: markersOnMap[i].LatLng[0],
        // animation: google.maps.Animation.DROP,
        icon: '../assets/images/marker.png',
        map: map
      })

    }

  }


function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}


initMap()
// validate form 


// function validar(){
  jQuery('#form').validate({


    submitHandler: function(form){
      sendForm();
      // alert('enviando form');
    },
    errorPlacement: function(label, element) {
        label.addClass('form-error');
        label.insertAfter(element);
    },
    rules: {
      name: {
        required: true,
        minlength: 3
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        digits: true,
        minlength: 7
      },
      message: {
        required: true
      }
    },
    messages: {
      name: {
        required: 'Por favor ingrese su nombre',
        minlength: 'Por favor ingrese al menos 3 caracteres'
      },
      email: {
        required: 'Ingrese un correo electronico',
        email: 'Ingrese un correo valido'
      },
      phone: {
        required: 'Por favor ingrese su numero de telefono o celular',
        digits: 'Por favor ingrese solo numeros',
        minlength: 'Por favor ingrese un numero de telÃ©fono valido' 
      },
      message: {
        required: 'Por favor escriba un mensaje'
      }
    }

  });




  function sendForm(){
    var data = document.querySelector('#form');

    data.addEventListener('submit', function(e){
      e.preventDefault();

      var datos = new FormData(data);

      document.getElementById('response').innerHTML="<i class='fa fa-spinner fa-spin'></i> Enviando su mensaje...";

      fetch('send.php',{
          method: 'POST',
          body: datos
      })
      .then( (response)=> {
          if(response.ok){
            return response.text();
          }else {
            throw "Error en la peticion";
          }
      })
      .then( (texto)=> {
          console.log(texto);
          data.reset();
          document.getElementById('response').innerHTML=(texto);
      })
      .then( (error) => {
          // p.innerHTML(error);
          console.log(error);
      });
      
      

    });
  }
