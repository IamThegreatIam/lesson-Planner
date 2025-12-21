
import { GradeCurriculum } from '../types';

export const IRE_CURRICULUM: GradeCurriculum[] = [
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
