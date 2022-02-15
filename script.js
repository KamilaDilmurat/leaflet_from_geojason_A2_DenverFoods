var Denverfood = L.map('Denverfood').setView([39.75621,-104.99404], 6);


// load a tile layer
 L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 10,
	maxZoom: 20,
	ext: 'png'
}).addTo(Denverfood);


var marker1 = L.marker([39.753, -105.053]).addTo(Denverfood);
var marker2 = L.marker([39.741, -104.977]).addTo(Denverfood);
var marker3 = L.marker([39.762, -105.030]).addTo(Denverfood);
var marker4 = L.marker([39.743, -104.990]).addTo(Denverfood);
var marker5 = L.marker([39.745, -104.992]).addTo(Denverfood);


marker1.bindPopup("<b>Resturant 1</b><br>US Thai Cafe").openPopup();
marker2.bindPopup("<b>Resturant 2</b><br>Phở-natic").openPopup();
marker3.bindPopup("<b>Resturant 3</b><br>TACOS TEQUILA WHISKEY").openPopup();
marker4.bindPopup("<b>Resturant 4</b><br>Yarh House").openPopup();
marker5.bindPopup("<b>Resturant 5</b><br>Mad Greens ").openPopup();
