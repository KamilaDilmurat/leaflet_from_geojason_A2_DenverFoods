var map = L.map('mapid').setView([39.75621,-104.99404], 10);

  // load a tile layer
 L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);


var geojsonFeature = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Restaurant": "US Thai Cafe",
        "Review": "5 Star"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.05405902862549,
          39.75294761046368
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurant": "Phonatic",
        "Review": "4.5 Star"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -104.98380661010742,
          39.740169615186986
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurant": "Taco Tequila Whiskey",
        "Review": "4 Star"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.03009080886841,
          39.761913064931434
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurant": "Yard House",
        "Review": "5 Star"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -104.98957335948944,
          39.74288792171743
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurant": "Mad Greens ",
        "Review": "4 Star"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -104.99256134033203,
          39.745667990772155
        ]
      }
    }
  ]
};
var marker1 = L.marker([39.753, -105.053]).addTo(Denverfood);
var marker2 = L.marker([39.741, -104.977]).addTo(Denverfood);
var marker3 = L.marker([39.762, -105.030]).addTo(Denverfood);


marker1.bindPopup("<b>Resturant 1</b><br>US Thai Cafe").openPopup();
marker2.bindPopup("<b>Resturant 2</b><br>Phở-natic").openPopup();
marker3.bindPopup("<b>Resturant 1</b><br>TACOS TEQUILA WHISKEY").openPopup();

//var feat = L.geoJSON(geojsonFeature).addTo(map);

//feat.bindPopup("<b>US Thai Cafe 1</b><br> best Thai food in town .").openPopup();
//feat.bindPopup("<b>Phonatic 2 </b><br> best Pho in town .").openPopup();
//feat.bindPopup("<b>Taco Tequila Whiskey 3</b><br> best Taco in town .").openPopup();
//feat.bindPopup("<b>Yard House  4 </b><br> best location in downtown .").openPopup();
//feat.bindPopup("<b>Mad Greens 5</b><br> Mark twain salad is my fav  .").openPopup()


