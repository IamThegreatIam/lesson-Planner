
import { GradeCurriculum } from '../types';

export const INTEGRATED_SCIENCE_CURRICULUM: GradeCurriculum[] = [
  {
    id: 'grade-7',
    name: 'Grade 7',
    strands: [
      {
        id: 'scientific-investigation',
        name: 'Scientific Investigation',
        subStrands: [
          {
            id: 'intro',
            name: 'Introduction to Integrated Science',
            lessons: [
              { id: 'sc-1', name: 'Components of Integrated Science' },
              { id: 'sc-2', name: 'Pathways related to Integrated Science' },
              { id: 'sc-3', name: 'Career opportunities in Integrated Science' },
              { id: 'sc-4', name: 'Importance of Integrated Science' }
            ]
          },
          {
            id: 'lab-safety',
            name: 'Laboratory Safety',
            lessons: [
              { id: 'ls-1', name: 'Common hazards in the laboratory' },
              { id: 'ls-2', name: 'Common hazard symbols' },
              { id: 'ls-3', name: 'Common laboratory accidents' },
              { id: 'ls-4', name: 'First Aid for cuts' },
              { id: 'ls-5', name: 'First Aid for burns and scalds' },
              { id: 'ls-6', name: 'First Aid for ingesting harmful substances' },
              { id: 'ls-7', name: 'Importance of safety measures' }
            ]
          },
          {
            id: 'basic-skills',
            name: 'Basic Science Skills',
            lessons: [
              { id: 'bs-1', name: 'Identifying basic skills in Science' },
              { id: 'bs-2', name: 'Application of skills in solving problems' },
              { id: 'bs-3', name: 'Importance of basic skills' },
              { id: 'bs-4', name: 'International System of Units (SI)' },
              { id: 'bs-5', name: 'Using SI units to record measurements' },
              { id: 'bs-6', name: 'Derived SI units for Area' },
              { id: 'bs-7', name: 'Derived SI units for Volume' },
              { id: 'bs-8', name: 'Derived units for Density' },
              { id: 'bs-9', name: 'Importance of packaging labels' }
            ]
          },
          {
            id: 'lab-apparatus',
            name: 'Laboratory Apparatus and Instruments',
            lessons: [
              { id: 'la-1', name: 'Identifying laboratory apparatus' },
              { id: 'la-2', name: 'Grouping apparatus and instruments' },
              { id: 'la-3', name: 'Parts of a Light Microscope' },
              { id: 'la-4', name: 'Functions of a Light Microscope' },
              { id: 'la-5', name: 'Handling and use of Light Microscope' },
              { id: 'la-6', name: 'Using a Light Microscope (Observation)' },
              { id: 'la-7', name: 'Using a Light Microscope (Experiment)' },
              { id: 'la-8', name: 'Heating apparatus and instruments' },
              { id: 'la-9', name: 'Parts and functions of Bunsen Burner' },
              { id: 'la-10', name: 'Handling and care of apparatus' },
              { id: 'la-11', name: 'Consumer protection when handling apparatus' }
            ]
          }
        ]
      },
      {
        id: 'mixtures',
        name: 'Mixtures, Elements and Compounds',
        subStrands: [
          {
            id: 'mixtures-types',
            name: 'Mixtures',
            lessons: [
              { id: 'mx-1', name: 'Classifying different types of mixtures' },
              { id: 'mx-2', name: 'Homogenous vs Heterogeneous mixtures' },
              { id: 'mx-3', name: 'Pure vs Impure water (Boiling)' },
              { id: 'mx-4', name: 'Pure vs Impure substances (Melting - Video)' },
              { id: 'mx-5', name: 'Pure vs Impure substances (Melting - Experiment)' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'grade-8',
    name: 'Grade 8',
    strands: [
      {
        id: 'mixtures-elements',
        name: 'Mixtures, Elements and Compounds',
        subStrands: [
          {
            id: 'elements-compounds',
            name: 'Elements and Compounds',
            lessons: [
              { id: 'ec-1', name: 'Relationship between atom, element, compound, molecule' },
              { id: 'ec-2', name: 'Relating common elements and their symbols' },
              { id: 'ec-3', name: 'Word equations for reactions' },
              { id: 'ec-4', name: 'Application of common elements/compounds' },
              { id: 'ec-5', name: 'Market value of elements/compounds' },
              { id: 'ec-6', name: 'Packaging labels on products' }
            ]
          },
          {
            id: 'kinetic-theory',
            name: 'Kinetic Theory of Matter',
            lessons: [
              { id: 'kt-1', name: 'Properties of solids' },
              { id: 'kt-2', name: 'Properties of liquids' },
              { id: 'kt-3', name: 'Properties of gases' },
              { id: 'kt-4', name: 'Diffusion in liquids' },
              { id: 'kt-5', name: 'Role of diffusion in living things' }
            ]
          },
          {
            id: 'pure-impure',
            name: 'Pure and Impure Substances',
            lessons: [
              { id: 'pi-1', name: 'Pure and impure substances by melting point' },
              { id: 'pi-2', name: 'Pure and impure substances by boiling point' }
            ]
          },
          {
            id: 'changes-substances',
            name: 'Changes in Substances',
            lessons: [
              { id: 'cs-1', name: 'Temporary (physical) changes' },
              { id: 'cs-2', name: 'Permanent (chemical) changes' },
              { id: 'cs-3', name: 'Application of change of state' }
            ]
          }
        ]
      },
      {
        id: 'energy',
        name: 'Energy',
        subStrands: [
          {
            id: 'fire-safety',
            name: 'Fire Safety',
            lessons: [
              { id: 'fs-1', name: 'Causes of fire in nature' },
              { id: 'fs-2', name: 'Role of fire triangle' },
              { id: 'fs-3', name: 'Classes of fire and control measures' },
              { id: 'fs-4', name: 'Use of fire extinguisher' },
              { id: 'fs-5', name: 'Project: Fire safety posters' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'grade-9',
    name: 'Grade 9',
    strands: [
      {
        id: 'mixtures',
        name: 'Mixtures, Elements and Compounds',
        subStrands: [
          {
            id: 'structure-atom',
            name: 'Structure of the Atom',
            lessons: [
              { id: 'at-1', name: 'Definition and structure of the Atom' },
              { id: 'at-2', name: 'Atomic number and Mass number' },
              { id: 'at-3', name: 'Electron arrangement (Dots and Cross diagrams)' },
              { id: 'at-4', name: 'Drawing electron arrangement of first 20 elements' },
              { id: 'at-5', name: 'Distinguishing metals and non-metals by electron arrangement' },
              { id: 'at-6', name: 'Classifying elements into metals and non-metals' },
              { id: 'at-7', name: 'Modelling atomic structure of selected elements' }
            ]
          },
          {
            id: 'metals-alloys',
            name: 'Metals and Alloys',
            lessons: [
              { id: 'ma-1', name: 'Physical properties of metals' },
              { id: 'ma-2', name: 'Experiment: Physical properties of metals' },
              { id: 'ma-3', name: 'Alloys: Definition and composition' },
              { id: 'ma-4', name: 'Physical properties of common Alloys' },
              { id: 'ma-5', name: 'Uses of different metals' },
              { id: 'ma-6', name: 'Uses of alloys' },
              { id: 'ma-7', name: 'Rusting in metals: Meaning and causes' },
              { id: 'ma-8', name: 'Experiment: Causes of rusting' },
              { id: 'ma-9', name: 'Effects of rusting on metals' },
              { id: 'ma-10', name: 'Ways of controlling rusting' }
            ]
          },
          {
            id: 'water-hardness',
            name: 'Water Hardness',
            lessons: [
              { id: 'wh-1', name: 'Physical properties of water' },
              { id: 'wh-2', name: 'Hard Water: Meaning and properties' },
              { id: 'wh-3', name: 'Soft Water: Meaning and properties' },
              { id: 'wh-4', name: 'Soap lather test (Distinguishing hard/soft water)' },
              { id: 'wh-5', name: 'Softening temporary hard water: Boiling' },
              { id: 'wh-6', name: 'Softening temporary hard water: Addition of washing soda' },
              { id: 'wh-7', name: 'Softening temporary hard water: Distilling' },
              { id: 'wh-8', name: 'Advantages and disadvantages of hard water' },
              { id: 'wh-9', name: 'Advantages and disadvantages of soft water' },
              { id: 'wh-10', name: 'Applications of soft water in daily life' },
              { id: 'wh-11', name: 'Applications of hard water in daily life' }
            ]
          }
        ]
      },
      {
        id: 'living-things',
        name: 'Living Things and Their Environment',
        subStrands: [
          {
            id: 'nutrition-plants',
            name: 'Nutrition in Plants',
            lessons: [
              { id: 'np-1', name: 'External parts of a leaf' },
              { id: 'np-2', name: 'Internal parts of a leaf' },
              { id: 'np-3', name: 'Adaptations of a leaf to photosynthesis' },
              { id: 'np-4', name: 'Structure of the Chloroplast' },
              { id: 'np-5', name: 'Process of Photosynthesis' },
              { id: 'np-6', name: 'Conditions necessary for Photosynthesis' },
              { id: 'np-7', name: 'Importance of Photosynthesis in nature' },
              { id: 'np-8', name: 'Experiment: Necessity of light for photosynthesis' },
              { id: 'np-9', name: 'Experiment: Necessity of chlorophyll for photosynthesis' },
              { id: 'np-10', name: 'Experiment: Necessity of Carbon (IV) Oxide' }
            ]
          },
          {
            id: 'nutrition-animals',
            name: 'Nutrition in Animals',
            lessons: [
              { id: 'na-1', name: 'Modes of nutrition: Parasitic and Saprophytic' },
              { id: 'na-2', name: 'Modes of nutrition: Symbiosis and Holozoic' },
              { id: 'na-3', name: 'Dentition: Homodont and Heterodont' },
              { id: 'na-4', name: 'Types of teeth and their structure' },
              { id: 'na-5', name: 'Functions of different types of teeth' },
              { id: 'na-6', name: 'Dentition characteristics (Herbivores, Carnivores, Omnivores)' }
            ]
          }
        ]
      }
    ]
  }
];
