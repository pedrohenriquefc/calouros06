function geoFindMe() {
    const status = document.querySelector("#status");
    const mapLink = document.querySelector("#map-link");
    const lista = document.querySelector("#lista");

    mapLink.href = "";
    mapLink.textContent = "";

    function adicionaItem(value) {
        var novoItem = document.createElement("li");
        novoItem.textContent = value;
        lista.appendChild(novoItem);
    }

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        status.textContent = "";
        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        mapLink.textContent = `Latitude: ${latitude}, Longitude ${longitude}`;
        adicionaItem(mapLink.textContent);
    }

    function error() {
        status.textContent = "Unable to retrive your location";
    }

    if (!navigator.geolocation) {
        status.textContent = "Geolocation is not supported by your browser";
    } else {
        status.textContent = "Locating...";
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

document.querySelector("#find-me").addEventListener("click", geoFindMe);
