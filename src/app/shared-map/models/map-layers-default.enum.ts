import GeoportailLayer from 'ol-ext/layer/Geoportail';

export const MAP_LAYERS_DEFAULT = [
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
];
