export const MOCK_DB_FORETS = [
  {
    id: '646e3793415f259be58fb730',
    name: 'Château de Vincennes',
    adresse: {
      commune: 'Vincennes',
      codePostal: 94300,
      lieudit: 'Avenue Foch',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec gravida justo. Morbi ullamcorper ullamcorper eros, ac ultricies turpis gravida quis.',
    tags: ['Biodiversité', 'Patrimoine'],
    imgUrl: '/img/foret_placeholder.png',
    area: 23,
    createdAt: new Date(),
    updatedAt: new Date(),
    parcels: ['parcelle 1', 'parcelle 1bis'],
    geometry: {
      "type": "FeatureCollection",
      "features": [{
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [[[271710.98298573657, 6248744.317680173], [271674.0065733036, 6248495.754018818], [272510.08434331533, 6248312.926201789], [272347.7989776374, 6248577.923824225], [272345.7447325022, 6248721.720983686], [271710.98298573657, 6248744.317680173]]]
        },
        "properties": null
      }]
    }
  },
  {
    id: '646dd8cc415f259be58fb17b',
    name: 'Isola 2000',
    adresse: {
      commune: 'Isola',
      codePostal: '06420',
      lieudit: 'Tête de la Roubine',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec gravida justo. Morbi ullamcorper ullamcorper eros, ac ultricies turpis gravida quis.',
    tags: ['Biodiversité'],
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
          'coordinates': [[[797237.9170801531, 5492048.632956255], [797237.9170801531, 5491814.544557132], [797772.9762781494, 5491637.783929222], [797777.7535924172, 5491489.68718692], [797987.9554202014, 5491389.363587296], [798183.8253051823, 5491924.422785291], [798102.6109626292, 5492062.964899058], [797237.9170801531, 5492048.632956255]]]
        },
        'properties': null
      }]
    }
  }
];
