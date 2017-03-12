// VARIABLES
var HTMLheaderName = '<h1 class="animatedTop fadeInDownBig" id="name">%data%</h1>';
var HTMLheaderRole = '<p class="animatedTop fadeInDownBig" id="role">%data%</p><hr>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item animated2a slideInDown"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item animated2b slideInDown"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item animated2c slideInDown"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item animated2d slideInDown"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic animated2d zoomIn">';
var HTMLwelcomeMsg = '<li class="welcome-message animated bounceInDown">%data%</li>';

var HTMLskillsStart = '<h3 id="skills-h3" class="animated3 bounceInDown">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
var HTMLskills = '<li class="flex-item animated4 bounceInDown"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry animated5 slideInLeft"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry animated6 slideInLeft"></div>';
var HTMLprojectTitle = '<a>%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img class="projectImage" src="%data%">';

var HTMLschoolStart = '<div class="education-entry animated7 slideInLeft"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button class="iButton btn btn-default animated8 fadeIn">Internationalize</button>';
var googleMap = '<div id="map" class="animated8 zoomIn"></div>';


//Link to my project
var pongTitle = '<a href="projects/Pong/Game.html">%data%</a>';

// Internationalize button code
$(document).ready(function() {
    $('button').click(function() {
        var $name = $('#name');
        var iName = inName($name.text()) || function() {};
        $name.html(iName);
    });
});

// Click Data

var clickLocations = [];

function logClicks(x, y) {
    clickLocations.push({
        x: x,
        y: y
    });
    console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});




var map; // declares a global map variable



function initializeMap() {

    var locations;

    var mapOptions = {
        disableDefaultUI: true
    };

    map = new google.maps.Map(document.querySelector('#map'), mapOptions);

    function locationFinder() {

        // initializes an empty array
        var locations = [];

        // adds the single location property from bio to the locations array
        locations.push(bio.contacts.location);

        education.schools.forEach(function(school) {
            locations.push(school.location);
        });

        work.jobs.forEach(function(job) {
            locations.push(job.location);
        });

        return locations;
    }

    function createMapMarker(placeData) {

        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.lat(); // latitude from the place service
        var lon = placeData.geometry.location.lng(); // longitude from the place service
        var name = placeData.formatted_address; // name of the place from the place service
        var bounds = window.mapBounds; // current boundaries of the map window

        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name
        });


        var infoWindow = new google.maps.InfoWindow({
            content: name
        });

        bounds.extend(new google.maps.LatLng(lat, lon));
        map.fitBounds(bounds);
        map.setCenter(bounds.getCenter());
    }

    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0]);
        }
    }

    function pinPoster(locations) {
        var service = new google.maps.places.PlacesService(map);
        locations.forEach(function(place) {
            var request = {
                query: place
            };

            service.textSearch(request, callback);
        });
    }

    window.mapBounds = new google.maps.LatLngBounds();
    locations = locationFinder();
    pinPoster(locations);

}

window.addEventListener('load', initializeMap);
window.addEventListener('resize', function(e) {
    map.fitBounds(mapBounds);
});
