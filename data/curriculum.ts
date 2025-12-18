

import { GradeCurriculum } from '../types';

const MATHS_CURRICULUM: GradeCurriculum[] = [
  {
    id: 'grade-7',
    name: 'Grade 7',
    strands: [
      {
        id: 'numbers',
        name: 'NUMBERS',
        subStrands: [
          {
            id: 'whole-numbers',
            name: 'Whole Numbers',
            lessons: [
              { id: 'wn-1', name: 'Place value of digits in whole numbers' },
              { id: 'wn-2', name: 'Total value of digits in whole numbers' },
              { id: 'wn-3', name: 'Reading and writing numbers in symbols' },
              { id: 'wn-4', name: 'Reading and writing numbers in words' },
              { id: 'wn-5', name: 'Rounding off numbers to the nearest millions' },
              { id: 'wn-6', name: 'Rounding off numbers to the nearest hundreds of millions' },
              { id: 'wn-7', name: 'Natural numbers: Even and Odd numbers' },
              { id: 'wn-8', name: 'Prime numbers' },
              { id: 'wn-9', name: 'Combined operations: Addition and Subtraction' },
              { id: 'wn-10', name: 'Combined operations: Multiplication and Division' },
              { id: 'wn-11', name: 'Combined operations: Mixed operations (BODMAS)' },
              { id: 'wn-12', name: 'Number sequence and patterns' },
              { id: 'wn-13', name: 'Creating number sequences' }
            ]
          },
          {
            id: 'factors',
            name: 'Factors',
            lessons: [
              { id: 'fac-1', name: 'Divisibility test rules (2, 3, 4, 5, 6, 8, 9, 10, 11)' },
              { id: 'fac-2', name: 'Composite numbers and prime factorization' },
              { id: 'fac-3', name: 'Greatest Common Divisor (GCD) by factor method' },
              { id: 'fac-4', name: 'Least Common Multiple (LCM) by factor method' },
              { id: 'fac-5', name: 'Application of GCD and LCM in real life' }
            ]
          },
          {
            id: 'fractions',
            name: 'Fractions',
            lessons: [
              { id: 'frac-1', name: 'Comparing and ordering fractions' },
              { id: 'frac-2', name: 'Addition of fractions' },
              { id: 'frac-3', name: 'Subtraction of fractions' },
              { id: 'frac-4', name: 'Multiplication of fractions by a whole number' },
              { id: 'frac-5', name: 'Multiplication of a fraction by a fraction' },
              { id: 'frac-6', name: 'Multiplication of a fraction by a mixed number' },
              { id: 'frac-7', name: 'Reciprocals of fractions' },
              { id: 'frac-8', name: 'Division of a fraction by a whole number' },
              { id: 'frac-9', name: 'Division of a fraction by a fraction' },
              { id: 'frac-10', name: 'Division of a fraction by a mixed fraction' },
              { id: 'frac-11', name: 'Division of a whole number by a fraction' },
              { id: 'frac-12', name: 'Number sequences involving fractions' },
              { id: 'frac-13', name: 'Creating number sequences involving fractions' }
            ]
          },
          {
            id: 'decimals',
            name: 'Decimals',
            lessons: [
              { id: 'dec-1', name: 'Place value of digits in decimals' },
              { id: 'dec-2', name: 'Total value of digits in decimals' },
              { id: 'dec-3', name: 'Multiplication of decimals by a whole number' },
              { id: 'dec-4', name: 'Multiplication of a decimal by a decimal' },
              { id: 'dec-5', name: 'Division of a decimal by a whole number' },
              { id: 'dec-6', name: 'Division of a decimal by a decimal' }
            ]
          },
          {
            id: 'squares',
            name: 'Squares and Square Roots',
            lessons: [
              { id: 'sq-1', name: 'Squares of whole numbers' },
              { id: 'sq-2', name: 'Squares of fractions' },
              { id: 'sq-3', name: 'Squares of decimals' },
              { id: 'sq-4', name: 'Square root of whole numbers' },
              { id: 'sq-5', name: 'Square root of fractions' },
              { id: 'sq-6', name: 'Square root of decimals' }
            ]
          }
        ]
      },
      {
        id: 'algebra',
        name: 'ALGEBRA',
        subStrands: [
          {
            id: 'alg-exp',
            name: 'Algebraic Expressions',
            lessons: [
              { id: 'alg-1', name: 'Forming algebraic expressions from real life situations' },
              { id: 'alg-2', name: 'Forming algebraic expressions from algebraic statements' },
              { id: 'alg-3', name: 'Simplifying algebraic expressions (Grouping like terms)' },
              { id: 'alg-4', name: 'Simplifying algebraic expressions (Distributive property)' }
            ]
          },
          {
            id: 'lin-eq',
            name: 'Linear Equations',
            lessons: [
              { id: 'leq-1', name: 'Forming linear equations in one unknown' },
              { id: 'leq-2', name: 'Solving linear equations in one unknown' },
              { id: 'leq-3', name: 'Solving more complex linear equations in one unknown' },
              { id: 'leq-4', name: 'Application of linear equations in real life' }
            ]
          },
          {
            id: 'lin-ineq',
            name: 'Linear Inequalities',
            lessons: [
              { id: 'lineq-1', name: 'Application of linear inequality symbols' },
              { id: 'lineq-2', name: 'Forming simple linear inequalities' },
              { id: 'lineq-3', name: 'Illustrating simple inequalities on a number line' },
              { id: 'lineq-4', name: 'Forming compound inequality statements' }
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
        id: 'numbers',
        name: 'NUMBERS',
        subStrands: [
          {
            id: 'integers',
            name: 'Integers',
            lessons: [
              { id: 'int-1', name: 'Identifying integers' },
              { id: 'int-2', name: 'Representing integers on a number line' },
              { id: 'int-3', name: 'Addition of integers' },
              { id: 'int-4', name: 'Subtraction of integers' },
              { id: 'int-5', name: 'Combined operations involving integers' }
            ]
          },
          {
            id: 'fractions',
            name: 'Fractions',
            lessons: [
              { id: 'frac-1', name: 'Combined operations on fractions' },
              { id: 'frac-2', name: 'Operations on fractions in real life' }
            ]
          },
          {
            id: 'decimals',
            name: 'Decimals',
            lessons: [
              { id: 'dec-1', name: 'Converting fractions to decimals' },
              { id: 'dec-2', name: 'Identifying recurring decimals' },
              { id: 'dec-3', name: 'Rounding off decimal numbers' },
              { id: 'dec-4', name: 'Significant figures' },
              { id: 'dec-5', name: 'Expressing numbers in standard form' },
              { id: 'dec-6', name: 'Combined operations on decimals' }
            ]
          },
          {
            id: 'squares',
            name: 'Squares and Square Roots',
            lessons: [
              { id: 'sq-1', name: 'Squares of numbers from tables' },
              { id: 'sq-2', name: 'Squares of numbers between 1.000 to 99.99' },
              { id: 'sq-3', name: 'Square root of numbers less than 1 but more than 100' },
              { id: 'sq-4', name: 'Squares and square roots using a calculator' }
            ]
          },
          {
            id: 'rates',
            name: 'Rates, Ratio, Proportions and Percentages',
            lessons: [
              { id: 'rr-1', name: 'Identifying rates' },
              { id: 'rr-2', name: 'Working out rates' },
              { id: 'rr-3', name: 'Expressing fractions as ratios' },
              { id: 'rr-4', name: 'Comparing ratios' },
              { id: 'rr-5', name: 'Dividing quantities in given ratios' },
              { id: 'rr-6', name: 'Working out ratios in different situations' },
              { id: 'rr-7', name: 'Increase and decrease of quantities using ratios' },
              { id: 'rr-8', name: 'Percentage change of given quantities' },
              { id: 'rr-9', name: 'Identifying direct proportions' },
              { id: 'rr-10', name: 'Identifying indirect proportions' },
              { id: 'rr-11', name: 'Working out direct and indirect proportions' }
            ]
          }
        ]
      },
      {
        id: 'algebra',
        name: 'ALGEBRA',
        subStrands: [
          {
            id: 'alg-exp',
            name: 'Algebraic Expressions',
            lessons: [
              { id: 'alg-1', name: 'Factorizing algebraic expressions' },
              { id: 'alg-2', name: 'Simplifying algebraic fractions' },
              { id: 'alg-3', name: 'Evaluating algebraic expressions' }
            ]
          },
          {
            id: 'lin-eq',
            name: 'Linear Equations',
            lessons: [
              { id: 'leq-1', name: 'Forming linear equations in two unknowns' },
              { id: 'leq-2', name: 'Solving linear equations in two unknowns by substitution method' },
              { id: 'leq-3', name: 'Solving linear equations in two unknowns by elimination method' },
              { id: 'leq-4', name: 'Applying linear equations in two unknowns' }
            ]
          }
        ]
      },
      {
        id: 'measurement',
        name: 'MEASUREMENT',
        subStrands: [
          {
            id: 'circles',
            name: 'Circles',
            lessons: [
              { id: 'circ-1', name: 'Working out circumference' },
              { id: 'circ-2', name: 'Working out the length of an arc' },
              { id: 'circ-3', name: 'Calculating the perimeter of a sector' },
              { id: 'circ-4', name: 'Area of a circle' },
              { id: 'circ-5', name: 'Area of a sector of a circle' }
            ]
          },
          {
            id: 'area',
            name: 'Area',
            lessons: [
              { id: 'area-1', name: 'Surface area of cubes and cuboids' },
              { id: 'area-2', name: 'Surface area of cylinders' },
              { id: 'area-3', name: 'Surface area of a triangular prism' },
              { id: 'area-4', name: 'Area of irregular shapes' }
            ]
          },
          {
            id: 'money',
            name: 'Money',
            lessons: [
              { id: 'money-1', name: 'Identifying interest and principal' },
              { id: 'money-2', name: 'Simple interest' },
              { id: 'money-3', name: 'Compound interest' },
              { id: 'money-4', name: 'Appreciation and Depreciation' },
              { id: 'money-5', name: 'Hire Purchase' }
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
        id: 'numbers',
        name: 'NUMBERS',
        subStrands: [
          {
            id: 'integers',
            name: 'Integers',
            lessons: [
              { id: 'int-1', name: 'Addition and subtraction operations of integers' },
              { id: 'int-2', name: 'Multiplication operations on integers' },
              { id: 'int-3', name: 'Division operations on integers' },
              { id: 'int-4', name: 'Combined operations on integers (BODMAS)' },
              { id: 'int-5', name: 'Application of integers in real life situations' }
            ]
          },
          {
            id: 'cubes',
            name: 'Cubes and Cube Roots',
            lessons: [
              { id: 'cube-1', name: 'Concept of cube and cube roots (stacks)' },
              { id: 'cube-2', name: 'Cubes of numbers by multiplication' },
              { id: 'cube-3', name: 'Cubes of numbers from mathematical tables' },
              { id: 'cube-4', name: 'Cube roots of numbers by factor method' },
              { id: 'cube-5', name: 'Cube roots of numbers from mathematical tables' },
              { id: 'cube-6', name: 'Cube and cube roots using calculators' },
              { id: 'cube-7', name: 'Application of cubes and cube roots in real life' }
            ]
          },
          {
            id: 'indices',
            name: 'Indices and Logarithms',
            lessons: [
              { id: 'ind-1', name: 'Expressing numbers in index form' },
              { id: 'ind-2', name: 'Laws of indices' },
              { id: 'ind-3', name: 'Application of laws of indices' },
              { id: 'ind-4', name: 'Powers of 10 and common logarithms' },
              { id: 'ind-5', name: 'Common logarithms using calculators and tables' }
            ]
          },
          {
            id: 'proportions',
            name: 'Compound Proportions and Rates of Work',
            lessons: [
              { id: 'prop-1', name: 'Dividing quantities into proportional parts' },
              { id: 'prop-2', name: 'Ratios and relationships between quantities' },
              { id: 'prop-3', name: 'Compound proportions using ratio method' },
              { id: 'prop-4', name: 'Rates of work' },
              { id: 'prop-5', name: 'Solving problems involving rates of work' }
            ]
          }
        ]
      },
      {
        id: 'algebra',
        name: 'ALGEBRA',
        subStrands: [
          {
            id: 'matrices',
            name: 'Matrices',
            lessons: [
              { id: 'mat-1', name: 'Introduction to Matrices' },
              { id: 'mat-2', name: 'Order of a matrix' },
              { id: 'mat-3', name: 'Position of items in a matrix' },
              { id: 'mat-4', name: 'Compatibility of matrices' },
              { id: 'mat-5', name: 'Addition of matrices' },
              { id: 'mat-6', name: 'Subtraction of matrices' },
              { id: 'mat-7', name: 'Uses of matrices in real life' }
            ]
          },
          {
            id: 'straight-lines',
            name: 'Equations of Straight Lines',
            lessons: [
              { id: 'sl-1', name: 'Gradient of a line' },
              { id: 'sl-2', name: 'Gradient of a line from two known points' },
              { id: 'sl-3', name: 'Equation of a straight line given two points' },
              { id: 'sl-4', name: 'Equation of a straight line given point and gradient' },
              { id: 'sl-5', name: 'Equations of straight lines in form y=mx+c' },
              { id: 'sl-6', name: 'Interpreting y=mx+c in real life situations' },
              { id: 'sl-7', name: 'Determining x-intercept of a straight line' },
              { id: 'sl-8', name: 'Determining y-intercept of a straight line' },
              { id: 'sl-9', name: 'Uses of equations of straight lines' }
            ]
          },
          {
            id: 'linear-ineq',
            name: 'Linear Inequalities',
            lessons: [
              { id: 'lineq-1', name: 'Linear inequalities in resource distribution' },
              { id: 'lineq-2', name: 'Solving linear inequalities in one unknown' },
              { id: 'lineq-3', name: 'Representing linear inequalities in one unknown graphically' },
              { id: 'lineq-4', name: 'Solving linear inequalities in two unknowns' },
              { id: 'lineq-5', name: 'Representing linear inequalities in two unknowns graphically' },
              { id: 'lineq-6', name: 'Uses of linear inequalities in real life' }
            ]
          }
        ]
      }
    ]
  }
];

const PRE_TECHNICAL_CURRICULUM: GradeCurriculum[] = [
  // ... (Grade 7 and 8 content remains same)
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
      // ... (Rest of Grade 7)
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
      // ... (Rest of Grade 8)
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
          // ... (Rest of Grade 9)
        ]
      }
    ]
  }
];

const SOCIAL_STUDIES_CURRICULUM: GradeCurriculum[] = [
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
      // ... (Rest of Grade 7)
    ]
  },
  {
    id: 'grade-8',
    name: 'Grade 8',
    strands: [
      {
        id: 'personal-management',
        name: 'Personal Management',
        subStrands: [
          {
            id: 'goals-esteem',
            name: 'Goals, Self-esteem & Resilience',
            lessons: [
              { id: 'pg-1', name: 'Personal Goal setting' },
              { id: 'pg-2', name: 'Building Self-esteem' },
              { id: 'pg-3', name: 'Emotional Care' },
              { id: 'pg-4', name: 'Healthy Coping Mechanisms (Stress)' },
              { id: 'pg-5', name: 'Resilience in daily life' },
              { id: 'pg-6', name: 'Risky Behaviors' },
              { id: 'pg-7', name: 'Personality Tests' }
            ]
          }
        ]
      },
      {
        id: 'people-pop',
        name: 'People and Population',
        subStrands: [
          {
            id: 'human-origin',
            name: 'Human Origin',
            lessons: [
              { id: 'ho-1', name: 'Scientific Theory about Human Origin' },
              { id: 'ho-2', name: 'Importance of fossil records in Africa' },
              { id: 'ho-3', name: 'Location of human remains in Africa' },
              { id: 'ho-4', name: 'Evolution and common humanity' }
            ]
          }
        ]
      },
      {
        id: 'civilization',
        name: 'Early Civilization',
        subStrands: [
          {
            id: 'ancient-kingdoms',
            name: 'Ancient Kingdoms',
            lessons: [
              { id: 'ak-1', name: 'Ancient Kingdom of Egypt' },
              { id: 'ak-2', name: 'The Great Zimbabwe' },
              { id: 'ak-3', name: 'The Kingdom Kongo' }
            ]
          },
          {
            id: 'early-visitors',
            name: 'Early Visitors',
            lessons: [
              { id: 'ev-1', name: 'Origin of early visitors to East Coast' },
              { id: 'ev-2', name: 'Swahili civilization along East African Coast' },
              { id: 'ev-3', name: 'Contribution of early civilizations to modern world' }
            ]
          }
        ]
      },
      {
        id: 'slave-trade',
        name: 'Trans Saharan Slave Trade',
        subStrands: [
          {
            id: 'trade',
            name: 'Trade',
            lessons: [
              { id: 'st-1', name: 'Factors leading to Trans-Saharan slave trade' },
              { id: 'st-2', name: 'Organization of Trans-Saharan slave trade' },
              { id: 'st-3', name: 'Effects of Trans Saharan slave trade' },
              { id: 'st-4', name: 'Promoting social justice (Eradication)' }
            ]
          }
        ]
      },
      {
        id: 'population',
        name: 'Population Growth In Africa',
        subStrands: [
          {
            id: 'demographics',
            name: 'Demographics',
            lessons: [
              { id: 'dm-1', name: 'Causes and effects of population growth' },
              { id: 'dm-2', name: 'Types and effects of migration' },
              { id: 'dm-3', name: 'Demographic trends in Kenya' }
            ]
          }
        ]
      },
      {
        id: 'photograph',
        name: 'Photograph Work',
        subStrands: [
          {
            id: 'analysis',
            name: 'Analysis',
            lessons: [
              { id: 'ph-1', name: 'Types of photographs' },
              { id: 'ph-2', name: 'Uses of photographs' },
              { id: 'ph-3', name: 'Parts of a photograph' },
              { id: 'ph-4', name: 'Interpreting physical features and human activities' }
            ]
          }
        ]
      },
      {
        id: 'relationships',
        name: 'Interpersonal Relationship Skills',
        subStrands: [
          {
            id: 'diversity',
            name: 'Diversity',
            lessons: [
              { id: 'dv-1', name: 'Socio-cultural Diversity and Inclusion (Kenya)' },
              { id: 'dv-2', name: 'Celebrating socio-cultural diversities' },
              { id: 'dv-3', name: 'Promoting respect for diversity' }
            ]
          },
          {
            id: 'healthy-relations',
            name: 'Healthy Relationships',
            lessons: [
              { id: 'hr-1', name: 'Effects of relationships on self and others' },
              { id: 'hr-2', name: 'Building healthy relationships' },
              { id: 'hr-3', name: 'Levels of Communication' }
            ]
          },
          {
            id: 'assertiveness',
            name: 'Assertiveness & Empathy',
            lessons: [
              { id: 'ae-1', name: 'Determinants of Assertiveness' },
              { id: 'ae-2', name: 'Nurturing Empathy' },
              { id: 'ae-3', name: 'Negative Peer Influence' }
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
          }
        ]
      },
      // ... (Rest of Grade 9)
    ]
  }
];

const CREATIVE_ARTS_CURRICULUM: GradeCurriculum[] = [
  {
    id: 'grade-7',
    name: 'Grade 7',
    strands: [
      {
        id: 'visual-arts',
        name: 'Visual Arts',
        subStrands: [
          {
            id: 'drawing',
            name: 'Drawing',
            lessons: [
              { id: 'va-1', name: 'Elements of Art: Line, Shape, Form' },
              { id: 'va-2', name: 'Principles of Art: Balance, Proportion' },
              { id: 'va-3', name: 'Drawing from observation' },
              { id: 'va-4', name: 'Imaginative drawing' }
            ]
          },
          {
            id: 'painting',
            name: 'Painting',
            lessons: [
              { id: 'pt-1', name: 'Colour mixing' },
              { id: 'pt-2', name: 'Tonal variation in painting' }
            ]
          }
        ]
      },
      {
        id: 'performing-arts',
        name: 'Performing Arts',
        subStrands: [
          {
            id: 'music',
            name: 'Music',
            lessons: [
              { id: 'mu-1', name: 'Types of songs' },
              { id: 'mu-2', name: 'Singing technique' },
              { id: 'mu-3', name: 'Kenyan indigenous instruments' }
            ]
          },
          {
            id: 'dance',
            name: 'Dance',
            lessons: [
              { id: 'da-1', name: 'Elements of dance' },
              { id: 'da-2', name: 'Folk dances of Kenya' }
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
        id: 'foundations',
        name: 'Foundations of Creative Arts',
        subStrands: [
          {
            id: 'intro',
            name: 'Introduction',
            lessons: [
              { id: 'in-1', name: 'Roles of Creative Arts and Sports in society' },
              { id: 'in-2', name: 'Making a storyboard (Roles)' }
            ]
          },
          {
            id: 'components',
            name: 'Components',
            lessons: [
              { id: 'cp-1', name: 'Principles of Visual art (Dominance and Proportion)' },
              { id: 'cp-2', name: 'Elements of play' },
              { id: 'cp-3', name: 'Endurance and agility components of fitness' },
              { id: 'cp-4', name: 'Elements of music (Pitch and Rhythm)' },
              { id: 'cp-5', name: 'Elements of dance' }
            ]
          }
        ]
      },
      {
        id: 'creating',
        name: 'Creating and Performing',
        subStrands: [
          {
            id: 'rhythm',
            name: 'Composing Rhythm',
            lessons: [
              { id: 'rh-1', name: 'Composing four-bar rhythm (3-4 time)' },
              { id: 'rh-2', name: 'Identifying rhythmic patterns in 3-4 time' },
              { id: 'rh-3', name: 'Writing rhythmic patterns in 3-4 time' }
            ]
          },
          {
            id: 'athletics-mosaic',
            name: 'Athletics & Mosaic',
            lessons: [
              { id: 'am-1', name: 'Middle distance races (Athletics)' },
              { id: 'am-2', name: 'Photomontage characteristics (Mosaic)' },
              { id: 'am-3', name: 'Creating a photomontage of athletes' },
              { id: 'am-4', name: 'Performing middle distance skills' }
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
        name: 'Foundation of Creative Arts',
        subStrands: [
          {
            id: 'careers',
            name: 'Careers',
            lessons: [
              { id: 'ca-1', name: 'Careers in Creative Arts and Sports' },
              { id: 'ca-2', name: 'Roles of personnel in Creative Arts Spaces' },
              { id: 'ca-3', name: 'Entrepreneurial opportunities in Creative Arts' },
              { id: 'ca-4', name: 'Entrepreneurial opportunities in Sports' },
              { id: 'ca-5', name: 'Talents and career interest' }
            ]
          },
          {
            id: 'components',
            name: 'Components',
            lessons: [
              { id: 'co-1', name: 'Elements of a Play' },
              { id: 'co-2', name: 'Performing a short Play' },
              { id: 'co-3', name: 'Physical Fitness (Power and reaction time)' },
              { id: 'co-4', name: 'Activities for power and reaction time' },
              { id: 'co-5', name: 'Rhythm (Dotted notes and rests)' },
              { id: 'co-6', name: 'Note extension (Dots and ties)' },
              { id: 'co-7', name: 'Pitches on the grand stave' },
              { id: 'co-8', name: 'Scale of F major' }
            ]
          }
        ]
      },
      {
        id: 'creating',
        name: 'Creating and Performing',
        subStrands: [
          {
            id: 'drawing',
            name: 'Drawing and Painting',
            lessons: [
              { id: 'dp-1', name: 'Harmony/Unity in pictures' },
              { id: 'dp-2', name: 'Colour harmony, mood and texture' },
              { id: 'dp-3', name: 'Analogous colours' },
              { id: 'dp-4', name: 'Colour gradation strip' },
              { id: 'dp-5', name: 'Brush stroke technique (Wash)' },
              { id: 'dp-6', name: 'Scenery composition painting' },
              { id: 'dp-7', name: 'Portfolios of scenery composition' }
            ]
          },
          {
            id: 'rhythm',
            name: 'Rhythm',
            lessons: [
              { id: 'rh-1', name: 'Effects of note extension' },
              { id: 'rh-2', name: 'Note values and durations' },
              { id: 'rh-3', name: '4/4 time signature' },
              { id: 'rh-4', name: 'Composing four-bar rhythmic pattern in 4/4' },
              { id: 'rh-5', name: 'Notating four-bar rhythms' },
              { id: 'rh-6', name: 'Sight reading rhythms' },
              { id: 'rh-7', name: 'Grouping notes in 4/4 time' },
              { id: 'rh-8', name: 'Improvising rhythmic patterns' },
              { id: 'rh-9', name: 'Portfolios of rhythmic patterns' }
            ]
          },
          {
            id: 'athletics-mosaic',
            name: 'Athletics and Mosaic',
            lessons: [
              { id: 'am-1', name: 'Phases in Triple jump' },
              { id: 'am-2', name: 'Performing Triple jump' },
              { id: 'am-3', name: 'Long distance races types' },
              { id: 'am-4', name: 'Techniques for long distance running' },
              { id: 'am-5', name: 'Performing long distance races' },
              { id: 'am-6', name: 'Characteristics of Mosaic' },
              { id: 'am-7', name: 'Materials and tools for mosaic' },
              { id: 'am-8', name: 'Sketching for mosaic (Athletics theme)' },
              { id: 'am-9', name: 'Creating Mosaic pictorial composition' },
              { id: 'am-10', name: 'Presenting mosaic composition' }
            ]
          },
          {
            id: 'melody',
            name: 'Melody',
            lessons: [
              { id: 'ml-1', name: 'Types of musical variation' },
              { id: 'ml-2', name: 'Variation in composing melody' },
              { id: 'ml-3', name: 'Structure of melodies in F major' },
              { id: 'ml-4', name: 'Composing four-bar melody in F major' },
              { id: 'ml-5', name: 'Notating four-bar melodies' },
              { id: 'ml-6', name: 'Performing melodies in F major' }
            ]
          }
        ]
      }
    ]
  }
];

const KISWAHILI_CURRICULUM: GradeCurriculum[] = [
  { id: 'grade-7', name: 'Grade 7', strands: [] },
  { id: 'grade-8', name: 'Grade 8', strands: [] },
  { id: 'grade-9', name: 'Grade 9', strands: [] }
];

const CRE_CURRICULUM: GradeCurriculum[] = [
  { id: 'grade-7', name: 'Grade 7', strands: [] },
  { id: 'grade-8', name: 'Grade 8', strands: [] },
  { id: 'grade-9', name: 'Grade 9', strands: [] }
];

const AGRICULTURE_CURRICULUM: GradeCurriculum[] = [
  { id: 'grade-7', name: 'Grade 7', strands: [] },
  { id: 'grade-8', name: 'Grade 8', strands: [] },
  { id: 'grade-9', name: 'Grade 9', strands: [] }
];

const INTEGRATED_SCIENCE_CURRICULUM: GradeCurriculum[] = [
  { id: 'grade-7', name: 'Grade 7', strands: [] },
  { id: 'grade-8', name: 'Grade 8', strands: [] },
  { id: 'grade-9', name: 'Grade 9', strands: [] }
];

const ENGLISH_CURRICULUM: GradeCurriculum[] = [
  { id: 'grade-7', name: 'Grade 7', strands: [] },
  { id: 'grade-8', name: 'Grade 8', strands: [] },
  { id: 'grade-9', name: 'Grade 9', strands: [] }
];

const IRE_CURRICULUM: GradeCurriculum[] = [
  { id: 'grade-7', name: 'Grade 7', strands: [] },
  { id: 'grade-8', name: 'Grade 8', strands: [] },
  { id: 'grade-9', name: 'Grade 9', strands: [] }
];

export const SUBJECT_CURRICULA: Record<string, GradeCurriculum[]> = {
  "Mathematics": MATHS_CURRICULUM,
  "Pre-Technical Studies": PRE_TECHNICAL_CURRICULUM,
  "Social Studies": SOCIAL_STUDIES_CURRICULUM,
  "Kiswahili": KISWAHILI_CURRICULUM,
  "CRE": CRE_CURRICULUM,
  "Agriculture": AGRICULTURE_CURRICULUM,
  "Creative Arts": CREATIVE_ARTS_CURRICULUM,
  "Integrated Science": INTEGRATED_SCIENCE_CURRICULUM,
  "English": ENGLISH_CURRICULUM,
  "IRE": IRE_CURRICULUM
};

export const CURRICULUM_DATA = MATHS_CURRICULUM;
