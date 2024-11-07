import GeoportailLayer from 'ol-ext/layer/Geoportail';
import LayerGroup from 'ol/layer/Group';

export const MAP_DEFAULT_LAYER_GROUP =
  new LayerGroup({
    
    properties: {
      title: 'Fonds de carte',
      group: 'base-layer'},
    layers: [
      new GeoportailLayer({
        layer: 'ORTHOIMAGERY.ORTHOPHOTOS',
        visible: false
      }),
      new GeoportailLayer({
        layer: 'ADMINEXPRESS-COG-CARTO.LATEST',
        visible: false
      }),
      new GeoportailLayer({
        layer: 'CADASTRALPARCELS.PARCELLAIRE_EXPRESS',
        visible: false
      }),
      new GeoportailLayer({
        layer: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2',
        visible: true
      })
    ]
  });
