function changeColor(color){
    document.body.style.backgroundColor = color;
}
function getGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  // Callback function to display geolocation
  function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    document.write("latitude:" +latitude);
    document.write("<br>");
    document.write("longitude:" + longitude);
    // console.log("Latitude: " + latitude);
    // console.log("Longitude: " + longitude);
  }

  // Function to get IP address
  function getIPAddress() {
    fetch('https://api.ipify.org/?format=json')
      .then(response => response.json())
      .then(data => {
        var ipAddress = data.ip;
        document.write("IP Address:" + ipAddress);
        // console.log("IP Address: " + ipAddress);
      })
      .catch(error => {
        console.log("Error fetching IP address: " + error);
      });
  }

  const suggestions = [
    "Apple",
    "Banana",
    "Cherry",
    "Grape",
    "Lemon",
    "Orange",
    "Peach",
    "Strawberry",
    "Watermelon"
  ];

  const searchInput = document.getElementById("searchInput");
  const suggestionList = document.getElementById("suggestionList");

  // Event listener for input changes
  searchInput.addEventListener("input", function() {
    const inputText = this.value;
    suggestionList.innerHTML = "";

    if (inputText.length > 0) {
      const matchingSuggestions = suggestions.filter(function(suggestion) {
        return suggestion.toLowerCase().startsWith(inputText.toLowerCase());
      });

      matchingSuggestions.forEach(function(suggestion) {
        const listItem = document.createElement("li");
        listItem.textContent = suggestion;
        listItem.addEventListener("click", function() {
          searchInput.value = suggestion;
          suggestionList.innerHTML = "";
        });
        suggestionList.appendChild(listItem);
      });
    }
  });
