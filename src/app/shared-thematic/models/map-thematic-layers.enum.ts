import TileLayer from 'ol/layer/Tile';
import { TileWMS } from 'ol/source';
import LayerGroup from 'ol/layer/Group';
import { THEMATIC_FICHE_LIST } from './thematic-fiche-list';

export const MAP_BIODIVERISTE_LAYER_GROUP = new LayerGroup({
  properties: {
    title: 'Biodiversité',
    group: 'biodiversite'
  },
  layers: [
    new TileLayer({
      properties: THEMATIC_FICHE_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'PROTECTEDAREAS.MNHN.CONSERVATOIRES:cen'),
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
          'LAYERS': 'PROTECTEDAREAS.MNHN.CONSERVATOIRES',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: THEMATIC_FICHE_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'PROTECTEDAREAS.MNHN.CDL.PARCELS:cdl'),
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
          'LAYERS': 'PROTECTEDAREAS.MNHN.CDL.PARCELS',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: THEMATIC_FICHE_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'PROTECTEDAREAS.MNHN.CDL.PARCELS:cdl'),
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
          'LAYERS': 'PROTECTEDAREAS.PNR',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: THEMATIC_FICHE_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'PROTECTEDAREAS.RNCF:rncfs'),
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
          'LAYERS': 'PROTECTEDAREAS.RNCF',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: THEMATIC_FICHE_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'PROTECTEDAREAS.RB:rb'),
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
          'LAYERS': 'PROTECTEDAREAS.RB',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: THEMATIC_FICHE_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'PROTECTEDAREAS.APLG:aplg'),
      extent: [
        -20037508.342789244,
        -44927335.42709704,
        20037508.342789244,
        44927335.42709663
      ],
      minZoom: 12,
      minResolution: 0,
      maxResolution: 156543.03392804097,
      source: new TileWMS({
        url: 'https://data.geopf.fr/wms-r/ows?',
        projection: 'EPSG:3857',
        attributions: [],
        crossOrigin: 'anonymous',
        params: {
          'LAYERS': 'PROTECTEDAREAS.APLG',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: THEMATIC_FICHE_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'PROTECTEDAREAS.MNHN.RN.PERIMETER:pprnn'),
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
          'LAYERS': 'PROTECTEDAREAS.MNHN.RN.PERIMETER',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: THEMATIC_FICHE_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'PROTECTEDSITES.MNHN.RESERVES-REGIONALES:rnr'),
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
          'LAYERS': 'PROTECTEDSITES.MNHN.RESERVES-REGIONALES',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: THEMATIC_FICHE_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'PROTECTEDAREAS.RNN:rnn'),
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
          'LAYERS': 'PROTECTEDAREAS.RN',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: THEMATIC_FICHE_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'PROTECTEDAREAS.RNC:rnc'),
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
          'LAYERS': 'PROTECTEDAREAS.RNC',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: THEMATIC_FICHE_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'PROTECTEDAREAS.APB:apb'),
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
          'LAYERS': 'PROTECTEDAREAS.APB',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: THEMATIC_FICHE_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'PROTECTEDAREAS.APHN:aphn'),
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
          'LAYERS': 'PROTECTEDAREAS.APHN',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: THEMATIC_FICHE_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'PROTECTEDAREAS.APG:apg'),
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
          'LAYERS': 'PROTECTEDAREAS.APG',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: THEMATIC_FICHE_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'PROTECTEDAREAS.PN:pn'),
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
          'LAYERS': 'PROTECTEDAREAS.PN',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: THEMATIC_FICHE_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'PROTECTEDAREAS.SIC:sic'),
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
      properties: THEMATIC_FICHE_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'PROTECTEDAREAS.ZPS:zps'),
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
      properties: THEMATIC_FICHE_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'PROTECTEDAREAS.ZNIEFF2:znieff2'),
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
      properties: THEMATIC_FICHE_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'PROTECTEDAREAS.ZNIEFF1:znieff1'),
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

export const MAP_PATRIMOINE_LAYER_GROUP = new LayerGroup({
  properties: {
    title: 'Patrimoine',
    group: 'patrimoine'
  },
  layers: [
    new TileLayer({
      properties: THEMATIC_FICHE_LIST.find((g) => g.name === 'patrimoine')?.layers?.find((l) => l.technicalName === 'wfs_sup:assiette_sup_s'),
      extent: [
        -20037508.342789244,
        -44927335.42709704,
        20037508.342789244,
        44927335.42709663
      ],
      minZoom: 11.5,
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
          'VERSION': '1.3.0',
          'cql_filter': "suptype = 'ac1' AND typeass = 'Périmètre des abords'"
        }
      })
    }),
    new TileLayer({
      properties: THEMATIC_FICHE_LIST.find((g) => g.name === 'patrimoine')?.layers?.find((l) => l.technicalName === 'wfs_du:prescription_surf'),
      extent: [
        -20037508.342789244,
        -44927335.42709704,
        20037508.342789244,
        44927335.42709663
      ],
      minZoom: 15.5,
      minResolution: 0,
      maxResolution: 156543.03392804097,
      source: new TileWMS({
        url: 'https://data.geopf.fr/wms-v/ows?',
        projection: 'EPSG:3857',
        attributions: [],
        crossOrigin: 'anonymous',
        params: {
          'LAYERS': 'prescription',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0',
          'cql_filter': "typepsc = '01' AND stypepsc IN ('00', 01, 02, 03)"
        }
      })
    }),
  ]
});
