
import { GradeCurriculum } from '../types';

export const CREATIVE_ARTS_CURRICULUM: GradeCurriculum[] = [
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
