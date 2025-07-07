import { Thematic } from "./thematic.model";

export const THEMATIC_LIST = [
  new Thematic().deserialise({
    name: 'synthese',
    label: 'Synthèse',
    title: 'Synthèse',
    active: true
  }),
  new Thematic().deserialise({
    name: 'biodiversite',
    label: 'Biodiversité',
    title: 'Le périmètre délimité est concerné par',
    active: true,
    layers: [
      {
        id: 'terrains-des-conservatoires-d-espaces-naturels',
        title: 'Terrains des conservatoires d\'espaces naturels',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.MNHN.CONSERVATOIRES:cen',
        name: 'cen'
      }, {
        id: 'conservatoire-du-littoral-sites-sous-responsabilite-du-conservatoire',
        title: 'Conservatoire du littoral - sites sous responsabilité du conservatoire',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.MNHN.CDL.PARCELS:cdl',
        name: 'cdl'
      }, {
        id: 'parcs-naturels-regionaux',
        title: 'Parcs naturels régionaux',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.PNR:pnr',
        name: 'pnr'
      }, {
        id: 'reserves-nationales-de-chasse-et-de-faune-sauvage',
        title: 'Réserves nationales de chasse et de faune sauvage',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.RNCF:rncfs',
        name: 'rncfs'
      }, {
        id: 'reserves-biologiques',
        title: 'Réserves Biologiques',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.RB:rb',
        name: 'rb'
      }, {
        id: 'arretes-listes-de-sites-d-interet-geologique',
        title: 'Arrêtés listes de sites d\'intérêt géologique',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.APLG:aplg',
        name: 'aplg'
      }, {
        id: 'perimetres-de-protection-de-reserves-naturelles',
        title: 'Périmètres de protection de réserves naturelles',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.MNHN.RN.PERIMETER:pprnn',
        name: 'pprnn'
      }, {
        id: 'reserves-naturelles-regionales',
        title: 'Réserves naturelles régionales',
        group: 'biodiversite',
        technicalName: 'PROTECTEDSITES.MNHN.RESERVES-REGIONALES:rnr',
        name: 'rnr'
      }, {
        id: 'reserves-naturelles-nationales',
        title: 'Réserves naturelles nationales',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.RNN:rnn',
        name: 'rnn'
      }, {
        id: 'reserves-naturelles-de-corse',
        title: 'Réserves Naturelles de Corse',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.RNC:rnc',
        name: 'rnc'
      }, {
        id: 'biotopes-d-especes-protegees',
        title: 'Biotopes d\'espèces protégées',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.APB:apb',
        name: 'apb'
      }, {
        id: 'arretes-de-protection-d-habitats-naturels',
        title: 'Arrêtés de protection d\'habitats naturels',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.APHN:aphn',
        name: 'aphn'
      }, {
        id: 'arretes-de-protection-de-geotope',
        title: 'Arrêtés de protection de géotope',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.APG:apg',
        name: 'apg'
      }, {
        id: 'coeurs-de-parcs-nationaux',
        title: 'Coeurs de parcs nationaux',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.PN:pn',
        name: 'pn',
        restrictions: [{ attribute: 'zone', value: 'Coeur' }]
      }, {
        id: 'zones-d-adhesion-de-parcs-nationaux',
        title: 'Zones d\'adhésion de parcs nationaux',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.PN:pn',
        name: 'pn',
        restrictions: [{ attribute: 'zone', value: 'Adhesion' }]
      }, {
        id: 'natura-deux-milles-habitats',
        title: 'Natura 2000 Habitats',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.SIC:sic',
        name: 'sic'
      }, {
        id: 'natura-deux-milles-oiseaux',
        title: 'Natura 2000 Oiseaux',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.ZPS:zps',
        name: 'zps'
      }, {
        id: 'znieff-deux',
        title: 'ZNIEFF2',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.ZNIEFF2:znieff2',
        name: 'znieff2'
      }, {
        id: 'znieff-un',
        title: 'ZNIEFF1',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.ZNIEFF1:znieff1',
        name: 'znieff1'
      }
    ]
  }),
  new Thematic().deserialise({
    name: 'patrimoine',
    label: 'Patrimoine',
    title: 'Le périmètre délimité est concerné par',
    active: true,
    layers: [
      {
        id: 'monuments-historiques',
        title: 'Monuments historiques',
        group: 'patrimoine',
        technicalName: 'wfs_sup:assiette_sup_s',
        name: 'assiette_sup_s',
        restrictions: [{ attribute: 'suptype', value: 'ac1' }]
      },
      {
        id: 'sites-inscrits-et-classes',
        title: 'Sites inscrits et classés',
        group: 'patrimoine',
        technicalName: 'wfs_sup:assiette_sup_s',
        name: 'assiette_sup_s',
        restrictions: [{ attribute: 'suptype', value: 'ac2' }]
      },
      {
        id: 'espaces-boises-classes',
        title: 'Espaces boisés classés',
        group: 'patrimoine',
        technicalName: 'wfs_du:prescription_surf',
        name: 'prescription_surf'
      }
    ]
  }),
  new Thematic().deserialise({
    name: 'autres',
    label: 'Autres',
    title: 'Le périmètre délimité est concerné par',
    active: true,
    layers: [
      {
        id: 'troncons_hydrographiques',
        title: 'Élément hydrographique - Cours d\'eau',
        group: 'autres',
        technicalName: 'BDTOPO_V3:troncon_hydrographique',
        name: 'troncon_hydrographique'
      },
    ]
  })
];
