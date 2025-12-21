
import { GradeCurriculum } from '../types';

export const MATHS_CURRICULUM: GradeCurriculum[] = [
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
