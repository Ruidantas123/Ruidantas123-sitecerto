
  function addMarkers() {
    var mapElement = document.getElementById("map");
    var mapWindow = mapElement.contentWindow;

    // Define os marcadores
    var locations = [
      { lat: 41.562688730853885, lng: -8.59987877520223, name: "Local 1" },
      { lat: 41.565, lng: -8.6, name: "Local 2" },
      { lat: 41.561, lng: -8.601, name: "Local 3" }
      // Adicione mais locais conforme necessário
    ];

    // Adiciona os marcadores ao mapa
    for (var i = 0; i < locations.length; i++) {
      var location = locations[i];
      var markerUrl = "https://maps.google.com/mapfiles/ms/icons/red-dot.png";

      var markerHTML =
        '<img src="' +
        markerUrl +
        '"> <b>' +
        location.name +
        "</b>";

      mapWindow.postMessage(
        {
          type: "addMarker",
          location: location,
          markerHTML: markerHTML,
        },
        "*"
      );
    }
  }

  // Espera até que o iframe seja carregado antes de adicionar os marcadores
  document.getElementById("map").addEventListener("load", addMarkers);
</script>