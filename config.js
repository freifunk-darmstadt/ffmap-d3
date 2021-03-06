define("config", function () {
  /* after making any changes here enter "grunt" in your terminal to apply the changes */
  "use strict"

  var config = {
    // link to your main community site:
    url:       "http://darmstadt.freifunk.net",

    // visible link in the navigation:
    sitename:  "darmstadt.freifunk.net",

    // initial gravity, friction, of the graph at pageload:
    gravity:   0.05,
    friction:  0.73,
    theta:     0.8,
    charge:    1.0,
    distance:  1.0,
    strength:  1.0,

    // path to the nodes.json
    nodesJSON: "nodes.json",

    graph: {
      type: "rrd"
    },

    map: {
      layer: {
        url: "http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png",
        config: {
          subdomains: "abcd",
          type: "osm",
          attribution: "© <a href=\"http://osm.org/copyright\" target=\"_blank\">OpenStreetMap</a> contributors, Open Database License",
          opacity: 0.7,
          maxZoom: 19,
          maxNativeZoom: 18
        }
      }
    }
  }

  return config
})
