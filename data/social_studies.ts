
import { GradeCurriculum } from '../types';

export const SOCIAL_STUDIES_CURRICULUM: GradeCurriculum[] = [
  {
    id: 'grade-7',
    name: 'Grade 7',
    strands: [
      {
        id: 'social-studies-intro',
        name: 'Social Studies',
        subStrands: [
          {
            id: 'careers',
            name: 'Career and Entrepreneurial Opportunities',
            lessons: [
              { id: 'ce-1', name: 'Importance of Social Studies for Personal Development' },
              { id: 'ce-2', name: 'Addressing gender stereotypes in careers' },
              { id: 'ce-3', name: 'Role of Social Studies in Social Cohesion' }
            ]
          }
        ]
      },
      {
        id: 'personal-management',
        name: 'Personal Management Skills',
        subStrands: [
          {
            id: 'self-awareness',
            name: 'Self-Awareness',
            lessons: [
              { id: 'sa-1', name: 'Meaning and dimensions of self-awareness' },
              { id: 'sa-2', name: 'Physical, social, psychological, spiritual dimensions' }
            ]
          },
          {
            id: 'talents',
            name: 'Talents and Abilities',
            lessons: [
              { id: 'ta-1', name: 'Identifying personal talents and abilities' }
            ]
          },
          {
            id: 'self-esteem',
            name: 'Self-Esteem',
            lessons: [
              { id: 'se-1', name: 'Meaning of high and low self-esteem' },
              { id: 'se-2', name: 'Improving one’s self-esteem' }
            ]
          },
          {
            id: 'emotions',
            name: 'Managing Emotions',
            lessons: [
              { id: 'em-1', name: 'Types of emotions displayed in different situations' },
              { id: 'em-2', name: 'Managing emotions positively' }
            ]
          },
          {
            id: 'stress',
            name: 'Managing Stress',
            lessons: [
              { id: 'st-1', name: 'Definition and sources of stress' },
              { id: 'st-2', name: 'Managing stressful situations in life' }
            ]
          }
        ]
      },
      {
        id: 'environment',
        name: 'Natural and Historical Built Environments',
        subStrands: [
          {
            id: 'maps',
            name: 'Maps and Map Work',
            lessons: [
              { id: 'mp-1', name: 'Definition and position of Africa' },
              { id: 'mp-2', name: 'Countries that make up the African continent' },
              { id: 'mp-3', name: 'Using Latitudes and Longitudes to locate places' },
              { id: 'mp-4', name: 'Calculating time using longitudes' },
              { id: 'mp-5', name: 'Pictures, Plans and Maps' },
              { id: 'mp-6', name: 'Types of Maps used in Social Studies' }
            ]
          },
          {
            id: 'earth-solar',
            name: 'The Earth and Solar System',
            lessons: [
              { id: 'es-1', name: 'Origin of the earth (Theories & Folklore)' },
              { id: 'es-2', name: 'Size and shape of the Earth' },
              { id: 'es-3', name: 'Position of the Earth in the Solar System' },
              { id: 'es-4', name: 'Internal Structure of the Earth' },
              { id: 'es-5', name: 'Effects of Rotation on Human Activities' },
              { id: 'es-6', name: 'Effects of Revolution on Human Activities' }
            ]
          },
          {
            id: 'weather',
            name: 'Weather',
            lessons: [
              { id: 'w-1', name: 'Elements of Weather' },
              { id: 'w-2', name: 'Analysing and Interpreting Weather Data' },
              { id: 'w-3', name: 'Siting a Weather Station' },
              { id: 'w-4', name: 'Constructing a rain gauge' },
              { id: 'w-5', name: 'Constructing a wind vane' },
              { id: 'w-6', name: 'Constructing a wind sock' },
              { id: 'w-7', name: 'Significance of Weather to Human Environment' }
            ]
          },
          {
            id: 'history',
            name: 'Historical Information',
            lessons: [
              { id: 'hi-1', name: 'Sources of Historical Information' },
              { id: 'hi-2', name: 'Primary and Secondary Sources' },
              { id: 'hi-3', name: 'Preserving sources of historical information' },
              { id: 'hi-4', name: 'Sources in Understanding Past Human Accounts' },
              { id: 'hi-5', name: 'Use of sources in study of the past' }
            ]
          }
        ]
      },
      {
        id: 'people',
        name: 'People and Population',
        subStrands: [
          {
            id: 'human-origin',
            name: 'Human Origin',
            lessons: [
              { id: 'ho-1', name: 'Traditional Stories of Human Origin' },
              { id: 'ho-2', name: 'Religious Stories about Origin of Humankind' },
              { id: 'ho-3', name: 'Factors proving Africa as Cradle of Humankind' },
              { id: 'ho-4', name: 'Recording Traditional Stories' }
            ]
          }
        ]
      },
      {
        id: 'csl',
        name: 'Community Service Learning',
        subStrands: [
          {
            id: 'csl-proj',
            name: 'CSL Project',
            lessons: [
              { id: 'csl-1', name: 'Meaning and activities of CSL' },
              { id: 'csl-2', name: 'Accomplishing a CSL Project' }
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
        id: 'social-studies-career',
        name: 'Social Studies and Career Development',
        subStrands: [
          {
            id: 'pathways',
            name: 'Pathway Choices',
            lessons: [
              { id: 'pc-1', name: 'Meaning of career path' },
              { id: 'pc-2', name: 'Factors to consider in selection of a pathway' },
              { id: 'pc-3', name: 'Requirements for social sciences pathway' },
              { id: 'pc-4', name: 'Learning areas in different pathways' },
              { id: 'pc-5', name: 'Choosing a track within a pathway' },
              { id: 'pc-6', name: 'Creating posters on pathways' }
            ]
          },
          {
            id: 'support-systems',
            name: 'Pre-Career Support Systems',
            lessons: [
              { id: 'ss-1', name: 'Meaning and examples of support systems' },
              { id: 'ss-2', name: 'Challenges arising from existing support systems' },
              { id: 'ss-3', name: 'Solutions to challenges from support systems' },
              { id: 'ss-4', name: 'Significance of pre-career mapping' },
              { id: 'ss-5', name: 'Value of pre-career support systems' }
            ]
          }
        ]
      },
      {
        id: 'csl',
        name: 'Community Service Learning',
        subStrands: [
          {
            id: 'csl-project',
            name: 'Community Service Learning Project',
            lessons: [
              { id: 'cp-1', name: 'Identifying a problem in the community' },
              { id: 'cp-2', name: 'Designing a solution to the identified problem' },
              { id: 'cp-3', name: 'Planning to solve the identified problem' },
              { id: 'cp-4', name: 'Implementing the plan (Factors to consider)' },
              { id: 'cp-5', name: 'Writing a report on the concluded project' }
            ]
          }
        ]
      },
      {
        id: 'people-relationships',
        name: 'People and Relationships',
        subStrands: [
          {
            id: 'early-humans-socio-econ',
            name: 'Socio-Economic Practices of Early Humans',
            lessons: [
              { id: 'se-1', name: 'Early Stone Age practices' },
              { id: 'se-2', name: 'Middle Stone Age practices' },
              { id: 'se-3', name: 'Late Stone Age practices' },
              { id: 'se-4', name: 'Tools used during Stone Age' },
              { id: 'se-5', name: 'Drawing Stone Age tools' },
              { id: 'se-6', name: 'Relevance to modern society' },
              { id: 'se-7', name: 'Africa as birthplace of human technology' }
            ]
          },
          {
            id: 'indigenous-knowledge',
            name: 'Indigenous Knowledge Systems',
            lessons: [
              { id: 'ik-1', name: 'Agriculture and medicine' },
              { id: 'ik-2', name: 'Climate and technology' },
              { id: 'ik-3', name: 'Education and environmental conservation' },
              { id: 'ik-4', name: 'Astronomy' },
              { id: 'ik-5', name: 'Religion' },
              { id: 'ik-6', name: 'Arts' },
              { id: 'ik-7', name: 'Using indigenous and modern knowledge systems' }
            ]
          },
          {
            id: 'poverty-reduction',
            name: 'Poverty Reduction',
            lessons: [
              { id: 'pr-1', name: 'Meaning and causes of poverty' },
              { id: 'pr-2', name: 'Effects of overexploitation of natural resources' },
              { id: 'pr-3', name: 'Ways to reduce poverty' },
              { id: 'pr-4', name: 'Solutions to poverty reduction (Report)' },
              { id: 'pr-5', name: 'Problem solving skills to reduce poverty' },
              { id: 'pr-6', name: 'Sustainable use of resources' }
            ]
          },
          {
            id: 'population-structure',
            name: 'Population Structure',
            lessons: [
              { id: 'ps-1', name: 'Population data and components' },
              { id: 'ps-2', name: 'Sources of population data' },
              { id: 'ps-3', name: 'Factors determining population structure in Kenya' },
              { id: 'ps-4', name: 'Factors determining population structure in Germany' },
              { id: 'ps-5', name: 'Age-sex population pyramids (Developing vs Developed)' },
              { id: 'ps-6', name: 'Significance of population structure in resource distribution' },
              { id: 'ps-7', name: 'Differences in population structure (Developed vs Developing)' }
            ]
          }
        ]
      }
    ]
  }
];
