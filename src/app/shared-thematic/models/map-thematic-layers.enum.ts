import TileLayer from 'ol/layer/Tile';
import { TileWMS } from 'ol/source';
import LayerGroup from 'ol/layer/Group';

import { THEMATIC_LIST } from './thematic-list.enum';

export const MAP_BIODIVERISTE_LAYER_GROUP = new LayerGroup({
  properties: {
    title: 'Biodiversité',
    group: 'biodiversite'
  },
  layers: [
    new TileLayer({
      properties: THEMATIC_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'patrinat_cen:cen'),
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
          'LAYERS': 'Patrinat_CEN_France',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: THEMATIC_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'patrinat_cdl:conservatoire_littoral'),
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
          'LAYERS': 'Patrinat_CDL_France',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: THEMATIC_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'patrinat_pnr:pnr'),
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
          'LAYERS': 'Patrinat_PNR_France',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: THEMATIC_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'patrinat_rncfs:rncfs'),
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
          'LAYERS': 'Patrinat_RNCFS_France',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: THEMATIC_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'patrinat_rb:rb'),
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
          'LAYERS': 'Patrinat_RB_France',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: THEMATIC_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'patrinat_aplg:aplg'),
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
        url: 'https://data.geopf.fr/wms-v/ows?',
        projection: 'EPSG:3857',
        attributions: [],
        crossOrigin: 'anonymous',
        params: {
          'LAYERS': 'Patrinat_APLG_France',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: THEMATIC_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'patrinat_pprnn:pprnn'),
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
          'LAYERS': 'Patrinat_PPRNN_France',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: THEMATIC_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'patrinat_rnr:rnr'),
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
          'LAYERS': 'Patrinat_RNR_France',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: THEMATIC_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'patrinat_rnn:rnn'),
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
          'LAYERS': 'Patrinat_RNN_France',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: THEMATIC_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'patrinat_rnc:pnm'),
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
          'LAYERS': 'Patrinat_RNC_France',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: THEMATIC_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'patrinat_apb:apb'),
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
          'LAYERS': 'Patrinat_APB_France',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: THEMATIC_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'patrinat_aphn:aphn'),
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
          'LAYERS': 'Patrinat_APHN_France',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: THEMATIC_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'patrinat_apg:apg'),
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
          'LAYERS': 'Patrinat_APG_France',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: THEMATIC_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'patrinat_pn:parc_national' && l.title === 'Coeurs de parcs nationaux'),
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
          'LAYERS': 'Patrinat_Parc_national',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0',
          'cql_filter': "zone = 'Cœur'"
        },
      })
    }),
    new TileLayer({
      properties: THEMATIC_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'patrinat_pn:parc_national' && l.title === 'Zones d\'adhésion de parcs nationaux'),
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
          'LAYERS': 'Patrinat_Parc_national',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0',
          'cql_filter': "zone = 'Adhesion'"
        },
      })
    }),
    new TileLayer({
      properties: THEMATIC_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'patrinat_sic:sic'),
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
          'LAYERS': 'Patrinat_SIC_France',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        },
      })
    }),
    new TileLayer({
      properties: THEMATIC_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'patrinat_zps:zps'),
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
          'LAYERS': 'Patrinat_ZPS_France',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        }
      })
    }),
    new TileLayer({
      properties: THEMATIC_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'patrinat_znieff2:znieff2'),
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
          'LAYERS': 'Patrinat_ZNIEFF2_France',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0'
        }
      })
    }),
    new TileLayer({
      properties: THEMATIC_LIST.find((g) => g.name === 'biodiversite')?.layers?.find((l) => l.technicalName === 'patrinat_znieff1:znieff1'),
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
          'LAYERS': 'Patrinat_ZNIEFF1_France',
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
      properties: THEMATIC_LIST.find((g) => g.name === 'patrimoine')?.layers?.find((l) => l.technicalName === 'wfs_sup:assiette_sup_s' && l.title === 'Monuments historiques'),
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
      properties: THEMATIC_LIST.find((g) => g.name === 'patrimoine')?.layers?.find((l) => l.technicalName === 'wfs_sup:assiette_sup_s' && l.title === 'Sites inscrits et classés'),
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
          'LAYERS': 'monument_naturel_site',
          'FORMAT': 'image/png',
          'VERSION': '1.3.0',
          'cql_filter': "suptype = 'ac2'"
        }
      })
    }),
    new TileLayer({
      properties: THEMATIC_LIST.find((g) => g.name === 'patrimoine')?.layers?.find((l) => l.technicalName === 'wfs_du:prescription_surf'),
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
          'cql_filter': "typepsc = '01' AND stypepsc IN ('00', '01', '02', '03')"
        }
      })
    })
  ]
});