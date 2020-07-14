function initMap() {
   var IAQR = {lat: 30.840484, lng: -96.518799};
   var IAQR2 = {lat: 30.840999, lng: -96.518799};

   var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: IAQR
   });

   var marker = new google.maps.Marker({ position: IAQR2, map: map });
}
