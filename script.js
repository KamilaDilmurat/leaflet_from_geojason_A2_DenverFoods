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

var feat = L.geoJSON(geojsonFeature).addTo(map);

feat.bindPopup("<b>US Thai Cafe 1</b><br> best Thai food in town .").openPopup();

var myLines = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "RiverName": "PlateRiver"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -105.01648664474487,
            39.72875898305752
          ],
          [
            -105.0168514251709,
            39.729452090516034
          ],
          [
            -105.0169587135315,
            39.73093729731992
          ],
          [
            -105.01706600189208,
            39.73349507847657
          ],
          [
            -105.01710891723633,
            39.73582175180319
          ],
          [
            -105.01783847808838,
            39.73725731956961
          ],
          [
            -105.0182032585144,
            39.73831335033239
          ],
          [
            -105.0178599357605,
            39.73940236510908
          ],
          [
            -105.0171947479248,
            39.740986355883564
          ],
          [
            -105.01678705215454,
            39.74219082449962
          ],
          [
            -105.01577854156493,
            39.744781185675386
          ],
          [
            -105.01562833786011,
            39.745754608332554
          ],
          [
            -105.01579999923706,
            39.74644754489567
          ],
          [
            -105.01569271087646,
            39.747156972728575
          ]
        ]
      }
    }
  ]
};

var myStyle = {
    "color": "#ff7800",
    "weight": 2,
    "opacity": 0.65
};

L.geoJSON(myLines, {
    style: myStyle
}).addTo(map);

var states = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Name": "Crown HillPark",
        "Has lakes": "Yes "
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -105.109806060791,
              39.75484472209399
            ],
            [
              -105.08199691772461,
              39.75484472209399
            ],
            [
              -105.08199691772461,
              39.76117904674866
            ],
            [
              -105.109806060791,
              39.76117904674866
            ],
            [
              -105.109806060791,
              39.75484472209399
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Sloan's Lake Park ",
        "Has lakes": "Yes "
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -105.05298614501953,
              39.74428621972816
            ],
            [
              -105.0347900390625,
              39.74428621972816
            ],
            [
              -105.0347900390625,
              39.753129075575174
            ],
            [
              -105.05298614501953,
              39.753129075575174
            ],
            [
              -105.05298614501953,
              39.74428621972816
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "City Park",
        "Has lakes": "Yes "
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.95943069458008,
              39.74375825213213
            ],
            [
              -104.94089126586914,
              39.74375825213213
            ],
            [
              -104.94089126586914,
              39.754184863105365
            ],
            [
              -104.95943069458008,
              39.754184863105365
            ],
            [
              -104.95943069458008,
              39.74375825213213
            ]
          ]
        ]
      }
    }
  ]
};

L.geoJSON(states, {
    style: function(feature) {
        switch (feature.properties["Has lakes"]) {
            case 'Yes': return {color: "#C8C9C7"};
            case 'No':   return {color: "#003DA5"};
        }
    }
}).addTo(map);
