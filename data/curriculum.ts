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

const CRE_CURRICULUM: GradeCurriculum[] = [
  {
    id: 'grade-7',
    name: 'Grade 7',
    strands: [
      {
        id: 'intro-cre',
        name: 'Introduction to CRE',
        subStrands: [
          {
            id: 'importance',
            name: 'Importance of Studying CRE',
            lessons: [
              { id: 'ic-1', name: 'Meaning of Christian Religious Education' },
              { id: 'ic-2', name: 'Importance of learning CRE' },
              { id: 'ic-3', name: 'Promoting moral and religious values' },
              { id: 'ic-4', name: 'Fostering harmonious living' }
            ]
          }
        ]
      },
      {
        id: 'creation',
        name: 'Creation',
        subStrands: [
          {
            id: 'biblical-accounts',
            name: 'Biblical Accounts of Creation',
            lessons: [
              { id: 'ba-1', name: 'First account of creation' },
              { id: 'ba-2', name: 'Second account of creation' },
              { id: 'ba-3', name: 'Similarities and differences between accounts' },
              { id: 'ba-4', name: 'Attributes of God from creation accounts' },
              { id: 'ba-5', name: 'Appreciating God\'s creation' }
            ]
          },
          {
            id: 'animals',
            name: 'Responsibility Over Animals/Plants',
            lessons: [
              { id: 'an-1', name: 'Responsibility over animals, fish and birds' },
              { id: 'an-2', name: 'Protecting animals, fish and birds' },
              { id: 'an-3', name: 'Practising good stewardship' },
              { id: 'an-4', name: 'Desire to take care of creation' },
              { id: 'an-5', name: 'Responsibilities over plants' },
              { id: 'an-6', name: 'Caring for plants to conserve environment' },
              { id: 'an-7', name: 'Plants and economic growth' },
              { id: 'an-8', name: 'Plants and healthy ecosystem' }
            ]
          },
          {
            id: 'resources',
            name: 'Use and Misuse of Resources',
            lessons: [
              { id: 'rs-1', name: 'Use and misuse of natural resources' },
              { id: 'rs-2', name: 'Effects of misusing natural resources' },
              { id: 'rs-3', name: 'Biblical teaching on good use of creation' },
              { id: 'rs-4', name: 'Conserving environment as responsible citizens' }
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
        id: 'creation',
        name: 'Creation',
        subStrands: [
          {
            id: 'origin-sin',
            name: 'Origin of Sin',
            lessons: [
              { id: 'os-1', name: 'Origin of sin (Genesis 3)' },
              { id: 'os-2', name: 'Consequences of sin' },
              { id: 'os-3', name: 'Causes of sin today' },
              { id: 'os-4', name: 'Overcoming temptations' }
            ]
          },
          {
            id: 'gods-love',
            name: 'God\'s Love for Man (Redemption)',
            lessons: [
              { id: 'gl-1', name: 'God\'s plan of salvation (Demonstration of love)' },
              { id: 'gl-2', name: 'Fulfilment through Jesus Christ' },
              { id: 'gl-3', name: 'Importance of redemption' },
              { id: 'gl-4', name: 'Sharing God\'s love' }
            ]
          }
        ]
      },
      {
        id: 'bible',
        name: 'The Bible',
        subStrands: [
          {
            id: 'abraham-call',
            name: 'Call of Abraham',
            lessons: [
              { id: 'ac-1', name: 'Background to the call' },
              { id: 'ac-2', name: 'Abraham\'s demonstration of faith' },
              { id: 'ac-3', name: 'Application of faith' },
              { id: 'ac-4', name: 'God\'s promises to Abraham' },
              { id: 'ac-5', name: 'Importance of faith' }
            ]
          },
          {
            id: 'abraham-covenant',
            name: 'God\'s Covenant with Abraham',
            lessons: [
              { id: 'gc-1', name: 'Meaning of covenant' },
              { id: 'gc-2', name: 'Covenants today (Modern vs Traditional)' },
              { id: 'gc-3', name: 'Characteristics of Godly/Ungodly covenants' },
              { id: 'gc-4', name: 'Importance of God\'s covenant with Abraham' },
              { id: 'gc-5', name: 'Circumcision of Abraham' }
            ]
          },
          {
            id: 'israel-leadership',
            name: 'Leadership in Israel',
            lessons: [
              { id: 'li-1', name: 'Reasons for kingship' },
              { id: 'li-2', name: 'Reasons against kingship' },
              { id: 'li-3', name: 'King Saul\'s failures' },
              { id: 'li-4', name: 'Good leadership (Lessons from Saul)' },
              { id: 'li-5', name: 'Leadership in school and home' },
              { id: 'li-6', name: 'Leadership in the community' }
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
        id: 'creation',
        name: 'Creation',
        subStrands: [
          {
            id: 'work',
            name: 'Work: God Worked',
            lessons: [
              { id: 'wk-1', name: 'Meaning and reasons for work' },
              { id: 'wk-2', name: 'Biblical teachings on work' },
              { id: 'wk-3', name: 'Virtues related to Christian work ethics' },
              { id: 'wk-4', name: 'Career paths based on talents/gifts' },
              { id: 'wk-5', name: 'Requirements for different careers' },
              { id: 'wk-6', name: 'Positive attitude towards work' }
            ]
          }
        ]
      },
      {
        id: 'bible',
        name: 'The Bible',
        subStrands: [
          {
            id: 'sexual-purity',
            name: 'Christian Moral Values: Sexual Purity',
            lessons: [
              { id: 'sp-1', name: 'Moral values to overcome sexual sins' },
              { id: 'sp-2', name: 'Forbidden sexual practices' },
              { id: 'sp-3', name: 'Ways of avoiding forbidden sexual practices' },
              { id: 'sp-4', name: 'Skit on overcoming sexual perversity' },
              { id: 'sp-5', name: 'Moral values/life skills to overcome sexual perversity' },
              { id: 'sp-6', name: 'Reasons for maintaining sexual purity' }
            ]
          },
          {
            id: 'deborah',
            name: 'Woman Judge: Deborah',
            lessons: [
              { id: 'db-1', name: 'Women leaders and leadership qualities' },
              { id: 'db-2', name: 'Story of Judge Deborah' },
              { id: 'db-3', name: 'Leadership qualities of Deborah' },
              { id: 'db-4', name: 'Lessons from Deborah\'s leadership' }
            ]
          },
          {
            id: 'david-solomon',
            name: 'Kings David and Solomon',
            lessons: [
              { id: 'ds-1', name: 'David as ancestor of Jesus' },
              { id: 'ds-2', name: 'Importance of David as King' },
              { id: 'ds-3', name: 'Characteristics of a good leader' },
              { id: 'ds-4', name: 'Leadership qualities from King David' },
              { id: 'ds-5', name: 'King Solomon\'s achievements' },
              { id: 'ds-6', name: 'Failures of King Solomon' },
              { id: 'ds-7', name: 'Solomon\'s wisdom (Role play)' },
              { id: 'ds-8', name: 'Qualities for choosing leaders' }
            ]
          }
        ]
      },
      {
        id: 'jesus-ministry',
        name: 'The Life and Ministry of Jesus Christ',
        subStrands: [
          {
            id: 'widow-son',
            name: 'Raising the Widow\'s Son',
            lessons: [
              { id: 'ws-1', name: 'Challenges faced by families (Grief)' },
              { id: 'ws-2', name: 'Events in raising widow\'s son' },
              { id: 'ws-3', name: 'Lessons from the miracle' },
              { id: 'ws-4', name: 'Showing compassion' },
              { id: 'ws-5', name: 'Importance of believing in resurrection' }
            ]
          },
          {
            id: 'ten-lepers',
            name: 'Healing the 10 Lepers',
            lessons: [
              { id: 'tl-1', name: 'Events in healing 10 lepers' },
              { id: 'tl-2', name: 'Role play healing of 10 lepers' },
              { id: 'tl-3', name: 'Lessons from healing 10 lepers' },
              { id: 'tl-4', name: 'Showing gratitude' },
              { id: 'tl-5', name: 'Demonstrating faith' }
            ]
          },
          {
            id: 'prayer-parable',
            name: 'Parable on Prayer: A Friend at Midnight',
            lessons: [
              { id: 'pp-1', name: 'Describe the parable' },
              { id: 'pp-2', name: 'Role play the parable' },
              { id: 'pp-3', name: 'Lessons from the parable' },
              { id: 'pp-4', name: 'Reasons for praying at all times' }
            ]
          },
          {
            id: 'nicodemus',
            name: 'Nicodemus\' Encounter with Jesus Christ',
            lessons: [
              { id: 'ne-1', name: 'Describe the encounter (John 3:1-16)' },
              { id: 'ne-2', name: 'Significance of bronze serpent' }
            ]
          }
        ]
      }
    ]
  }
];

const AGRICULTURE_CURRICULUM: GradeCurriculum[] = [
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

const ENGLISH_CURRICULUM: GradeCurriculum[] = [
  {
    id: 'grade-7',
    name: 'Grade 7',
    strands: [
      {
        id: 'personal-responsibility',
        name: 'Personal Responsibility',
        subStrands: [
          {
            id: 'conversational-skills',
            name: 'Conversational Skills',
            lessons: [
              { id: 'cs-1', name: 'Self-introduction and polite language' },
              { id: 'cs-2', name: 'Polite language in dialogue' },
              { id: 'cs-3', name: 'Introducing others politely' },
              { id: 'cs-4', name: 'Practicing introductions (Game)' }
            ]
          },
          {
            id: 'independent-reading',
            name: 'Independent Reading',
            lessons: [
              { id: 'ir-1', name: 'Selecting reading materials and reference skills' },
              { id: 'ir-2', name: 'Reading dialogue and answering questions' }
            ]
          },
          {
            id: 'nouns',
            name: 'Word Classes: Nouns',
            lessons: [
              { id: 'n-1', name: 'Proper and Common Nouns' },
              { id: 'n-2', name: 'Abstract and Concrete Nouns' },
              { id: 'n-3', name: 'Using nouns in conversation and puzzles' }
            ]
          },
          {
            id: 'trickster-narratives',
            name: 'Trickster Narratives',
            lessons: [
              { id: 'tn-1', name: 'Reading Trickster Narratives (King Lion Resigns)' }
            ]
          },
          {
            id: 'handwriting',
            name: 'Handwriting',
            lessons: [
              { id: 'hw-1', name: 'Legibility and Neatness' }
            ]
          }
        ]
      },
      {
        id: 'science-health',
        name: 'Science and Health Education',
        subStrands: [
          {
            id: 'oral-presentation',
            name: 'Oral Presentation',
            lessons: [
              { id: 'op-1', name: 'Features of Oral Narratives (Greedy Hyena)' },
              { id: 'op-2', name: 'Making oral narratives interesting' },
              { id: 'op-3', name: 'Performing oral narratives' }
            ]
          },
          {
            id: 'simple-poems',
            name: 'Simple Poems',
            lessons: [
              { id: 'sp-1', name: 'Reading simple poems (Structure)' },
              { id: 'sp-2', name: 'Reciting poems' }
            ]
          },
          {
            id: 'nouns-count',
            name: 'Word Classes: Nouns',
            lessons: [
              { id: 'nc-1', name: 'Count and Non-count Nouns' },
              { id: 'nc-2', name: 'Using Count and Non-count Nouns' },
              { id: 'nc-3', name: 'Singular and Plural Nouns' }
            ]
          },
          {
            id: 'class-readers',
            name: 'Class Readers',
            lessons: [
              { id: 'cr-1', name: 'Introduction to Class Readers' }
            ]
          },
          {
            id: 'punctuation',
            name: 'Punctuation Marks',
            lessons: [
              { id: 'pm-1', name: 'Identifying punctuation marks in dialogue' },
              { id: 'pm-2', name: 'Punctuating sentences' }
            ]
          }
        ]
      },
      {
        id: 'hygiene',
        name: 'Hygiene',
        subStrands: [
          {
            id: 'listening-info',
            name: 'Listening for Information',
            lessons: [
              { id: 'li-1', name: 'Listening for main ideas' },
              { id: 'li-2', name: 'Listening to instructions (Video)' },
              { id: 'li-3', name: 'Reading for main ideas (Passage)' }
            ]
          },
          {
            id: 'reading-info',
            name: 'Reading for Information',
            lessons: [
              { id: 'ri-1', name: 'Reading strategies (Skimming/Scanning)' },
              { id: 'ri-2', name: 'Reading for details (Feet Hygiene)' }
            ]
          },
          {
            id: 'verbs-tense',
            name: 'Word Classes: Verbs',
            lessons: [
              { id: 'vt-1', name: 'Regular and Irregular Verbs' },
              { id: 'vt-2', name: 'Using verbs in sentences' },
              { id: 'vt-3', name: 'Verbs in conversation and games' }
            ]
          },
          {
            id: 'poetry',
            name: 'Poetry',
            lessons: [
              { id: 'po-1', name: 'Reading poetry (I Thank Thee, Mother)' },
              { id: 'po-2', name: 'Features of poetry (Dreams)' }
            ]
          },
          {
            id: 'narrative-paragraph',
            name: 'Narrative Paragraph',
            lessons: [
              { id: 'np-1', name: 'Writing a narrative paragraph' }
            ]
          }
        ]
      },
      {
        id: 'leadership',
        name: 'Leadership',
        subStrands: [
          {
            id: 'listening-comp',
            name: 'Listening Comprehension',
            lessons: [
              { id: 'lc-1', name: 'Specific vs General information' },
              { id: 'lc-2', name: 'Listening for qualities (Class Secretary)' },
              { id: 'lc-3', name: 'Listening for details (Nelson Mandela)' }
            ]
          },
          {
            id: 'intensive-reading',
            name: 'Intensive Reading',
            lessons: [
              { id: 'ir-1', name: 'Identifying main ideas (Gender Roles)' },
              { id: 'ir-2', name: 'Using Mind Maps' },
              { id: 'ir-3', name: 'Reading biographies (Wangari Maathai)' }
            ]
          },
          {
            id: 'verbs-tense-2',
            name: 'Verbs and Tense',
            lessons: [
              { id: 'vt-4', name: 'Present and Past Tense verbs' },
              { id: 'vt-5', name: 'Using present and past tense' }
            ]
          },
          {
            id: 'class-readers-2',
            name: 'Class Readers',
            lessons: [
              { id: 'cr-2', name: 'Character analysis (I am Married)' }
            ]
          },
          {
            id: 'paragraphing',
            name: 'Paragraphing',
            lessons: [
              { id: 'pg-1', name: 'Using examples and incidents' },
              { id: 'pg-2', name: 'Using Mind Maps for paragraphs' }
            ]
          }
        ]
      },
      {
        id: 'family',
        name: 'Family',
        subStrands: [
          {
            id: 'pronunciation',
            name: 'Pronunciation',
            lessons: [
              { id: 'pr-1', name: 'Sounds /p/ and /b/' },
              { id: 'pr-2', name: 'Sounds /i/ and /ee/' },
              { id: 'pr-3', name: 'Sound /oat/' }
            ]
          },
          {
            id: 'synonyms-antonyms',
            name: 'Synonyms and Antonyms',
            lessons: [
              { id: 'sa-1', name: 'Introduction to Synonyms and Antonyms' },
              { id: 'sa-2', name: 'Using a Thesaurus' },
              { id: 'sa-3', name: 'Identifying Synonyms and Antonyms in text' }
            ]
          },
          {
            id: 'comparatives',
            name: 'Comparatives and Superlatives',
            lessons: [
              { id: 'cs-1', name: 'Comparative and Superlative Adjectives' },
              { id: 'cs-2', name: 'Using comparatives and superlatives' }
            ]
          },
          {
            id: 'oral-narratives',
            name: 'Oral Narratives: Legends',
            lessons: [
              { id: 'on-1', name: 'Introduction to Legends' },
              { id: 'on-2', name: 'Reading Legends (Mango Saves His Community)' }
            ]
          },
          {
            id: 'friendly-letter',
            name: 'Friendly Letter',
            lessons: [
              { id: 'fl-1', name: 'Parts of a friendly letter' }
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
        id: 'human-rights',
        name: 'Human Rights',
        subStrands: [
          {
            id: 'polite-language',
            name: 'Listening and Speaking - Polite Language',
            lessons: [
              { id: 'pl-1', name: 'Polite words in telephone conversations' },
              { id: 'pl-2', name: 'Telephone etiquette' }
            ]
          },
          {
            id: 'extensive-reading',
            name: 'Reading - Extensive Reading',
            lessons: [
              { id: 'er-1', name: 'Independent reading strategies' }
            ]
          },
          {
            id: 'compound-nouns',
            name: 'Grammar - Compound Nouns',
            lessons: [
              { id: 'cn-1', name: 'Meaning and examples of compound nouns' },
              { id: 'cn-2', name: 'Using compound nouns in sentences' }
            ]
          },
          {
            id: 'handwriting',
            name: 'Writing - Handwriting',
            lessons: [
              { id: 'hw-1', name: 'Legibility and neatness' }
            ]
          },
          {
            id: 'short-stories',
            name: 'Reading - Short Stories',
            lessons: [
              { id: 'ss-1', name: 'Sequence of events' },
              { id: 'ss-2', name: 'Inferring meaning and answering questions' }
            ]
          }
        ]
      },
      {
        id: 'scientific-innovation',
        name: 'Scientific Innovation',
        subStrands: [
          {
            id: 'collective-nouns',
            name: 'Grammar - Collective Nouns',
            lessons: [
              { id: 'cln-1', name: 'Definition and examples' },
              { id: 'cln-2', name: 'Plurals of collective nouns' }
            ]
          },
          {
            id: 'oral-presentation',
            name: 'Listening and Speaking - Oral Presentation',
            lessons: [
              { id: 'op-1', name: 'Features of songs' },
              { id: 'op-2', name: 'Performance techniques and writing songs' }
            ]
          },
          {
            id: 'simple-poems',
            name: 'Reading - Simple Poems',
            lessons: [
              { id: 'sp-1', name: 'Identifying persona' },
              { id: 'sp-2', name: 'Repetition and meaning' }
            ]
          },
          {
            id: 'mechanics',
            name: 'Writing - Mechanics (Punctuation)',
            lessons: [
              { id: 'mc-1', name: 'Comma, apostrophe, and capital letters' }
            ]
          },
          {
            id: 'short-story-si',
            name: 'Reading - Short Story',
            lessons: [
              { id: 'ss-3', name: 'Time, place, and setting' }
            ]
          },
          {
            id: 'primary-auxiliaries',
            name: 'Grammar - Primary Auxiliaries',
            lessons: [
              { id: 'pa-1', name: 'Identification and usage' }
            ]
          }
        ]
      },
      {
        id: 'pollution',
        name: 'Pollution',
        subStrands: [
          {
            id: 'listening-comp',
            name: 'Listening and Speaking - Listening Comprehension',
            lessons: [
              { id: 'lc-1', name: 'Main idea and specific information (Cause and Effect)' }
            ]
          },
          {
            id: 'intensive-reading',
            name: 'Reading - Intensive Reading',
            lessons: [
              { id: 'ir-1', name: 'Reading skills and answering questions' },
              { id: 'ir-2', name: 'Contextual clues and vocabulary' }
            ]
          },
          {
            id: 'paragraphing',
            name: 'Writing - Paragraphing',
            lessons: [
              { id: 'pr-1', name: 'Sequencing ideas and conjunctions' },
              { id: 'pr-2', name: 'Using conjunctions in paragraphs' }
            ]
          },
          {
            id: 'poetry',
            name: 'Reading - Poetry',
            lessons: [
              { id: 'po-1', name: 'Structure and message' }
            ]
          }
        ]
      },
      {
        id: 'consumer-roles',
        name: 'Consumer Roles and Responsibilities',
        subStrands: [
          {
            id: 'selective-listening',
            name: 'Listening and Speaking - Selective Listening',
            lessons: [
              { id: 'sl-1', name: 'Specific vs General information' }
            ]
          },
          {
            id: 'intensive-reading-cr',
            name: 'Reading - Intensive Reading',
            lessons: [
              { id: 'ir-3', name: 'Reading strategies (Main ideas and details)' }
            ]
          },
          {
            id: 'verbs-tenses',
            name: 'Grammar - Verbs and Tenses',
            lessons: [
              { id: 'vt-1', name: 'Simple present and past tense (Identification)' },
              { id: 'vt-2', name: 'Constructing sentences in present/past tense' }
            ]
          },
          {
            id: 'short-story-cr',
            name: 'Reading - Short Story',
            lessons: [
              { id: 'ss-4', name: 'Characters and character traits' }
            ]
          },
          {
            id: 'paragraphing-cr',
            name: 'Writing - Paragraphing',
            lessons: [
              { id: 'pr-3', name: 'Connectors of sequence (Identification)' },
              { id: 'pr-4', name: 'Using connectors of sequence' }
            ]
          }
        ]
      },
      {
        id: 'relationships-peers',
        name: 'Relationships: Peers',
        subStrands: [
          {
            id: 'pronunciation',
            name: 'Listening and Speaking - Pronunciation',
            lessons: [
              { id: 'pn-1', name: 'Sounds /o/ and /th/' },
              { id: 'pn-2', name: 'Emphatic stress' }
            ]
          },
          {
            id: 'adjectives',
            name: 'Grammar - Adjectives',
            lessons: [
              { id: 'adj-1', name: 'Gradable and non-gradable adjectives (Identification)' },
              { id: 'adj-2', name: 'Using adjectives in sentences' }
            ]
          },
          {
            id: 'study-skills',
            name: 'Reading - Study Skills',
            lessons: [
              { id: 'st-1', name: 'Reference materials (Definition and types)' },
              { id: 'st-2', name: 'Using reference materials (Dictionary, Thesaurus)' }
            ]
          },
          {
            id: 'functional-writing',
            name: 'Writing - Functional Writing',
            lessons: [
              { id: 'fw-1', name: 'Apology Letters' }
            ]
          }
        ]
      },
      {
        id: 'rehabilitation',
        name: 'Rehabilitation',
        subStrands: [
          {
            id: 'short-story-rehab',
            name: 'Reading - Short Story',
            lessons: [
              { id: 'ss-5', name: 'Repetition and dialogue' },
              { id: 'ss-6', name: 'Importance of repetition and dialogue' }
            ]
          },
          {
            id: 'conversational-skills',
            name: 'Listening and Speaking - Conversational Skills',
            lessons: [
              { id: 'cs-1', name: 'Disagreeing politely' }
            ]
          },
          {
            id: 'adverbs',
            name: 'Grammar - Adverbs',
            lessons: [
              { id: 'adv-1', name: 'Adverbs of frequency and degree' }
            ]
          },
          {
            id: 'mechanics-writing',
            name: 'Writing - Mechanics of Writing',
            lessons: [
              { id: 'mw-1', name: 'Spelling (Misspelt words, prefixes, suffixes)' },
              { id: 'mw-2', name: 'Silent vowels and affixes' }
            ]
          },
          {
            id: 'reading-fluency',
            name: 'Reading - Reading Fluency',
            lessons: [
              { id: 'rf-1', name: 'Reading speed and expression' }
            ]
          },
          {
            id: 'listening-detail',
            name: 'Listening and Speaking - Listening for Detail',
            lessons: [
              { id: 'ld-1', name: 'Main ideas in listening text' }
            ]
          },
          {
            id: 'pronouns',
            name: 'Grammar - Pronouns',
            lessons: [
              { id: 'pro-1', name: 'Indefinite and reflexive pronouns' }
            ]
          }
        ]
      },
      {
        id: 'wildlife-conservation',
        name: 'Wildlife Conservation',
        subStrands: [
          {
            id: 'short-story-wild',
            name: 'Reading - Short Story',
            lessons: [
              { id: 'ss-7', name: 'Intensive Reading: Short Story (I think it is time)' },
              { id: 'ss-8', name: 'Short Story: Touring the wild (Characters)' }
            ]
          },
          {
            id: 'composition',
            name: 'Writing - Composition',
            lessons: [
              { id: 'wc-1', name: 'Writing a dialogue' }
            ]
          },
          {
            id: 'visuals',
            name: 'Reading - Intensive Reading (Visuals)',
            lessons: [
              { id: 'vis-1', name: 'Interpreting visuals' },
              { id: 'vis-2', name: 'Visuals and written texts connection' }
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
        id: 'citizenship',
        name: 'Citizenship',
        subStrands: [
          {
            id: 'polite-lang',
            name: 'Listening & Speaking: Polite Language',
            lessons: [
              { id: 'pl-1', name: 'Euphemism: Definition and Usage' },
              { id: 'pl-2', name: 'Conducting a Debate with Politeness' }
            ]
          },
          {
            id: 'independent-reading',
            name: 'Reading: Independent Reading',
            lessons: [
              { id: 'ir-1', name: 'Selecting and Reading Appropriate Texts' }
            ]
          },
          {
            id: 'gender-neutral',
            name: 'Grammar: Gender Neutral Language',
            lessons: [
              { id: 'gn-1', name: 'Identifying Gender Biased Words' },
              { id: 'gn-2', name: 'Using Gender Neutral Words' }
            ]
          },
          {
            id: 'play-structure',
            name: 'Intensive Reading: Play',
            lessons: [
              { id: 'ps-1', name: 'Structure and Setting of a Play' },
              { id: 'ps-2', name: 'Analysing Acts and Scenes' }
            ]
          },
          {
            id: 'legibility',
            name: 'Writing: Legibility and Neatness',
            lessons: [
              { id: 'ln-1', name: 'Indentation and Breaking Words' },
              { id: 'ln-2', name: 'Techniques of Improving Legibility' }
            ]
          }
        ]
      },
      {
        id: 'science-fiction',
        name: 'Science Fiction',
        subStrands: [
          {
            id: 'oral-lit',
            name: 'Listening & Speaking: Oral Literature',
            lessons: [
              { id: 'ol-1', name: 'Characteristics of Short Forms (Riddles, Proverbs)' },
              { id: 'ol-2', name: 'Performing Short Forms' }
            ]
          },
          {
            id: 'simple-poems',
            name: 'Intensive Reading: Simple Poems',
            lessons: [
              { id: 'sp-1', name: 'Style: Repetition and Rhyme' }
            ]
          },
          {
            id: 'nouns-quantifiers',
            name: 'Grammar: Nouns and Quantifiers',
            lessons: [
              { id: 'nq-1', name: 'Quantifiers with Count/Non-count Nouns' },
              { id: 'nq-2', name: 'Differentiating Count and Non-count Nouns' }
            ]
          },
          {
            id: 'play-plot',
            name: 'Intensive Reading: Play (Plot)',
            lessons: [
              { id: 'pp-1', name: 'Identifying Key Events in a Play' }
            ]
          },
          {
            id: 'punctuation',
            name: 'Writing: Mechanics of Writing',
            lessons: [
              { id: 'pm-1', name: 'Punctuation: Double Quotation and Brackets' }
            ]
          }
        ]
      },
      {
        id: 'env-conservation',
        name: 'Environmental Conservation',
        subStrands: [
          {
            id: 'listening-comp',
            name: 'Listening & Speaking: Comprehension',
            lessons: [
              { id: 'lc-1', name: 'Main Idea and Specific Details' },
              { id: 'lc-2', name: 'Inferring Meaning of Unfamiliar Words' }
            ]
          },
          {
            id: 'reading-info',
            name: 'Reading: Reading for Information',
            lessons: [
              { id: 'ri-1', name: 'Identifying Characters and Events' },
              { id: 'ri-2', name: 'Inferring Meaning from Context' }
            ]
          },
          {
            id: 'modal-aux',
            name: 'Grammar: Modal Auxiliaries',
            lessons: [
              { id: 'ma-1', name: 'Functions of Modal Auxiliaries' },
              { id: 'ma-2', name: 'Using Modal Auxiliaries in Sentences' }
            ]
          },
          {
            id: 'poems-structure',
            name: 'Reading: Poems (Structure)',
            lessons: [
              { id: 'ps-1', name: 'Structure and Personification' },
              { id: 'ps-2', name: 'Creating a Poem' }
            ]
          },
          {
            id: 'paragraph-structure',
            name: 'Writing: Paragraph Structure',
            lessons: [
              { id: 'pg-1', name: 'Characteristics of a Well-Formed Paragraph' },
              { id: 'pg-2', name: 'Creating a Coherent Paragraph' }
            ]
          },
          {
            id: 'selective-listening',
            name: 'Listening & Speaking: Selective Listening',
            lessons: [
              { id: 'sl-1', name: 'Selecting Required Information' }
            ]
          },
          {
            id: 'intensive-reading',
            name: 'Reading: Intensive Reading',
            lessons: [
              { id: 'ir-1', name: 'Predicting and Answering Questions' },
              { id: 'ir-2', name: 'Note Taking Skills' }
            ]
          },
          {
            id: 'perfect-aspect',
            name: 'Grammar: Perfect Aspect',
            lessons: [
              { id: 'pa-1', name: 'Present Perfect Aspect' },
              { id: 'pa-2', name: 'Past Perfect Aspect' }
            ]
          },
          {
            id: 'play-characters',
            name: 'Intensive Reading: Play (Characters)',
            lessons: [
              { id: 'pc-1', name: 'Describing Characters' },
              { id: 'pc-2', name: 'Describing Actions of Characters' }
            ]
          },
          {
            id: 'narrative-descriptive',
            name: 'Writing: Narrative/Descriptive',
            lessons: [
              { id: 'nd-1', name: 'Narrative Paragraphs' },
              { id: 'nd-2', name: 'Descriptive Paragraphs' }
            ]
          }
        ]
      },
      {
        id: 'relationships-community',
        name: 'Relationships: Community',
        subStrands: [
          {
            id: 'pronunciation',
            name: 'Listening & Speaking: Pronunciation',
            lessons: [
              { id: 'pr-1', name: 'Semi-vowels and Diphthongs' },
              { id: 'pr-2', name: 'Stress on Content and Function Words' }
            ]
          },
          {
            id: 'reference-materials',
            name: 'Reading: Reference Materials',
            lessons: [
              { id: 'rm-1', name: 'Using Dictionary and Thesaurus' },
              { id: 'rm-2', name: 'Research using Encyclopedia' }
            ]
          },
          {
            id: 'adjectives',
            name: 'Grammar: Order of Adjectives',
            lessons: [
              { id: 'adj-1', name: 'Identifying Types of Adjectives' },
              { id: 'adj-2', name: 'Using Correct Order of Adjectives' }
            ]
          },
          {
            id: 'play-style',
            name: 'Reading: Play (Style)',
            lessons: [
              { id: 'pst-1', name: 'Features of Style in a Play' },
              { id: 'pst-2', name: 'Relating Style to Message' }
            ]
          },
          {
            id: 'letter-application',
            name: 'Writing: Letter of Application',
            lessons: [
              { id: 'la-1', name: 'Writing a Letter of Application' }
            ]
          }
        ]
      },
      {
        id: 'leisure-time',
        name: 'Leisure Time',
        subStrands: [
          {
            id: 'conversational-skills',
            name: 'Listening & Speaking: Negotiation',
            lessons: [
              { id: 'cs-1', name: 'Negotiation Skills' }
            ]
          },
          {
            id: 'reading-fluency',
            name: 'Reading: Fluency',
            lessons: [
              { id: 'rf-1', name: 'Ways of Enhancing Fluency' },
              { id: 'rf-2', name: 'Reading with Speed and Expression' }
            ]
          },
          {
            id: 'adverbs-comparison',
            name: 'Grammar: Comparison of Adverbs',
            lessons: [
              { id: 'adv-1', name: 'Degrees of Comparison' },
              { id: 'adv-2', name: 'Using Adverbs in Sentences' }
            ]
          },
          {
            id: 'play-themes',
            name: 'Reading: Play (Themes)',
            lessons: [
              { id: 'pt-1', name: 'Identifying Themes in a Play' },
              { id: 'pt-2', name: 'Relating Themes to Real Life' }
            ]
          },
          {
            id: 'spelling',
            name: 'Writing: Spelling',
            lessons: [
              { id: 'sp-1', name: 'Homonyms and Homophones' },
              { id: 'sp-2', name: 'Double Consonants and Vowels' }
            ]
          }
        ]
      }
    ]
  }
];

const KISWAHILI_CURRICULUM: GradeCurriculum[] = [
  {
    id: 'grade-7',
    name: 'Grade 7',
    strands: [
      {
        id: 'usafi',
        name: 'Usafi wa Kibinafsi',
        subStrands: [
          {
            id: 'kusikiliza',
            name: 'Kusikiliza na Kuzungumza',
            lessons: [
              { id: 'kz-1', name: 'Kusikiliza na kujibu (Simba na Mnyama Mgeni)' },
              { id: 'kz-2', name: 'Kusikiliza na kujibu (Adabu za maamkizi)' }
            ]
          },
          {
            id: 'kusoma-ufahamu',
            name: 'Kusoma',
            lessons: [
              { id: 'ks-1', name: 'Ufahamu wa kifungu cha simulizi (Picha)' },
              { id: 'ks-2', name: 'Ufahamu wa kifungu cha simulizi (Maswali)' },
              { id: 'ks-3', name: 'Ufahamu wa kifungu cha simulizi (Mtandaoni)' }
            ]
          },
          {
            id: 'kuandika-viakifishi',
            name: 'Kuandika',
            lessons: [
              { id: 'ka-1', name: 'Viakifishi: Herufi kubwa' },
              { id: 'ka-2', name: 'Viakifishi: Kikomo' }
            ]
          },
          {
            id: 'sarufi-nomino',
            name: 'Sarufi',
            lessons: [
              { id: 'sr-1', name: 'Aina za nomino: Nomino za pekee (Kutambua)' },
              { id: 'sr-2', name: 'Aina za nomino: Nomino za pekee (Sentensi)' },
              { id: 'sr-3', name: 'Aina za nomino: Nomino za kawaida (Kutambua)' },
              { id: 'sr-4', name: 'Aina za nomino: Nomino za kawaida (Matumizi)' }
            ]
          }
        ]
      },
      {
        id: 'lishe',
        name: 'Lishe Bora',
        subStrands: [
          {
            id: 'kusikiliza-kina',
            name: 'Kusikiliza kwa Kina',
            lessons: [
              { id: 'kk-1', name: 'Sauti dh na th (Kusikiliza)' },
              { id: 'kk-2', name: 'Vitanzandimi (dh na th)' }
            ]
          },
          {
            id: 'kusoma-mapana',
            name: 'Kusoma kwa Mapana',
            lessons: [
              { id: 'km-1', name: 'Kusimulia kisa' },
              { id: 'km-2', name: 'Kusoma matini maktabani/mtandaoni' },
              { id: 'km-3', name: 'Kuandika muhtasari wa hadithi' }
            ]
          },
          {
            id: 'kuandika-barua',
            name: 'Kuandika',
            lessons: [
              { id: 'kb-1', name: 'Barua ya kirafiki ya mwaliko (Kusoma)' },
              { id: 'kb-2', name: 'Barua ya kirafiki ya mwaliko (Kuandika)' }
            ]
          },
          {
            id: 'sarufi-makundi',
            name: 'Sarufi',
            lessons: [
              { id: 'sm-1', name: 'Nomino za makundi (Kutambua)' },
              { id: 'sm-2', name: 'Nomino za makundi (Sentensi)' },
              { id: 'sm-3', name: 'Nomino za dhahania (Kutambua)' },
              { id: 'sm-4', name: 'Nomino za dhahania (Sentensi)' }
            ]
          }
        ]
      },
      {
        id: 'uhuru',
        name: 'Uhuru wa Wanyama',
        subStrands: [
          {
            id: 'fasihi',
            name: 'Fasihi',
            lessons: [
              { id: 'fs-1', name: 'Tanzu za fasihi (Maana)' },
              { id: 'fs-2', name: 'Aina za tungo za fasihi' }
            ]
          },
          {
            id: 'kusoma-novela',
            name: 'Kusoma',
            lessons: [
              { id: 'kn-1', name: 'Kusoma kwa kina: Novela (Maana)' },
              { id: 'kn-2', name: 'Kusoma kwa kina: Novela (Sifa)' }
            ]
          },
          {
            id: 'insha-kubuni',
            name: 'Kuandika',
            lessons: [
              { id: 'ik-1', name: 'Insha za kubuni (Mada)' },
              { id: 'ik-2', name: 'Insha za kubuni (Kuandika)' }
            ]
          },
          {
            id: 'sarufi-wingi',
            name: 'Sarufi',
            lessons: [
              { id: 'sw-1', name: 'Nomino za wingi (Kutambua)' },
              { id: 'sw-2', name: 'Nomino za wingi (Sentensi)' },
              { id: 'sw-3', name: 'Nomino za vitenzi-jina (Kutambua)' },
              { id: 'sw-4', name: 'Nomino za vitenzi-jina (Matumizi)' }
            ]
          }
        ]
      },
      {
        id: 'maliasili',
        name: 'Aina za Maliasili',
        subStrands: [
          {
            id: 'nyimbo',
            name: 'Nyimbo',
            lessons: [
              { id: 'ny-1', name: 'Nyimbo za watoto (Kutaja)' },
              { id: 'ny-2', name: 'Sifa za nyimbo za watoto' },
              { id: 'ny-3', name: 'Nyimbo za bembelezi (Kutaja)' },
              { id: 'ny-4', name: 'Sifa za nyimbo za bembelezi' }
            ]
          },
          {
            id: 'kusoma-ufasaha',
            name: 'Kusoma',
            lessons: [
              { id: 'ku-1', name: 'Kusoma kwa ufasaha (Kifungu)' },
              { id: 'ku-2', name: 'Kuigiza mtangazaji' }
            ]
          },
          {
            id: 'insha-masimulizi',
            name: 'Kuandika',
            lessons: [
              { id: 'im-1', name: 'Insha ya masimulizi (Lugha)' },
              { id: 'im-2', name: 'Insha ya masimulizi (Wahusika na Mandhari)' }
            ]
          },
          {
            id: 'sarufi-nyakati',
            name: 'Sarufi',
            lessons: [
              { id: 'sn-1', name: 'Wakati uliopo' },
              { id: 'sn-2', name: 'Wakati uliopita' },
              { id: 'sn-3', name: 'Wakati ujao' }
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
        id: 'usafi-umma',
        name: 'Usafi wa Sehemu za Umma',
        subStrands: [
          {
            id: 'kusikiliza-mahojiano',
            name: 'Kusikiliza na Kuzungumza: Mahojiano',
            lessons: [
              { id: 'km-1', name: 'Kusikiliza mahojiano' },
              { id: 'km-2', name: 'Kujibu mahojiano' }
            ]
          },
          {
            id: 'kusoma-simulizi',
            name: 'Kusoma: Ufahamu wa Simulizi',
            lessons: [
              { id: 'ks-1', name: 'Kudondoa habari na kupanga matukio' },
              { id: 'ks-2', name: 'Utabiri na msamiati katika ufahamu' }
            ]
          },
          {
            id: 'kuandika-viakifishi',
            name: 'Kuandika: Viakifishi',
            lessons: [
              { id: 'kv-1', name: 'Alama ya hisi na ritifaa (Kutambua)' },
              { id: 'kv-2', name: 'Alama ya hisi na ritifaa (Kutumia)' }
            ]
          },
          {
            id: 'sarufi-viwakilishi',
            name: 'Sarufi: Viwakilishi',
            lessons: [
              { id: 'sv-1', name: 'Viwakilishi vya nafsi, vionyeshi na idadi (Kutambua)' },
              { id: 'sv-2', name: 'Viwakilishi vya nafsi, vionyeshi na idadi (Kutumia)' }
            ]
          }
        ]
      },
      {
        id: 'matumizi-dawa',
        name: 'Matumizi Yafaayo ya Dawa',
        subStrands: [
          {
            id: 'sauti-g-gh',
            name: 'Kusikiliza kwa Kina',
            lessons: [
              { id: 'sg-1', name: 'Sauti /g/ na /gh/ (Kutambua)' },
              { id: 'sg-2', name: 'Sauti /g/ na /gh/ (Kutamka)' }
            ]
          },
          {
            id: 'kusoma-mapana',
            name: 'Kusoma kwa Mapana',
            lessons: [
              { id: 'kp-1', name: 'Matini ya kujichagulia (Msamiati)' },
              { id: 'kp-2', name: 'Matini ya kujichagulia (Ujumbe)' }
            ]
          },
          {
            id: 'barua-kirafiki',
            name: 'Kuandika: Barua ya Kirafiki',
            lessons: [
              { id: 'bk-1', name: 'Barua ya kutoa shukrani (Umuhimu)' },
              { id: 'bk-2', name: 'Barua ya kutoa shukrani (Muundo)' }
            ]
          },
          {
            id: 'viwakilishi-sifa',
            name: 'Sarufi: Viwakilishi',
            lessons: [
              { id: 'vs-1', name: 'Viwakilishi vya sifa, pekee na viulizi (Kutambua)' },
              { id: 'vs-2', name: 'Viwakilishi vya sifa, pekee na viulizi (Kutumia)' }
            ]
          }
        ]
      },
      {
        id: 'dhiki-wanyama',
        name: 'Dhiki Zinazokumba Wanyama',
        subStrands: [
          {
            id: 'mighani',
            name: 'Kusikiliza na Kuzungumza: Mighani',
            lessons: [
              { id: 'mg-1', name: 'Maana na sifa za mighani' },
              { id: 'mg-2', name: 'Ujumbe na uwasilishaji wa mighani' }
            ]
          },
          {
            id: 'tamthilia',
            name: 'Kusoma kwa Kina: Tamthilia',
            lessons: [
              { id: 'tm-1', name: 'Maana na sifa za tamthilia' },
              { id: 'tm-2', name: 'Kuchambua tamthilia' }
            ]
          },
          {
            id: 'insha-masimulizi',
            name: 'Kuandika: Insha ya Masimulizi',
            lessons: [
              { id: 'im-1', name: 'Wazo kuu katika insha' },
              { id: 'im-2', name: 'Kuendeleza wazo kuu' }
            ]
          },
          {
            id: 'vimilikishi',
            name: 'Sarufi: Viwakilishi',
            lessons: [
              { id: 'vm-1', name: 'Viwakilishi vimilikishi na visisitizi (Kutambua)' },
              { id: 'vm-2', name: 'Viwakilishi vimilikishi na visisitizi (Kutumia)' }
            ]
          }
        ]
      },
      {
        id: 'maliasili-bora',
        name: 'Matumizi Bora ya Maliasili',
        subStrands: [
          {
            id: 'visasili',
            name: 'Hadithi Visasili',
            lessons: [
              { id: 'vs-1', name: 'Maana na sifa za visasili' },
              { id: 'vs-2', name: 'Uwasilishaji wa visasili' }
            ]
          },
          {
            id: 'kusoma-ufasaha',
            name: 'Kusoma kwa Ufasaha',
            lessons: [
              { id: 'ku-1', name: 'Kusoma kwa matamshi bora' },
              { id: 'ku-2', name: 'Kusoma kwa sauti na ishara' }
            ]
          },
          {
            id: 'insha-lugha',
            name: 'Kuandika: Insha ya Masimulizi',
            lessons: [
              { id: 'il-1', name: 'Mbinu za lugha katika insha' },
              { id: 'il-2', name: 'Wahusika na mandhari' }
            ]
          },
          {
            id: 'nyakati-hali',
            name: 'Sarufi: Nyakati na Hali',
            lessons: [
              { id: 'nh-1', name: 'Hali ya mazoea na timilifu (Maana)' },
              { id: 'nh-2', name: 'Hali ya mazoea na timilifu (Matumizi)' }
            ]
          }
        ]
      },
      {
        id: 'majukumu-jinsia',
        name: 'Majukumu ya Kijinsia',
        subStrands: [
          {
            id: 'maagizo',
            name: 'Kusikiliza: Maagizo',
            lessons: [
              { id: 'mg-1', name: 'Maana na kutambua maagizo' },
              { id: 'mg-2', name: 'Kutoa na kupokea maagizo' }
            ]
          },
          {
            id: 'kusoma-ufahamu-2',
            name: 'Kusoma kwa Ufahamu',
            lessons: [
              { id: 'ku-3', name: 'Kudondoa habari na msamiati' }
            ]
          },
          {
            id: 'insha-maelekezo',
            name: 'Kuandika: Insha ya Maelekezo',
            lessons: [
              { id: 'ie-1', name: 'Sifa za insha ya maelekezo' },
              { id: 'ie-2', name: 'Kuandika insha ya maelekezo' }
            ]
          },
          {
            id: 'nyakati-hali-2',
            name: 'Sarufi: Nyakati na Hali',
            lessons: [
              { id: 'nh-3', name: 'Wakati uliopita/ujao hali timilifu (Viambishi)' },
              { id: 'nh-4', name: 'Wakati uliopita/ujao hali timilifu (Kutumia)' }
            ]
          }
        ]
      },
      {
        id: 'usalama-nyumbani',
        name: 'Usalama Nyumbani',
        subStrands: [
          {
            id: 'kusikiliza-kufasiri',
            name: 'Kusikiliza kwa Kufasiri',
            lessons: [
              { id: 'kf-1', name: 'Kutambua ujumbe na uhusiano na maisha' },
              { id: 'kf-2', name: 'Mafunzo kutokana na ujumbe' }
            ]
          },
          {
            id: 'tamthilia-maudhui',
            name: 'Kusoma: Tamthilia',
            lessons: [
              { id: 'tm-3', name: 'Maudhui katika tamthilia' },
              { id: 'tm-4', name: 'Dhamira katika tamthilia' }
            ]
          },
          {
            id: 'insha-mdokezo',
            name: 'Kuandika: Insha ya Mdokezo',
            lessons: [
              { id: 'imd-1', name: 'Maana na aina za insha ya mdokezo' },
              { id: 'imd-2', name: 'Kuandika insha ya mdokezo' }
            ]
          },
          {
            id: 'vivumishi-sifa',
            name: 'Sarufi: Vivumishi',
            lessons: [
              { id: 'vvs-1', name: 'Vivumishi vya sifa na viashiria (Kutambua)' },
              { id: 'vvs-2', name: 'Vivumishi vya sifa na viashiria (Kutumia)' }
            ]
          }
        ]
      },
      {
        id: 'mahitaji-maalumu',
        name: 'Kuhudumia Wenye Mahitaji Maalumu',
        subStrands: [
          {
            id: 'usikilizaji-husishi',
            name: 'Usikilizaji Husishi',
            lessons: [
              { id: 'uh-1', name: 'Maana na vipengele vya usikilizaji husishi' },
              { id: 'uh-2', name: 'Kushiriki katika usikilizaji husishi' }
            ]
          },
          {
            id: 'ufupisho',
            name: 'Kusoma: Ufupisho',
            lessons: [
              { id: 'uf-1', name: 'Maana na vipengele vya ufupisho' },
              { id: 'uf-2', name: 'Kufupisha kifungu' }
            ]
          },
          {
            id: 'insha-maelezo',
            name: 'Kuandika: Insha ya Maelezo',
            lessons: [
              { id: 'ime-1', name: 'Tamathali za lugha katika insha ya maelezo' },
              { id: 'ime-2', name: 'Kuandika insha ya maelezo' }
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
        id: 'usafi-mazingira',
        name: 'Usafi wa Mazingira',
        subStrands: [
          {
            id: 'mjadala',
            name: 'Kusikiliza na Kujibu: Mjadala',
            lessons: [
              { id: 'mj-1', name: 'Vipengele vya kuzingatia katika kusikiliza na kuchangia mjadala' },
              { id: 'mj-2', name: 'Kushiriki mjadala kwa kuzingatia vipengele vifaavyo' }
            ]
          },
          {
            id: 'ufahamu-simulizi',
            name: 'Kusoma kwa Ufahamu: Kifungu cha Simulizi',
            lessons: [
              { id: 'us-1', name: 'Kudondoa habari mahususi katika kifungu cha simulizi' },
              { id: 'us-2', name: 'Utabiri, ufasiri na msamiati katika kifungu cha simulizi' }
            ]
          },
          {
            id: 'viakifishi',
            name: 'Kuandika: Viakifishi',
            lessons: [
              { id: 'vk-1', name: 'Kutambua na kutumia alama ya koloni' },
              { id: 'vk-2', name: 'Kutambua na kutumia alama ya semi koloni' }
            ]
          },
          {
            id: 'vihusishi-mahali',
            name: 'Sarufi: Vihusishi',
            lessons: [
              { id: 'vm-1', name: 'Kutambua na kutumia vihusishi vya mahali' },
              { id: 'vm-2', name: 'Kutambua na kutumia vihusishi vya wakati' }
            ]
          },
          {
            id: 'sauti-b-mb',
            name: 'Kusikiliza kwa Kina: Sauti /b/ na /mb/',
            lessons: [
              { id: 'sb-1', name: 'Kutamka sauti /b/ na /mb/ na vitanzandimi vyake' }
            ]
          },
          {
            id: 'matini-kujichagulia',
            name: 'Kusoma kwa Mapana',
            lessons: [
              { id: 'mk-1', name: 'Kuteua, kufafanua ujumbe na msamiati wa matini' },
              { id: 'mk-2', name: 'Kutumia kamusi na kutunga sentensi' }
            ]
          },
          {
            id: 'barua-kirafiki',
            name: 'Kuandika: Barua ya Kirafiki',
            lessons: [
              { id: 'bk-1', name: 'Ujumbe, lugha na muundo wa kujibu barua ya kirafiki' },
              { id: 'bk-2', name: 'Kuandika majibu ya barua ya kirafiki' }
            ]
          },
          {
            id: 'vihusishi-unganifu',
            name: 'Sarufi: Vihusishi',
            lessons: [
              { id: 'vu-1', name: 'Kutambua na kutumia vihusishi vya -a unganifu' },
              { id: 'vu-2', name: 'Kutambua na kutumia vihusishi vya sababu' }
            ]
          }
        ]
      },
      {
        id: 'utunzaji-wanyama',
        name: 'Utunzaji wa Wanyama',
        subStrands: [
          {
            id: 'semi-tashbihi',
            name: 'Kusikiliza na Kuzungumza: Semi',
            lessons: [
              { id: 'st-1', name: 'Kueleza na kutambua tashbihi, sitiari na methali' },
              { id: 'st-2', name: 'Kutumia tashbihi, sitiari na methali katika uwasilishaji' }
            ]
          },
          {
            id: 'ushairi-sifa',
            name: 'Kusoma kwa Kina: Sifa za Ushairi',
            lessons: [
              { id: 'su-1', name: 'Maana na sifa za ushairi' },
              { id: 'su-2', name: 'Kuchambua sifa za ushairi katika diwani teule' }
            ]
          },
          {
            id: 'insha-masimulizi',
            name: 'Kuandika: Insha za Kubuni',
            lessons: [
              { id: 'im-1', name: 'Kufafanua ujumbe (Utangulizi, Kiini, Hitimisho, Wahusika)' },
              { id: 'im-2', name: 'Kuandika insha ya masimulizi' }
            ]
          },
          {
            id: 'vihusishi-vilinganishi',
            name: 'Sarufi: Vihusishi',
            lessons: [
              { id: 'vv-1', name: 'Kutambua na kutumia vihusishi vilinganishi' },
              { id: 'vv-2', name: 'Kutambua na kutumia kihusishi na' }
            ]
          },
          {
            id: 'vitendawili',
            name: 'Kusikiliza na Kuzungumza: Semi',
            lessons: [
              { id: 'vt-1', name: 'Maana, kutambua na kuwasilisha vitendawili' }
            ]
          },
          {
            id: 'nahau',
            name: 'Kusikiliza na Kuzungumza: Semi',
            lessons: [
              { id: 'nh-1', name: 'Maana, kutambua na matumizi ya nahau' }
            ]
          },
          {
            id: 'kusoma-ufasaha',
            name: 'Kusoma kwa Ufasaha',
            lessons: [
              { id: 'ku-1', name: 'Kusoma kwa matamshi bora na kasi ifaayo' },
              { id: 'ku-2', name: 'Kusoma kwa kuzingatia ishara za mwili' }
            ]
          },
          {
            id: 'lugha-kitamathali',
            name: 'Kuandika: Insha za Kubuni',
            lessons: [
              { id: 'lk-1', name: 'Lugha ya kitamathali, matendo na mandhari' },
              { id: 'lk-2', name: 'Kuandika insha yenye lugha ya kitamathali na mandhari' }
            ]
          },
          {
            id: 'nyakati-hali',
            name: 'Sarufi: Nyakati na Hali',
            lessons: [
              { id: 'nh-1', name: 'Matumizi ya -ki- ya masharti' },
              { id: 'nh-2', name: 'Matumizi ya -ka- ya kufuatana kwa vitendo' }
            ]
          },
          {
            id: 'ufahamu-kusikiliza',
            name: 'Kusikiliza na Kuzungumza',
            lessons: [
              { id: 'uk-1', name: 'Maana, kanuni na vipengele vya ufahamu wa kusikiliza' },
              { id: 'uk-2', name: 'Kushiriki katika ufahamu wa kusikiliza' }
            ]
          },
          {
            id: 'kusoma-ufahamu',
            name: 'Kusoma kwa Ufahamu',
            lessons: [
              { id: 'kuf-1', name: 'Kudondoa habari, utabiri na ufasiri' },
              { id: 'kuf-2', name: 'Kutambua na kutumia msamiati wa kifungu' }
            ]
          },
          {
            id: 'shajara',
            name: 'Kuandika: Insha za Kiuamilifu',
            lessons: [
              { id: 'sh-1', name: 'Maana, vipengele na kuandika shajara' }
            ]
          },
          {
            id: 'hali-masharti',
            name: 'Sarufi: Hali za Masharti',
            lessons: [
              { id: 'hm-1', name: 'Kutambua na kutumia hali ya masharti -nge-' },
              { id: 'hm-2', name: 'Kutambua na kutumia hali ya masharti -ngali-' }
            ]
          }
        ]
      },
      {
        id: 'usalama-barabarani',
        name: 'Usalama Barabarani',
        subStrands: [
          {
            id: 'kusikiliza-kufasiri',
            name: 'Kusikiliza na Kuzungumza: Kufasiri',
            lessons: [
              { id: 'kk-1', name: 'Maana na kueleza misimamo/mielekeo' },
              { id: 'kk-2', name: 'Kulinganisha misimamo na mielekeo ya ujumbe' }
            ]
          }
        ]
      }
    ]
  }
];

const INTEGRATED_SCIENCE_CURRICULUM: GradeCurriculum[] = [
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
  }
];

const IRE_CURRICULUM: GradeCurriculum[] = [
  {
    id: 'grade-7',
    name: 'Grade 7',
    strands: [
      {
        id: 'quran',
        name: 'Quran',
        subStrands: [
          {
            id: 'revelation',
            name: 'Revelation of the Quran',
            lessons: [
              { id: 'rv-1', name: 'Stages of revelation' },
              { id: 'rv-2', name: 'Importance of Quran' }
            ]
          },
          {
            id: 'surahs',
            name: 'Selected Surahs',
            lessons: [
              { id: 'su-1', name: 'Surah Al-Fatiha' },
              { id: 'su-2', name: 'Surah Al-Nas' },
              { id: 'su-3', name: 'Surah Al-Falaq' }
            ]
          }
        ]
      },
      {
        id: 'hadith',
        name: 'Hadith',
        subStrands: [
          {
            id: 'intro-hadith',
            name: 'Introduction to Hadith',
            lessons: [
              { id: 'hd-1', name: 'Meaning of Hadith and Sunnah' },
              { id: 'hd-2', name: 'Importance of Hadith' }
            ]
          }
        ]
      },
      {
        id: 'pillars-iman',
        name: 'Pillars of Iman',
        subStrands: [
          {
            id: 'belief-allah',
            name: 'Belief in Allah',
            lessons: [
              { id: 'ba-1', name: 'Attributes of Allah' },
              { id: 'ba-2', name: 'Significance of Tawheed' }
            ]
          }
        ]
      },
      {
        id: 'pillars-islam',
        name: 'Pillars of Islam',
        subStrands: [
          {
            id: 'kalimah',
            name: 'Kalimah',
            lessons: [
              { id: 'kl-1', name: 'Meaning of Kalimah' }
            ]
          },
          {
            id: 'swalah',
            name: 'Swalah',
            lessons: [
              { id: 'sw-1', name: 'Importance of Swalah' },
              { id: 'sw-2', name: 'Steps of Swalah' }
            ]
          }
        ]
      }
    ]
  }
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