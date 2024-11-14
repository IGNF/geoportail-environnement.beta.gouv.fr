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
        title: 'Terrains des conservatoires d\'espaces naturels',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.MNHN.CONSERVATOIRES:cen'
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
          'LAYERS': 'PROTECTEDAREAS.MNHN.CONSERVATOIRES',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: {
        title: 'Conservatoire du littoral - sites sous responsabilité du conservatoire',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.MNHN.CDL.PARCELS:cdl'
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
          'LAYERS': 'PROTECTEDAREAS.MNHN.CDL.PARCELS',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: {
        title: 'Parcs naturels régionaux',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.PNR:pnr'
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
          'LAYERS': 'PROTECTEDAREAS.PNR',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: {
        title: 'Réserves nationales de chasse et de faune sauvage',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.RNCF:rncfs'
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
          'LAYERS': 'PROTECTEDAREAS.RNCF',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: {
        title: 'Réserves Biologiques',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.RB:rb'
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
          'LAYERS': 'PROTECTEDAREAS.RB',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: {
        title: 'Arrêtés listes de sites d\'intérêt géologique',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.APLG:aplg'
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
          'LAYERS': 'PROTECTEDAREAS.APLG',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: {
        title: 'Périmètres de protection de réserves naturelles',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.MNHN.RN.PERIMETER:pprnn'
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
          'LAYERS': 'PROTECTEDAREAS.MNHN.RN.PERIMETER',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: {
        title: 'Réserves naturelles régionales',
        group: 'biodiversite',
        technicalName: 'PROTECTEDSITES.MNHN.RESERVES-REGIONALES:rnr'
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
          'LAYERS': 'PROTECTEDSITES.MNHN.RESERVES-REGIONALES',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: {
        title: 'Réserves naturelles nationales',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.RNN:rnn'
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
          'LAYERS': 'PROTECTEDAREAS.RN',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: {
        title: 'Réserves Naturelles de Corse',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.RNC:rnc'
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
          'LAYERS': 'PROTECTEDAREAS.RNC',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: {
        title: 'Biotopes d\'espèces protégées',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.APB:apb'
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
          'LAYERS': 'PROTECTEDAREAS.APB',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: {
        title: 'Arrêtés de protection d\'habitats naturels',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.APHN:aphn'
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
          'LAYERS': 'PROTECTEDAREAS.APHN',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: {
        title: 'Arrêtés de protection de géotope',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.APG:apg'
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
          'LAYERS': 'PROTECTEDAREAS.APG',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: {
        title: 'Parcs Nationaux',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.PN:pn'
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
          'LAYERS': 'PROTECTEDAREAS.PN',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
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
