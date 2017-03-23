# NYC (& the World) Without Highways

Ths is the code counterpart to the [map and webpage of the same name](http://bigboy.us/other/no-highways/), which allows anyone to easily create a highway-less map with [mapzen.js](https://github.com/mapzen/mapzen.js) and [tangram](https://github.com/tangrams/tangram).

### Usage

This isn't yet packaged as an fully-fledged npm module, but you should be able to import like so:

```json
{
  "name": "my-app",
  "dependencies": {
    "no-highways": "saranrapjs/no-highways",
  }
}
```

And use in requirejs-y code like so:

```javascript
var scene = require('no-highways');
var map = L.Mapzen.map('map', {
  center: [40.679625, -74.003938],
  zoom: 16,
  maxZoom: 20,
  tangramOptions: {
    scene: scene
  }
});
```

I've also included a standalone [demo.html](https://github.com/saranrapjs/no-highways/blob/master/demo.html), which requires replacing `replace-this-with-your-api-key` with a [free Mapzen API key](https://mapzen.com/developers/sign_in).

### Some notes on tagging

As it stands, my goal is to have this map filter out any OSM tag that corresponds to a road that can't reasonably be walked on or over, but OSM tags aren't always consistent. As such there are some highway types drawn by the Walkabout styles that may _look_ highway-ish, but practically are not. By way of example: we exclude `highway="trunk"`, but keep `highway="primary"`. The road I've been using as my guiding star here is [Flatbush Ave., in Brooklyn](http://www.openstreetmap.org/way/139919720) — it's tagged primary, but has pedestrian crossings. I'd be open to a more detailed criteria (maximum number of lanes?) if it seemed reasonable. Feel free to make a pull request!
