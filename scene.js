(function (root, factory) {
	if (typeof module === 'object' && module.exports) {
		module.exports = factory();
	} else if (typeof L === 'object' && typeof L.Mapzen === 'object') {
		L.Mapzen.NoHighways = factory();
	} else {
		root.NoHighways = factory();
	}
}(this, function () {
	return {
		import: 'https://mapzen.com/carto/walkabout-style/4/walkabout-style.zip',
		global: {
			sdk_path_overlay: false,
			sdk_bike_overlay: true,
			sdk_road_shields: false,
			text_visible_trunk_primary: false,
			text_visible_trunk_primary_e2: false,
		},
		layers: {
			roads: {
				filter: {
					// here we extend the base "roads" filtering rules, to capture some
					// road types that are not explicitly targeted elsewhere
					not: [
						{ kind: "rail" },
						{ kind_detail: "trunk" },
						{ kind_detail: "trunk_link" }
					]
				},
				highway: {
					visible: false
				},
				// one-way directional arrows must go as well!
				arrows: {
					filter: {
						none: [{kind:"highway"},{kind:"motorway"}]
					}
				},
				// exit numbers
				'highway-exit': {
					visible: false
				},
				major_road: {
					filter: {
						kind: "major_road",
						not: function() {
							return feature.kind_detail === "primary" && feature.shield_text;
						},
					},
					trunk_primary: {
						// this leaves *most* crossable primary roads, trying to exclude
						// roads with shield text aka highway-like roads?
						filter: function() {
							return feature.kind_detail === "primary" && !feature.shield_text;
						}
					}
				}
			},
			pois: {
				'highway-exit': {
					visible: false
				}
			},
			'highway-exit': {
				visible: false
			}
		}
	};
}));
