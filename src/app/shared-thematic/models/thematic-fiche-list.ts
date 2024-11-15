import { FicheInfo } from "./fiche-info.model";

export const THEMATIC_FICHE_LIST = [
  new FicheInfo().deserialise({
    name: 'synthese',
    label: 'Synthèse',
    title: 'Synthèse',
    active: true
  }),
  new FicheInfo().deserialise({
    name: 'biodiversite',
    label: 'Biodiversité',
    title: 'Votre forêt se trouve sur les sites suivants',
    active: true,
    layers: [
      {
        title: 'Terrains des conservatoires d\'espaces naturels',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.MNHN.CONSERVATOIRES:cen'
      }, {
        title: 'Conservatoire du littoral - sites sous responsabilité du conservatoire',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.MNHN.CDL.PARCELS:cdl'
      }, {
        title: 'Parcs naturels régionaux',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.PNR:pnr'
      }, {
        title: 'Réserves nationales de chasse et de faune sauvage',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.RNCF:rncfs'
      }, {
        title: 'Réserves Biologiques',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.RB:rb'
      }, {
        title: 'Arrêtés listes de sites d\'intérêt géologique',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.APLG:aplg'
      }, {
        title: 'Périmètres de protection de réserves naturelles',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.MNHN.RN.PERIMETER:pprnn'
      }, {
        title: 'Réserves naturelles régionales',
        group: 'biodiversite',
        technicalName: 'PROTECTEDSITES.MNHN.RESERVES-REGIONALES:rnr'
      }, {
        title: 'Réserves naturelles nationales',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.RNN:rnn'
      }, {
        title: 'Réserves Naturelles de Corse',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.RNC:rnc'
      }, {
        title: 'Biotopes d\'espèces protégées',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.APB:apb'
      }, {
        title: 'Arrêtés de protection d\'habitats naturels',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.APHN:aphn'
      }, {
        title: 'Arrêtés de protection de géotope',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.APG:apg'
      }, {
        title: 'Parcs Nationaux',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.PN:pn'
      }, {
        title: 'Natura 2000 Habitats',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.SIC:sic'
      }, {
        title: 'Natura 2000 Oiseaux',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.ZPS:zps'
      }, {
        title: 'ZNIEFF2',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.ZNIEFF2:znieff2'
      }, {
        title: 'ZNIEFF1',
        group: 'biodiversite',
        technicalName: 'PROTECTEDAREAS.ZNIEFF1:znieff1'
      }
    ]
  }),
  new FicheInfo().deserialise({
    name: 'monument-historique',
    label: 'Monument Historique',
    title: 'Votre forêt se trouve dans la zone des monuments suivants',
    active: true,
    layers: []
  })
];
