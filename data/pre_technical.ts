
import { GradeCurriculum } from '../types';

export const PRE_TECHNICAL_CURRICULUM: GradeCurriculum[] = [
  {
    id: 'grade-7',
    name: 'Grade 7',
    strands: [
      {
        id: 'safety',
        name: 'Safety',
        subStrands: [
          {
            id: 'safety-env',
            name: 'Safety in Work Environment',
            lessons: [
              { id: 's-1', name: 'Potential safety threats in a work environment' },
              { id: 's-2', name: 'Online safety threats and data security' },
              { id: 's-3', name: 'Safety rules and regulations in the work environment' },
              { id: 's-4', name: 'Observing safety for self and others' }
            ]
          },
          {
            id: 'comp-concepts',
            name: 'Computer Concepts',
            lessons: [
              { id: 'cc-1', name: 'Characteristics of a computer' },
              { id: 'cc-2', name: 'Classification of computers' },
              { id: 'cc-3', name: 'Using computers to perform tasks' }
            ]
          }
        ]
      },
      {
        id: 'communication',
        name: 'Communication',
        subStrands: [
          {
            id: 'comm-ict',
            name: 'Communication and ICT',
            lessons: [
              { id: 'com-1', name: 'Importance of communication' },
              { id: 'com-2', name: 'ICT tools used in communication' },
              { id: 'com-3', name: 'Using ICT to enhance communication' }
            ]
          },
          {
            id: 'drawing',
            name: 'Drawing',
            lessons: [
              { id: 'dr-1', name: 'Importance of drawing as communication' },
              { id: 'dr-2', name: 'Artistic vs Technical drawings' },
              { id: 'dr-3', name: 'Printing numbers and letters' },
              { id: 'dr-4', name: 'Types of lines used in drawing' },
              { id: 'dr-5', name: 'Symbols and abbreviations in drawing' }
            ]
          },
          {
            id: 'geometry',
            name: 'Plane Geometry',
            lessons: [
              { id: 'pg-1', name: 'Dimensioning drawings' },
              { id: 'pg-2', name: 'Constructing combined shapes' },
              { id: 'pg-3', name: 'Dimensioning combined shapes' }
            ]
          }
        ]
      },
      {
        id: 'materials',
        name: 'Materials and Resources',
        subStrands: [
          {
            id: 'econ-res',
            name: 'Economic Resources',
            lessons: [
              { id: 'er-1', name: 'Characteristics of economic resources' },
              { id: 'er-2', name: 'Classification of economic resources' },
              { id: 'er-3', name: 'Sustainable use of economic resources' }
            ]
          },
          {
            id: 'metallic',
            name: 'Metallic Materials',
            lessons: [
              { id: 'mm-1', name: 'Types of metallic materials' },
              { id: 'mm-2', name: 'Physical properties of metallic materials' },
              { id: 'mm-3', name: 'Relating metallic materials to their uses' }
            ]
          },
          {
            id: 'non-metallic',
            name: 'Non-Metallic Materials',
            lessons: [
              { id: 'nmm-1', name: 'Types of non-metallic materials' },
              { id: 'nmm-2', name: 'Synthetic vs Natural non-metallic materials' },
              { id: 'nmm-3', name: 'Physical properties of non-metallic materials' },
              { id: 'nmm-4', name: 'Relating non-metallic materials to their uses' }
            ]
          }
        ]
      },
      {
        id: 'tools',
        name: 'Tools and Production',
        subStrands: [
          {
            id: 'measuring',
            name: 'Measuring and Marking Tools',
            lessons: [
              { id: 'mt-1', name: 'Identifying measuring and marking out tools' },
              { id: 'mt-2', name: 'Selecting and using measuring/marking tools' },
              { id: 'mt-3', name: 'Care and maintenance of tools' }
            ]
          },
          {
            id: 'production',
            name: 'Production',
            lessons: [
              { id: 'pr-1', name: 'Benefits of production to the community' },
              { id: 'pr-2', name: 'Goods vs Services' },
              { id: 'pr-3', name: 'Factors of production' },
              { id: 'pr-4', name: 'Ethical and unethical practices in production' }
            ]
          }
        ]
      },
      {
        id: 'entrepreneurship',
        name: 'Entrepreneurship and Finance',
        subStrands: [
          {
            id: 'ent-skills',
            name: 'Entrepreneurship',
            lessons: [
              { id: 'es-1', name: 'Importance of entrepreneurship' },
              { id: 'es-2', name: 'Qualities of an entrepreneur' },
              { id: 'es-3', name: 'Sources of business ideas' },
              { id: 'es-4', name: 'Evaluating business opportunities' }
            ]
          },
          {
            id: 'money',
            name: 'Money',
            lessons: [
              { id: 'mn-1', name: 'Characteristics and uses of money' },
              { id: 'mn-2', name: 'Security features of Kenyan currency' },
              { id: 'mn-3', name: 'Themes and symbols on Kenyan currency' }
            ]
          },
          {
            id: 'finance-goals',
            name: 'Financial Goals',
            lessons: [
              { id: 'fg-1', name: 'Importance of setting financial goals' },
              { id: 'fg-2', name: 'Factors to consider when setting financial goals' },
              { id: 'fg-3', name: 'Formulating SMART financial goals' },
              { id: 'fg-4', name: 'Financial discipline' }
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
        id: 'safety',
        name: 'Safety',
        subStrands: [
          {
            id: 'fire-safety',
            name: 'Fire and Data Safety',
            lessons: [
              { id: 'fs-1', name: 'Causes and prevention of fire' },
              { id: 'fs-2', name: 'Firefighting techniques' },
              { id: 'fs-3', name: 'Threats to data and data security' }
            ]
          }
        ]
      },
      {
        id: 'computing',
        name: 'Computer Science',
        subStrands: [
          {
            id: 'hardware',
            name: 'Computer Hardware',
            lessons: [
              { id: 'hw-1', name: 'Classification of computer hardware' },
              { id: 'hw-2', name: 'Input, Output, and Storage devices' },
              { id: 'hw-3', name: 'Using computer hardware for tasks' }
            ]
          },
          {
            id: 'visual-prog',
            name: 'Visual Programming',
            lessons: [
              { id: 'vp-1', name: 'Types of visual programming applications' },
              { id: 'vp-2', name: 'Features of visual programming' },
              { id: 'vp-3', name: 'Creating simple instructions/programs' }
            ]
          }
        ]
      },
      {
        id: 'business-protection',
        name: 'Business and Consumer',
        subStrands: [
          {
            id: 'consumer-investor',
            name: 'Consumer and Investor Protection',
            lessons: [
              { id: 'cip-1', name: 'Importance of consumer/investor protection' },
              { id: 'cip-2', name: 'Ways consumers and investors are protected' }
            ]
          },
          {
            id: 'comm',
            name: 'Business Communication',
            lessons: [
              { id: 'bc-1', name: 'Forms and channels of communication' },
              { id: 'bc-2', name: 'Factors for selecting communication channels' },
              { id: 'bc-3', name: 'Ethical practices in business communication' }
            ]
          }
        ]
      },
      {
        id: 'drawing',
        name: 'Drawing',
        subStrands: [
          {
            id: 'scale',
            name: 'Plain Scale Drawing',
            lessons: [
              { id: 'ps-1', name: 'Features of a plain scale' },
              { id: 'ps-2', name: 'Interpreting plain scales' },
              { id: 'ps-3', name: 'Drawing plane figures to scale' }
            ]
          }
        ]
      },
      {
        id: 'materials',
        name: 'Materials',
        subStrands: [
          {
            id: 'composite',
            name: 'Composite Materials',
            lessons: [
              { id: 'cm-1', name: 'Identifying composite materials' },
              { id: 'cm-2', name: 'Composition and uses of composite materials' }
            ]
          },
          {
            id: 'ceramic',
            name: 'Ceramic Materials',
            lessons: [
              { id: 'cer-1', name: 'Identifying ceramic materials' },
              { id: 'cer-2', name: 'Physical properties of ceramic materials' },
              { id: 'cer-3', name: 'Uses of ceramic materials' }
            ]
          }
        ]
      },
      {
        id: 'production',
        name: 'Tools and Production',
        subStrands: [
          {
            id: 'cutting',
            name: 'Cutting Tools',
            lessons: [
              { id: 'ct-1', name: 'Identifying cutting tools' },
              { id: 'ct-2', name: 'Selecting and using cutting tools' },
              { id: 'ct-3', name: 'Care and maintenance of cutting tools' }
            ]
          },
          {
            id: 'prod-unit',
            name: 'Production Unit',
            lessons: [
              { id: 'pu-1', name: 'Factors for locating a production unit' },
              { id: 'pu-2', name: 'Factors determining the size of a production unit' },
              { id: 'pu-3', name: 'Locating a production unit in a suitable area' }
            ]
          }
        ]
      },
      {
        id: 'finance',
        name: 'Financial Literacy',
        subStrands: [
          {
            id: 'bookkeeping',
            name: 'Bookkeeping',
            lessons: [
              { id: 'bk-1', name: 'Importance of bookkeeping' },
              { id: 'bk-2', name: 'Classifying business transactions' },
              { id: 'bk-3', name: 'Preparing simple financial statements' }
            ]
          },
          {
            id: 'income',
            name: 'Income and Budgeting',
            lessons: [
              { id: 'ib-1', name: 'Sources of income' },
              { id: 'ib-2', name: 'Importance of budgeting' },
              { id: 'ib-3', name: 'Preparing a personal budget' },
              { id: 'ib-4', name: 'Ethical issues in budgeting' }
            ]
          },
          {
            id: 'marketing',
            name: 'Marketing',
            lessons: [
              { id: 'mkt-1', name: 'Importance of marketing' },
              { id: 'mkt-2', name: 'Sources of market information' },
              { id: 'mkt-3', name: 'Tools for marketing goods and services' },
              { id: 'mkt-4', name: 'Selecting suitable markets' }
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
        id: 'foundations',
        name: 'Foundation of Pre-Technical Studies',
        subStrands: [
          {
            id: 'raised-platforms',
            name: 'Safety on Raised Platforms',
            lessons: [
              { id: 'rp-1', name: 'Types and uses of raised platforms' },
              { id: 'rp-2', name: 'Risks associated with working on raised platforms' },
              { id: 'rp-3', name: 'Safety measures on raised platforms' },
              { id: 'rp-4', name: 'Importance of safety on raised platforms' }
            ]
          },
          {
            id: 'self-exploration',
            name: 'Self-Exploration and Career Development',
            lessons: [
              { id: 'se-1', name: 'Talents vs Abilities' },
              { id: 'se-2', name: 'Nurturing talents and abilities' },
              { id: 'se-3', name: 'Career pathways in senior school' },
              { id: 'se-4', name: 'Importance of self-exploration' },
              { id: 'se-5', name: 'Career opportunities related to Pre-Technical Studies' },
              { id: 'se-6', name: 'Ethical and unethical practices in talents' }
            ]
          },
          {
            id: 'haz-substances',
            name: 'Handling Hazardous Substances',
            lessons: [
              { id: 'hz-1', name: 'Identifying hazardous substances' },
              { id: 'hz-2', name: 'Classifying hazardous substances' },
              { id: 'hz-3', name: 'Safe ways of handling hazardous substances' },
              { id: 'hz-4', name: 'Practice handling hazardous substances' },
              { id: 'hz-5', name: 'Importance of safety with hazardous substances' }
            ]
          }
        ]
      },
      {
        id: 'communication',
        name: 'Communication in Pre-Technical Studies',
        subStrands: [
          {
            id: 'oblique',
            name: 'Oblique Projection',
            lessons: [
              { id: 'obl-1', name: 'Meaning and characteristics of oblique projection' },
              { id: 'obl-2', name: 'Cavalier vs Cabinet projection' },
              { id: 'obl-3', name: 'Steps for drawing shaped blocks (Cavalier)' },
              { id: 'obl-4', name: 'Drawing shaped blocks in Cavalier projection' },
              { id: 'obl-5', name: 'Steps for drawing shaped blocks (Cabinet)' },
              { id: 'obl-6', name: 'Drawing shaped blocks in Cabinet projection' },
              { id: 'obl-7', name: 'Applications of oblique projection' }
            ]
          },
          {
            id: 'visual-prog',
            name: 'Visual Programming',
            lessons: [
              { id: 'vp-1', name: 'Application areas of visual programming' },
              { id: 'vp-2', name: 'Steps for creating applications (games/stories)' },
              { id: 'vp-3', name: 'Developing interactive stories and games' }
            ]
          }
        ]
      },
      {
        id: 'production',
        name: 'Materials for Production',
        subStrands: [
          {
            id: 'wood',
            name: 'Wood',
            lessons: [
              { id: 'wd-1', name: 'Types of wood used in production' },
              { id: 'wd-2', name: 'Physical characteristics of soft and hard wood' },
              { id: 'wd-3', name: 'Classifying wood' },
              { id: 'wd-4', name: 'Wood preparation: Conversion method' },
              { id: 'wd-5', name: 'Wood preparation: Seasoning' },
              { id: 'wd-6', name: 'Uses of wood in the community' }
            ]
          },
          {
            id: 'waste',
            name: 'Handling Waste Materials',
            lessons: [
              { id: 'wm-1', name: 'Collecting and sorting waste materials' },
              { id: 'wm-2', name: 'Safe handling of waste materials' },
              { id: 'wm-3', name: 'Disposing waste materials' },
              { id: 'wm-4', name: 'Importance of proper waste handling' }
            ]
          }
        ]
      }
    ]
  }
];
