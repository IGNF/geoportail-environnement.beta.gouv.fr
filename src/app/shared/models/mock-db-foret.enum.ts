export const MOCK_DB_FORETS = [
  {
    id: '646e3793415f259be58fb730',
    name: 'Zaminarteko borda',
    adresse: {
      commune: 'Ayherre',
      codePostal: 64240,
      lieudit: 'Zahara',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec gravida justo. Morbi ullamcorper ullamcorper eros, ac ultricies turpis gravida quis.',
    tags: ['Biodiversité', 'Patrimoine'],
    imgUrl: '/img/foret_placeholder.png',
    area: 23,
    createdAt: new Date(),
    updatedAt: new Date(),
    parcels: ['parcelle 1', 'parcelle 1bis'],
    geometry: {
      'type': 'FeatureCollection',
      'features': [{
        'type': 'Feature',
        'geometry': {
          'type': 'Polygon',
          'coordinates': [[[266519.3795145552, 6246211.478651401], [268220.1033939004, 6243517.073404348], [270379.4494429566, 6246039.495337759], [267379.2960827634, 6247625.563674676], [266519.3795145552, 6246211.478651401]]]
        }, 'properties': null
      }]
    }
  },
  {
    id: '646dd8cc415f259be58fb17b',
    name: 'Tombe-boucs',
    adresse: {
      commune: 'Laparade',
      codePostal: 64240,
      lieudit: 'D249, le plet',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec gravida justo. Morbi ullamcorper ullamcorper eros, ac ultricies turpis gravida quis.',
    tags: ['Patrimoine'],
    imgUrl: '/img/foret_placeholder.png',
    area: 2.8,
    createdAt: new Date(),
    updatedAt: new Date(),
    parcels: ['parcelle 2', 'parcelle 2bis'],
    geometry: {
      'type': 'FeatureCollection',
      'features': [{
        'type': 'Feature',
        'geometry': {
          'type': 'Polygon',
          'coordinates': [[[266519.3795145552, 6246211.478651401], [268220.1033939004, 6243517.073404348], [270379.4494429566, 6246039.495337759], [267379.2960827634, 6247625.563674676], [266519.3795145552, 6246211.478651401]]]
        }, 'properties': null
      }]
    }
  }
];
