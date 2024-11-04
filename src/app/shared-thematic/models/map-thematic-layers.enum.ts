import TileLayer from 'ol/layer/Tile';
import { TileWMS } from 'ol/source';

export const MAP_BIODIVERISTE_LAYERS = [
  // new TileLayer({
  //   properties: { title: 'Natura 2000 Habitats' },
  //   extent: [
  //     -20037508.342789244,
  //     -44927335.42709704,
  //     20037508.342789244,
  //     44927335.42709663
  //   ],
  //   minResolution: 0,
  //   maxResolution: 156543.03392804097,
  //   source: new TileWMS({
  //     url: 'https://data.geopf.fr/wms-r/ows?',
  //     projection: 'EPSG:3857',
  //     attributions: [],
  //     crossOrigin: 'anonymous',
  //     params: {
  //       'LAYERS': 'PROTECTEDAREAS.SIC',
  //       'FORMAT': 'image/png',
  //       'VERSION': '1.3.0'
  //     }
  //   })
  // }),
  new TileLayer({
    properties: { title: 'Natura 2000 Oiseaux' },
    extent: [
      -20037508.342789244,
      -44927335.42709704,
      20037508.342789244,
      44927335.42709663
    ],
    minResolution: 0,
    maxResolution: 156543.03392804097,
    source: new TileWMS({
      url: 'https://data.geopf.fr/wms-r/ows?',
      projection: 'EPSG:3857',
      attributions: [],
      crossOrigin: 'anonymous',
      params: {
        'LAYERS': 'PROTECTEDAREAS.ZPS',
        'FORMAT': 'image/png',
        'VERSION': '1.3.0'
      }
    })
  }),
  // new TileLayer({
  //   properties: { title: 'Prairies sensibles' },
  //   extent: [
  //     -20037508.342789244,
  //     -44927335.42709704,
  //     20037508.342789244,
  //     44927335.42709663
  //   ],
  //   minResolution: 0,
  //   maxResolution: 156543.03392804097,
  //   source: new TileWMS({
  //     url: 'https://data.geopf.fr/wms-r/ows?',
  //     projection: 'EPSG:3857',
  //     attributions: [],
  //     crossOrigin: 'anonymous',
  //     params: {
  //       'LAYERS': 'PRAIRIES.SENSIBLES.BCAE',
  //       'FORMAT': 'image/png',
  //       'VERSION': '1.3.0'
  //     }
  //   })
  // }),
  new TileLayer({
    properties: { title: 'ZNIEFF2' },
    extent: [
      -20037508.342789244,
      -44927335.42709704,
      20037508.342789244,
      44927335.42709663
    ],
    minResolution: 0,
    maxResolution: 156543.03392804097,
    source: new TileWMS({
      url: 'https://data.geopf.fr/wms-r/ows?',
      projection: 'EPSG:3857',
      attributions: [],
      crossOrigin: 'anonymous',
      params: {
        'LAYERS': 'PROTECTEDAREAS.ZNIEFF2',
        'FORMAT': 'image/png',
        'VERSION': '1.3.0'
      }
    })
  }),
  new TileLayer({
    properties: { title: 'ZNIEFF1' },
    extent: [
      -20037508.342789244,
      -44927335.42709704,
      20037508.342789244,
      44927335.42709663
    ],
    minResolution: 0,
    maxResolution: 156543.03392804097,
    source: new TileWMS({
      url: 'https://data.geopf.fr/wms-r/ows?',
      projection: 'EPSG:3857',
      attributions: [],
      crossOrigin: 'anonymous',
      params: {
        'LAYERS': 'PROTECTEDAREAS.ZNIEFF1',
        'FORMAT': 'image/png',
        'VERSION': '1.3.0'
      }
    })
  })
];

export const MAP_MONUMENTS_LAYERS = [
  new TileLayer({
    properties: { title: 'Monuments historiques' },
    extent: [
      -20037508.342789244,
      -44927335.42709704,
      20037508.342789244,
      44927335.42709663
    ],
    minResolution: 0,
    maxResolution: 156543.03392804097,
    source: new TileWMS({
      url: 'https://data.geopf.fr/wms-v/ows?',
      projection: 'EPSG:3857',
      attributions: [],
      crossOrigin: 'anonymous',
      params: {
        'LAYERS': 'monument_historique',
        'FORMAT': 'image/png',
        'VERSION': '1.3.0'
      }
    })
  })
];
