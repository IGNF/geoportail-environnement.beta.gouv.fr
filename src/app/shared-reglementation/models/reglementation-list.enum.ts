import { Reglementation } from './reglementation.model';

export const REGLEMENTATION_LIST = [
  new Reglementation().deserialise({
    thematicName: 'Biodiversité',
    layerName: 'Natura 2000 Habitats',
    title: 'Sites Natura 2000 au titre de la Directive Habitats',
    description: '<p>Espace désigné à l\'échelle européenne pour la rareté ou la fragilité des habitats et des espèces animales et végétales qu\'il abrite.</p>',
    impactReglementaire: '<p>Les créations de voies forestières, de places de dépôt de bois et les premiers boisements sont susceptibles d\'être soumis à une évaluation des incidences.</p><p>Elle doit également être réalisée pour tous autres travaux (notamment les coupes), s\'ils sont soumis à une autorisation administrative.</p>',
    impactProcedure: '<p>L\'évaluation des incidences a pour but de déterminer si le projet peut avoir un impact significatif sur les habitats, les espèces végétales et les espèces animales ayant justifié la désignation du site Natura 2000. </p>',
    referenceUrl: 'https://www.natura2000.fr/',
    contactReference: ['Direction départementale des territoires'],
    contactReferenceLayer: 'BDTOPO_V3:departement'
  }),
  new Reglementation().deserialise({
    thematicName: 'Biodiversité',
    layerName: 'Natura 2000 Oiseaux',
    title: 'Sites Natura 2000 au titre de la Directive Oiseaux',
    description: '<p>Espace désigné à l\'échelle européenne pour son intérêt dans la reproduction, de migration et d\'hivernage d\'espèces d\'oiseaux.</p>',
    impactReglementaire: '<p>Les créations de voies forestières, de places de dépôt de bois et les premiers boisements d\'une surface supérieure à 1 ha,  doivent faire l\'objet d\'une une évaluation des incidences.</p><p> Elle doit également être réalisée pour tous autres travaux (notamment les coupes), s\'ils sont soumis à une autorisation administrative.</p>',
    impactProcedure: '<p>L\'évaluation des incidences a pour but de déterminer si le projet peut avoir un impact significatif sur les habitats, les espèces végétales et les espèces animales ayant justifié la désignation du site Natura 2000. </p>',
    referenceUrl: 'https://www.natura2000.fr/',
    contactReference: ['Direction départementale des territoires'],
    contactReferenceLayer: 'BDTOPO_V3:departement'
  }),
  new Reglementation().deserialise({
    thematicName: 'Biodiversité',
    layerName: 'Coeurs de parcs nationaux',
    title: 'Coeurs de parcs nationaux',
    description: '<p>Un parc national est un territoire reconnu comme exceptionnel par la richesse de sa biodiversité, la qualité de ses paysages et de son patrimoine culturel. Le cœur bénéficie d\'un statut de protection.</p>',
    impactReglementaire: '<p>Une réglementation spécifique à chaque parc national, encadre la bonne pratique des activités humaines dans le cœur afin qu\'elles aient le moins d\'impacts possibles sur les milieux naturels et la biodiversité.</p>',
    impactProcedure: '<p>La circulation, les travaux, l\'exploitation forestière sont généralement règlementés. Avant toute intervention, consulter l\'équipe du parc national.</p>',
    referenceUrl: 'https://www.parcsnationaux.fr/fr/des-decouvertes/les-parcs-nationaux-de-france/reglementation-dans-les-parcs-nationaux-de-France',
    contactReference: ['Parc national'],
    contactReferenceLayer: ''
  }),
  new Reglementation().deserialise({
    thematicName: 'Biodiversité',
    layerName: 'Zones d\'adhésion de parcs nationaux',
    title: 'Zones d\'adhésion de parcs nationaux',
    description: '<p>Un parc national est un territoire reconnu comme exceptionnel par la richesse de sa biodiversité, la qualité de ses paysages et de son patrimoine culturel.</p>',
    impactReglementaire: '<p>Sauf décision locale particulière, cette zone du Parc national n\'est pas soumise à une réglementation environnementale particulière.</p>',
    impactProcedure: '<p>Ce zonage n\'implique pas de formalité particulière.</p>',
    referenceUrl: '',
    contactReference: [],
    contactReferenceLayer: ''
  }),
  new Reglementation().deserialise({
    thematicName: 'Biodiversité',
    layerName: 'Arrêtés de protection de géotope',
    title: 'Arrêtés de protection de géotope',
    description: '<p>Les arrêtés de protection de géotope visent à protéger des sites géologiques.</p>',
    impactReglementaire: '<p>Une règlementation spécifique à chaque espace est applicable.</p>',
    impactProcedure: '<p>La gestion forestière courante n\'est généralement pas impactée si elle ne porte pas atteinte aux éléments géologiques.</p>',
    referenceUrl: '',
    contactReference: ['Direction départementale des territoires'],
    contactReferenceLayer: 'BDTOPO_V3:departement'
  }),
  new Reglementation().deserialise({
    thematicName: 'Biodiversité',
    layerName: 'Arrêtés de protection d\'habitats naturels',
    title: 'Arrêtés de protection d\'habitats naturels',
    description: '<p>Les APHN sont des arrêtés visant à préserver des habitats naturels présentant un intérêt particulier à titre scientifique, de rôle essentiel dans l\'écosystème ou de la préservation du patrimoine naturel.</p>',
    impactReglementaire: '<p>Une règlementation spécifique à chaque espace est applicable.</p>',
    impactProcedure: '<p>Les activités forestières peuvent être règlementées. La présence d"habitats naturels patrimoniaux nécessite une grande prudence avant tous travaux ou exploitation.</p>',
    referenceUrl: '',
    contactReference: ['Direction départementale des territoires'],
    contactReferenceLayer: 'BDTOPO_V3:departement'
  }),
  new Reglementation().deserialise({
    thematicName: 'Biodiversité',
    layerName: 'Biotopes d\'espèces protégées',
    title: 'Arrêtés de protection de biotope',
    description: '<p>Les arrêtés de protection de biotope visent à protéger les habitats nécessaires à l\'alimentation, à la reproduction, au repos ou à la survie d\'espèces protégées. Il concernent souvent des milieux très remarqués, sur des surfaces limitées.</p>',
    impactReglementaire: '<p>Une règlementation spécifique à chaque espace est applicable.</p>',
    impactProcedure: '<p>Les activités forestières peuvent être règlementées. La présence probable d\'espèces protégées nécessite une grande prudence avant tous travaux ou exploitation.</p>',
    referenceUrl: '',
    contactReference: ['Direction départementale des territoires'],
    contactReferenceLayer: 'BDTOPO_V3:departement'
  }),
  new Reglementation().deserialise({
    thematicName: 'Biodiversité',
    layerName: 'Réserves Naturelles de Corse',
    title: 'Réserves naturelles de Corse',
    description: '<p>Une réserve naturelle est un site naturel fragile protégé par une réglementation adaptée et une gestion locale planifiée et concertée.</p>',
    impactReglementaire: '<p>Les travaux, la circulation et les activités forestières peuvent faire l\'objet d\'une règlementation, adaptée à chaque réserve.</p>',
    impactProcedure: '',
    referenceUrl: '',
    contactReference: ['Réserve naturelle de Corse'],
    contactReferenceLayer: ''
  }),
  new Reglementation().deserialise({
    thematicName: 'Biodiversité',
    layerName: 'Réserves naturelles nationales',
    title: 'Réserves naturelles nationales',
    description: '<p>Une réserve naturelle est un site naturel fragile protégé par une réglementation adaptée et une gestion locale planifiée et concertée.</p>',
    impactReglementaire: '<p>Les travaux, la circulation et les activités forestières peuvent faire l\'objet d\'une règlementation, adaptée à chaque réserve.</p>',
    impactProcedure: '',
    referenceUrl: '',
    contactReference: ['Réserve naturelle nationale'],
    contactReferenceLayer: ''
  }),
  new Reglementation().deserialise({
    thematicName: 'Biodiversité',
    layerName: 'Réserves naturelles régionales',
    title: 'Réserves naturelles régionales',
    description: '<p>Une réserve naturelle est un site naturel fragile protégé par une réglementation adaptée et une gestion locale planifiée et concertée.</p>',
    impactReglementaire: '<p>Les travaux, la circulation et les activités forestières peuvent faire l\'objet d\'une règlementation, adaptée à chaque réserve.</p>',
    impactProcedure: '',
    referenceUrl: '',
    contactReference: ['Réserve naturelle régionale'],
    contactReferenceLayer: ''
  }),
  new Reglementation().deserialise({
    thematicName: 'Biodiversité',
    layerName: 'Périmètres de protection de réserves naturelles',
    title: 'Périmètres de protection de réserves naturelles',
    description: '',
    impactReglementaire: '',
    impactProcedure: '',
    referenceUrl: '',
    contactReference: [],
    contactReferenceLayer: ''
  }),
  new Reglementation().deserialise({
    thematicName: 'Biodiversité',
    layerName: 'Arrêtés listes de sites d\'intérêt géologique',
    title: 'Arrêtés de listes de sites d\'intérêt géologique',
    description: '',
    impactReglementaire: '',
    impactProcedure: '',
    referenceUrl: '',
    contactReference: [],
    contactReferenceLayer: ''
  }),
  new Reglementation().deserialise({
    thematicName: 'Biodiversité',
    layerName: 'Réserves Biologiques',
    title: 'Réserves biologiques',
    description: '',
    impactReglementaire: '',
    impactProcedure: '',
    referenceUrl: '',
    contactReference: [],
    contactReferenceLayer: ''
  }),
  new Reglementation().deserialise({
    thematicName: 'Biodiversité',
    layerName: 'Réserves nationales de chasse et de faune sauvage',
    title: 'Réserves nationales de chasse et de faune sauvage',
    description: '',
    impactReglementaire: '',
    impactProcedure: '',
    referenceUrl: '',
    contactReference: [],
    contactReferenceLayer: ''
  }),
  new Reglementation().deserialise({
    thematicName: 'Biodiversité',
    layerName: 'Parcs naturels régionaux',
    title: 'Parcs naturels régionaux',
    description: '<p>Territoire créé pour protéger et mettre en valeur de grands espaces ruraux habités, notamment les  richesses naturelles, culturelles et humaines (traditions populaires, savoir-faire techniques).</p>',
    impactReglementaire: '<p>Le droit commun est le même dans le territoire du parc naturel régional qu\'ailleurs. Il n\'a pas d\'impact règlementaire spécifique pour les travaux forestiers.</p>',
    impactProcedure: '<p>Ce zonage n\'implique pas de formalité particulière.</p>',
    referenceUrl: '',
    contactReference: [],
    contactReferenceLayer: ''
  }),
  new Reglementation().deserialise({
    thematicName: 'Biodiversité',
    layerName: 'Conservatoire du littoral - sites sous responsabilité du conservatoire',
    title: 'Conservatoire du littoral - sites sous responsabilité du conservatoire',
    description: '',
    impactReglementaire: '',
    impactProcedure: '',
    referenceUrl: '',
    contactReference: [],
    contactReferenceLayer: ''
  }),
  new Reglementation().deserialise({
    thematicName: 'Biodiversité',
    layerName: 'Terrains des conservatoires d\'espaces naturels',
    title: 'Conservatoires d\'espaces naturels',
    description: '',
    impactReglementaire: '',
    impactProcedure: '',
    referenceUrl: '',
    contactReference: [],
    contactReferenceLayer: ''
  }),
  new Reglementation().deserialise({
    thematicName: 'Biodiversité',
    layerName: 'ZNIEFF1',
    title: 'Zones naturelles d\'interet ecologique faunistique et floristique (ZNIEFF) type I',
    description: '<p>Zone présentant une richesse biologique intéressante (faune et flore), reconnue d\'un grand intérêt pour le fonctionnement biologique local.</p>',
    impactReglementaire: '<p>Inventaire informatif ne générant pas de contraintes règlementaires. Cependant ce zonage traduit la possible présence d\'espèces animales et végétales remarquables pouvant faire l\'objet d\'un dispositif de protection.</p>',
    impactProcedure: '<p>A prendre en compte lors de la planification de la gestion ou en cas de réalisation de travaux, notamment si le terrain présente des milieux spécifiques comme des tourbières, des mares, des cours d\'eau etc.</p>',
    referenceUrl: '',
    contactReference: [],
    contactReferenceLayer: ''
  }),
  new Reglementation().deserialise({
    thematicName: 'Biodiversité',
    layerName: 'ZNIEFF2',
    title: 'Zones naturelles d\'interet ecologique faunistique et floristique (ZNIEFF) type II',
    description: '<p>Zone présentant des ensembles naturels et paysagers avec une cohésion élevée et plus riches que les milieux alentours.</p>',
    impactReglementaire: '<p>Inventaire informatif ne générant pas de contraintes règlementaires. Cependant ce zonage traduit la possible présence d\'espèces animales et végétales remarquables pouvant faire l\'objet d\'un dispositif de protection.</p>',
    impactProcedure: '<p>A prendre en compte lors de la planification de la gestion ou en cas de réalisation de travaux, notamment si le terrain présente des milieux spécifiques comme des tourbières, des mares, des cours d\'eau etc.</p>',
    referenceUrl: '',
    contactReference: [],
    contactReferenceLayer: ''
  }),
  new Reglementation().deserialise({
    thematicName: 'Patrimoine',
    layerName: 'Monuments historiques',
    title: 'Protection des abords des monuments historiques ( Périmètre délimité des abords ou abords de 500m)',
    description: '<p>Un monument historique est un immeuble protégé pour son intérêt protégé ou dont la préservation présente un intérêt du point de vue de l\'architecture ou de l\'histoire . Aux abords de ce monument, un périmètre de protecion est destiné à garantir le caractère paysager des abords.</p>',
    impactReglementaire: '<p>Les travaux susceptibles de modifier le paysage aux abords des monuments historiques sont sous à autorisation. C\'est le cas notamment des coupes ou des créations de voiries forestière.</p>',
    impactProcedure: '<p>Si les travaux se situent également en site classé ou nécessitent une autre autorisation (se rapprocher de la DDT), l\'architecte des bâtiments de France sera consulté par le service qui instruira l\'autorisation.</p><p> Sinon, une demande d\'autorisation est à déposer en mairie. Il ets recommandé de contacter auparant l\'UDAP pour avoir son avis.</p>',
    referenceUrl: '',
    contactReference: ['UDAP'],
    contactReferenceLayer: 'BDTOPO_V3:departement'
  }),
  new Reglementation().deserialise({
    thematicName: 'Patrimoine',
    layerName: 'Sites inscrits et classés',
    title: 'Sites inscrits et classés',
    description: '<p> Les sites inscrits sont des sites présentant un intérêt général, notamment du point de vue artistique, historique, scientifique,légendaire ou pittoresque.</p><p> Les sites classés sont des sites remarquables, dans lesquels le caractère paysager est rigoureusement protégé.</p>',
    impactReglementaire: '<p> Pour les sites inscrits, les travaux   modifiant l\'aspect du site, notamment les coupes ou les créations de desserte, doivent faire l\'objet d\'une déclaration préalable.</p><p> Pour les sites classés, les travaux modifiant l\'aspect du site, notamment les coupes ou les créations de desserte, doivent faire l\'objet d\'une autorisation spéciale.</p>',
    impactProcedure: '<p>Pour les sites inscrits, une déclaration est à faire 4 mois au moins avant les travaux auprès de l\'unité départementale de l\'architecture et du patrimoine.</p><p> Pour les sites classés, il est recommandé de prendre contact au préalable avec l\'architecte des bâtiments de France pour faciliter la procédure.</p>',
    referenceUrl: '',
    contactReference: ['UDAP', 'Direction départementale des territoires'],
    contactReferenceLayer: 'BDTOPO_V3:departement'
  }),
  new Reglementation().deserialise({
    thematicName: 'Patrimoine',
    layerName: 'Sites inscrits et classés',
    title: 'Sites inscrits et classés',
    description: '<p> Les sites inscrits sont des sites présentant un intérêt général, notamment du point de vue artistique, historique, scientifique,légendaire ou pittoresque.</p><p> Les sites classés sont des sites remarquables, dans lesquels le caractère paysager est rigoureusement protégé.</p>',
    impactReglementaire: '<p> Pour les sites inscrits, les travaux   modifiant l\'aspect du site, notamment les coupes ou les créations de desserte, doivent faire l\'objet d\'une déclaration préalable.</p><p> Pour les sites classés, les travaux modifiant l\'aspect du site, notamment les coupes ou les créations de desserte, doivent faire l\'objet d\'une autorisation spéciale.</p>',
    impactProcedure: '<p>Pour les sites inscrits, une déclaration est à faire 4 mois au moins avant les travaux auprès de l\'unité départementale de l\'architecture et du patrimoine.</p><p> Pour les sites classés, il est recommandé de prendre contact au préalable avec l\'architecte des bâtiments de France pour faciliter la procédure.</p>',
    referenceUrl: '',
    contact: 'Pour les sites inscrits, Direction départementale des territoires. Pour les sites classés, UDAP du département'
  }),
  new Reglementation().deserialise({
    thematicName: 'Patrimoine',
    layerName: 'Espaces boisés classés',
    title: 'Espaces boisés classés au PLU au titre du  L.113-1 CU',
    description: '<p>Les espaces boisés classés  à conserver, à protéger ou à créer sont définis dans le plan local d\'urbanisme de la commune. Ils sont destinés à maintenir le paysage, réaliser des coulées vertes, protéger contre les risques naturels etc. </p>',
    impactReglementaire: '<p>Les terrains ne peuvent changer d\'affectation : ils doivent rester forestier. Il ne peut donc y avoir de défrichement. Les coupes qui ne sont pas prévues dans un plan simple de gestion doivent faire l\'objet d\'une déclaration préalable.</p>',
    impactProcedure: '<p>La déclaration de coupe est à envoyer en mairie du lieu de la coupe, à l\'aide du formulaire Cerfa n° 13404 en cochant "Coupe et abattage d\'arbres" en page 4.</p>',
    referenceUrl: 'https://www.service-public.fr/particuliers/vosdroits/R11646',
    contactReference: ['Mairie'],
    contactReferenceLayer: 'BDTOPO_V3:commune'
  }),
  new Reglementation().deserialise({
    thematicName: 'Autres',
    layerName: 'Élément hydrographique - Cours d\'eau',
    title: 'Élément hydrographique - Cours d\'eau',
    description: '<p>La base de données cartographiques de l\'IGN mentionne la présence d\'un ou de plusieurs tronçons hydrographiques pouvant avoir les caractéristiques d\'un cours d\'eau. </p>',
    impactReglementaire: '<p>Lors de l\'exploitation forestière, il faut éviter de franchir les cours d\'eau, au risque de dégrader le lit et les berges, de nuire aux espèces ou d\'engendrer des pollutions aux hydrocarbures.</p>',
    impactProcedure: '<p>Si jamais un franchissement est nécessaire, il faut réaliser au préalable une procédure de déclaration ou d\'autorisation ; et ce quel que le dispositif envisagé soit temporaire (pont de rondins, tubes PEHD, etc.) ou permanent (busages, arches métalliques, ponceau, gué enroché)</p><p>Toutes les installations, ouvrages ou travaux conduisant à modifier le profil du lit d\'un cours d\'eau et les berges sont également soumis à une procédure préalable.</p><p>Contacter la direction départementale des territoires avant toute exploitation ou réalisation de travaux.</p>',
    referenceUrl: '',
    contactReference: ['Direction départementale des territoires'],
    contactReferenceLayer: 'BDTOPO_V3:departement'
  })
];