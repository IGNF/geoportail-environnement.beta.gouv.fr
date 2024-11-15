import GeoportailLayer from 'ol-ext/layer/Geoportail';
import LayerGroup from 'ol/layer/Group';

export const MAP_DEFAULT_LAYER_GROUP = new LayerGroup({
  properties: {
    title: 'Fonds de carte',
    group: 'base-layer'
  },
  layers: [
    new GeoportailLayer({
      properties: { title: 'Fond de carte IGN' },
      layer: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2',
      visible: true
    }),
    new GeoportailLayer({
      properties: { title: 'Cadastre' },
      minZoom: 14, // visible at zoom levels 14 and below
      layer: 'CADASTRALPARCELS.PARCELLAIRE_EXPRESS',
      visible: true
    }),
    new GeoportailLayer({
      properties: { title: 'Limites administratives' },
      layer: 'ADMINEXPRESS-COG-CARTO.LATEST',
      visible: false
    }),
    new GeoportailLayer({
      layer: 'ORTHOIMAGERY.ORTHOPHOTOS',
      visible: false
    })
  ]
});
