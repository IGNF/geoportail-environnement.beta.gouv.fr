import { Reglementation } from './reglementation.model';

export const REGLEMENTATION_LIST = [
  new Reglementation().deserialise({
    thematicName: 'Biodiversité',
    layerName: 'TODO',
    title: 'Sites Natura 2000 au titre de la Directive Habitats',
    description: '<p>Espace désigné à l\'échelle européenne pour  la rareté ou la fragilité des habitats et des espèces animales et végétales qu’il abrite.</p>',
    impactReglementaire: '<p>Les créations de voies forestières, de places de dépôt de bois et les premiers boisements sont susceptibles d\'être soumis à une évaluation des incidences.</p><p>Elle doit également être réalisée pour tous autres travaux (notamment les coupes), s\'ils sont soumis à une autorisation administrative.</p>',
    impactProcedure: '<p>L\'évaluation des incidences a pour but de déterminer si le projet peut avoir un impact significatif sur les habitats, les espèces végétales et les espèces animales ayant justifié la désignation du site Natura 2000. </p>',
    referenceUrl: 'https://www.natura2000.fr/',
    contact: 'Direction départementale des territoires'
  }),
  new Reglementation().deserialise({
    thematicName: 'Biodiversité',
    layerName: 'TODO',
    title: 'Sites Natura 2000 au titre de la Directive Habitats',
    description: '<p>Espace désigné à l\'échelle européenne pour  la rareté ou la fragilité des habitats et des espèces animales et végétales qu’il abrite.</p>',
    impactReglementaire: '<p>Les créations de voies forestières, de places de dépôt de bois et les premiers boisements sont susceptibles d\'être soumis à une évaluation des incidences.</p><p>Elle doit également être réalisée pour tous autres travaux (notamment les coupes), s\'ils sont soumis à une autorisation administrative.</p>',
    impactProcedure: '<p>L\'évaluation des incidences a pour but de déterminer si le projet peut avoir un impact significatif sur les habitats, les espèces végétales et les espèces animales ayant justifié la désignation du site Natura 2000. </p>',
    referenceUrl: 'https://www.natura2000.fr/',
    contact: 'Direction départementale des territoires'
  }),
];