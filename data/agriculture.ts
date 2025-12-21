
import { GradeCurriculum } from '../types';

export const AGRICULTURE_CURRICULUM: GradeCurriculum[] = [
  {
    id: 'grade-7',
    name: 'Grade 7',
    strands: [
      {
        id: 'conservation',
        name: 'Conservation of Resources',
        subStrands: [
          {
            id: 'soil-pollution',
            name: 'Controlling Soil Pollution',
            lessons: [
              { id: 'sp-1', name: 'Meaning and causes of soil pollution' },
              { id: 'sp-2', name: 'Observing causes of soil pollution (Farm visit)' },
              { id: 'sp-3', name: 'Ways of controlling soil pollution' },
              { id: 'sp-4', name: 'Practicing safe soil pollution control' },
              { id: 'sp-5', name: 'Creating awareness messages on safe farming' }
            ]
          },
          {
            id: 'water-retention',
            name: 'Water Retention Structures',
            lessons: [
              { id: 'wr-1', name: 'Water conservation and surface runoff' },
              { id: 'wr-2', name: 'Structures for conserving surface runoff' },
              { id: 'wr-3', name: 'Designing a water retention structure' },
              { id: 'wr-4', name: 'Constructing a water retention structure' }
            ]
          },
          {
            id: 'food-nutrients',
            name: 'Conserving Food Nutrients',
            lessons: [
              { id: 'fn-1', name: 'Ways of conserving vitamins and minerals in vegetables' },
              { id: 'fn-2', name: 'Washing vegetables correctly' },
              { id: 'fn-3', name: 'Cutting and peeling vegetables correctly' },
              { id: 'fn-4', name: 'Cooking time and covering' }
            ]
          },
          {
            id: 'growing-trees',
            name: 'Growing Trees',
            lessons: [
              { id: 'gt-1', name: 'Importance of trees in conserving environment' },
              { id: 'gt-2', name: 'Afforestation, Re-afforestation and Deforestation' },
              { id: 'gt-3', name: 'Management practices in a tree nursery' },
              { id: 'gt-4', name: 'Establishing trees (Planting)' },
              { id: 'gt-5', name: 'Managing established trees' }
            ]
          }
        ]
      },
      {
        id: 'food-production',
        name: 'Food Production Processes',
        subStrands: [
          {
            id: 'planting-sites',
            name: 'Preparing Planting Sites',
            lessons: [
              { id: 'ps-1', name: 'Soil tilth and types' },
              { id: 'ps-2', name: 'Types of planting sites' },
              { id: 'ps-3', name: 'Preparing a planting site' }
            ]
          },
          {
            id: 'crop-management',
            name: 'Crop Management Practices',
            lessons: [
              { id: 'cm-1', name: 'Meaning of crop management' },
              { id: 'cm-2', name: 'Weeding methods' },
              { id: 'cm-3', name: 'Thinning and Gapping' },
              { id: 'cm-4', name: 'Earthing up' },
              { id: 'cm-5', name: 'Hardening' },
              { id: 'cm-6', name: 'Importance of management practices' }
            ]
          },
          {
            id: 'animal-products',
            name: 'Preparing Animal Products',
            lessons: [
              { id: 'ap-1', name: 'Sorting and Grading eggs' },
              { id: 'ap-2', name: 'Sorting and grading eggs (Practice)' },
              { id: 'ap-3', name: 'Importance of sorting and grading eggs' },
              { id: 'ap-4', name: 'Honey processing (Crushing and straining)' },
              { id: 'ap-5', name: 'Packing honey' },
              { id: 'ap-6', name: 'Importance of processing honey' },
              { id: 'ap-7', name: 'Processing and packing honey (Practice)' }
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
        id: 'conservation',
        name: 'Conservation of Resources',
        subStrands: [
          {
            id: 'soil-conservation',
            name: 'Soil Conservation Measures',
            lessons: [
              { id: 'scm-1', name: 'Methods of soil conservation' },
              { id: 'scm-2', name: 'Strip cropping' },
              { id: 'scm-3', name: 'Grassed water ways' },
              { id: 'scm-4', name: 'Stone lines' },
              { id: 'scm-5', name: 'Trash lines' },
              { id: 'scm-6', name: 'Soil bunds' },
              { id: 'scm-7', name: 'Project: Farm Model' }
            ]
          },
          {
            id: 'water-harvesting',
            name: 'Water Harvesting and Storage',
            lessons: [
              { id: 'wh-1', name: 'Ways of storing harvested water (Shallow pans)' },
              { id: 'wh-2', name: 'Ways of storing harvested water (Ponds)' },
              { id: 'wh-3', name: 'Ways of storing harvested water (Containers)' },
              { id: 'wh-4', name: 'Harvesting and storing water in school' }
            ]
          }
        ]
      },
      {
        id: 'food-production',
        name: 'Food Production Processes',
        subStrands: [
          {
            id: 'kitchen-gardening',
            name: 'Kitchen and Backyard Gardening',
            lessons: [
              { id: 'kg-1', name: 'Role of kitchen and backyard garden' },
              { id: 'kg-2', name: 'Selecting a suitable place' },
              { id: 'kg-3', name: 'Preparation of the selected site' },
              { id: 'kg-4', name: 'Establishing various crops' }
            ]
          },
          {
            id: 'poultry-fold',
            name: 'Poultry Rearing in a Fold',
            lessons: [
              { id: 'pf-1', name: 'Fold in poultry rearing (Description)' },
              { id: 'pf-2', name: 'Materials required for making a fold' },
              { id: 'pf-3', name: 'Constructing a poultry fold' },
              { id: 'pf-4', name: 'Rearing poultry in a fold' }
            ]
          },
          {
            id: 'crop-pest',
            name: 'Crop Pest and Disease Control',
            lessons: [
              { id: 'cp-1', name: 'Identifying vegetables attacked by pests/diseases' },
              { id: 'cp-2', name: 'Controlling pests by Handpicking' },
              { id: 'cp-3', name: 'Controlling pests by removing affected parts' },
              { id: 'cp-4', name: 'Controlling pests by uprooting' },
              { id: 'cp-5', name: 'Controlling pests by natural pesticides' }
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
        id: 'conservation',
        name: 'Conservation of Resources',
        subStrands: [
          {
            id: 'hay',
            name: 'Conserving Animal Feed: Hay',
            lessons: [
              { id: 'hy-1', name: 'Methods of conserving hay (Baled)' },
              { id: 'hy-2', name: 'Methods of conserving hay (Standing forage)' },
              { id: 'hy-3', name: 'Process of baled hay making' },
              { id: 'hy-4', name: 'Process of standing forage conservation' },
              { id: 'hy-5', name: 'Process of stacking method' },
              { id: 'hy-6', name: 'Importance of conserving forage at household level' },
              { id: 'hy-7', name: 'Qualities of good hay' }
            ]
          },
          {
            id: 'leftover-food',
            name: 'Conserving Leftover Food',
            lessons: [
              { id: 'lf-1', name: 'Meaning and ways of conserving leftover foods' },
              { id: 'lf-2', name: 'Hygiene practices in handling leftover foods' },
              { id: 'lf-3', name: 'Importance of conserving leftover foods' },
              { id: 'lf-4', name: 'Preparing leftover ugali' },
              { id: 'lf-5', name: 'Preparing leftover chapati' },
              { id: 'lf-6', name: 'Preparing leftover boiled arrowroots' },
              { id: 'lf-7', name: 'Preparing leftover githeri' },
              { id: 'lf-8', name: 'Preparing leftover rice' }
            ]
          },
          {
            id: 'integrated-farming',
            name: 'Integrated Farming',
            lessons: [
              { id: 'if-1', name: 'Meaning and goals of integrated farming' },
              { id: 'if-2', name: 'Component: Piggery' },
              { id: 'if-3', name: 'Component: Poultry' },
              { id: 'if-4', name: 'Component: Duckery' },
              { id: 'if-5', name: 'Component: Fishing' },
              { id: 'if-6', name: 'Component: Plantation crops' },
              { id: 'if-7', name: 'Component: Apiary' },
              { id: 'if-8', name: 'Component: Mushroom cultivation' },
              { id: 'if-9', name: 'Component: Vermicomposting' },
              { id: 'if-10', name: 'Component: Fruit cultivation' },
              { id: 'if-11', name: 'Making a model of integrated farming' },
              { id: 'if-12', name: 'Importance of integrated farming' }
            ]
          }
        ]
      },
      {
        id: 'food-production',
        name: 'Food Production Processes',
        subStrands: [
          {
            id: 'organic-gardening',
            name: 'Organic Gardening',
            lessons: [
              { id: 'og-1', name: 'Meaning of organic gardening' },
              { id: 'og-2', name: 'Exploring organic gardening practices' },
              { id: 'og-3', name: 'Establishing a crop using organic practices' },
              { id: 'og-4', name: 'Preparing a seedbed' },
              { id: 'og-5', name: 'Planting a crop' },
              { id: 'og-6', name: 'Care for the growing crop' },
              { id: 'og-7', name: 'Making a foliar feed or fertilizer' },
              { id: 'og-8', name: 'Making natural pesticides (Ash brew)' }
            ]
          }
        ]
      }
    ]
  }
];
