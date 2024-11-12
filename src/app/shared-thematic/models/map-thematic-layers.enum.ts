import TileLayer from 'ol/layer/Tile';
import { TileWMS } from 'ol/source';
import LayerGroup from 'ol/layer/Group';

export const MAP_BIODIVERISTE_LAYER_GROUP = new LayerGroup({
  properties: {
    title: 'Biodiversité',
    group: 'biodiversite'
  },
  layers: [
    new TileLayer({
      properties: {
        title: 'Natura 2000 Habitats',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.SIC:sic'
      },
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
          'LAYERS': 'PROTECTEDAREAS.SIC',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: {
        title: 'Natura 2000 Oiseaux',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.ZPS:zps'
      },
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
    new TileLayer({
      properties: {
        title: 'Prairies sensibles',
        group: 'biodiversite',
        technicalName: 'PRAIRIES.SENSIBLES.BCAE:prairies_sensibles'
      },
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
          'LAYERS': 'PRAIRIES.SENSIBLES.BCAE',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        }
      })
    }),
    new TileLayer({
      properties: {
        title: 'ZNIEFF2',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.ZNIEFF2:znieff2'
      },
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
      properties: {
        title: 'ZNIEFF1',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.ZNIEFF1:znieff1'
      },
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
  ]
});

export const MAP_MONUMENTS_LAYER_GROUP = new LayerGroup({
  properties: {
    title: 'Monument Historique',
    group: 'monument-historique'
  },
  layers: [
    new TileLayer({
      properties: {
        title: 'Monuments historiques',
        group: 'monument-historique',
        technicalName: 'monument_historique'
      },
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
  ]
});
